'use strict'

// import puppeteer from 'puppeteer-core'
import chromium from 'chrome-aws-lambda'
import * as cheerio from 'cheerio'
import Response from './assets/response'
import Defs from './assets/constants'

let browserWSEndpoint = null

const initBrowser = async () => {
  // const browser = await puppeteer.launch({
  const browser = await chromium.puppeteer.launch({
    args: chromium.args,
    defaultViewport: chromium.defaultViewport,
    executablePath: await chromium.executablePath,
    headless: true,
    ignoreHTTPSErrors: true,
    userDataDir: Defs.MS_STORE_PUPPETEER_USER_DATA_DIR
  })

  browser.newPage()
  browserWSEndpoint = browser.wsEndpoint()  

  return browser
}

const withPage = async (browser, productID) => {
  const page = await browser.newPage()
  await page.goto(`${Defs.MS_STORE_URL}/${productID}`)

  return await page.content()
}

export const index = async (event, context) => {
  context.callbackWaitsForEmptyEventLoop = false
  const app = {}
  let browser = null

  try {
    if (browserWSEndpoint) {
      browser = await chromium.puppeteer.connect({ browserWSEndpoint })
    }

    if (!browser || !browser.isConnected()) {
      browser = await initBrowser()
    }

    const productID = event.pathParameters['productID']
    const $ = cheerio.load(await withPage(browser, productID))
    const $main = $('div[role=main]')

    app.name = $main.find('h1')?.text()
    app.publisher = $main.find('a')?.eq(3).text()
    app.category = $main.find('#categoryText')?.text()
    app.description = $main.find('.line-clamp')?.eq(0).text()
    app.releaseYear = $main.find('#versionHeader_responsive')?.parent().find('span')?.eq(0).text().split(': ')[1]
    app.version = $main.find('.line-clamp')?.eq(1).text()

    const arrRequirements = $main.find('.name-styles')?.parent().text().replace('Available on: ', '').replace('OS: ', '@').replace('Architecture: ', '@').split('@')
    app.requirements = {
      availableTarget: arrRequirements[0],
      os: arrRequirements[1],
      architecture: arrRequirements[2]
    }
    app.privacyPolicy = $main.find('#privacyLink_responsive')?.attr('href')
  } catch(err) {
    return Response.success(Defs.MS_STORE_CATCH_ERROR)
  }

  return Response.success(app)
}
