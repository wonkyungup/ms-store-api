# MS-Store-api

## Contents

- [Quick Start](#quick-start)

## <a name="quick-start"></a>Quick Start

### Getting started

To get your product ID, please do the following:

1. Open [MS-Store](https://apps.microsoft.com/store/apps) browser 
2. Please click on the product you want
3. The ID at the end of the Internet address is the product ID
![get-ms-store-productid](https://user-images.githubusercontent.com/34180230/201943867-12261a29-0b2f-427a-bef4-acd269be8b63.gif)


#### If you have a product ID, send method Get to the corresponding API address.
- **https://api.for-developer.link/msstore/app/{productID}**

- Get it as JSON type:
* This will take some time. (5-10 seconds)
```
{
  "name": "Adobe Express",
  "publisher": "Adobe Inc.",
  "category": "Multimedia design",
  "description": "Create beautiful graphics, web pages, and video stories – in minutes.\nAdobe Express enables you to quickly and easily create standout social graphics, flyers, logos, and more on web and mobile. No design skills needed and it’s FREE to get started.\n\nFeel like you have a designer in your corner as you select or upload your own images, try different layouts, add text to photos, and apply effects and filters in a snap.\n\nThousands of Beautifully Designed, On-Trend Templates\nFind just the right template for:\n• Stories, social posts, and ads for Instagram, Facebook, Snapchat, Twitter, and Pinterest\n• Logos\n• Posters and flyers\n• Banners\n• Photo collages\n• Invitations\n• Business graphics\n• Presentations\nAnd more....\n\nAdobe Stock and Adobe Fonts\nAccess hundreds of thousands of royalty-free, diverse Adobe Stock collection photos, Adobe Fonts, icons, backgrounds, and more.\n  \nEasy-to-Use Tools and Quick Actions\n• Animate content, resize designs for any platform, or apply your brand with just a tap\n• In just a few clicks remove background, convert videos to GIF, resize videos and images, reverse video, merge video, trim video, crop video, change video speed, convert videos to MP4 or images to JPG and PNG\n• Apply your brand to your design with one tap\n• Convert and export documents to and from PDF and other file types while preserving formatting and fonts in a snap\n\nCustomize Your Designs\nAchieve the look you want with Photoshop effects in just a few taps to customize cutouts, layer and reorder multiple assets and effects, and add imaging effects and blend modes.\n\nCreate with Anyone, Anywhere\nWork at your desk or on the go with both a web app and mobile app that sync automatically.\nIt's easy to stay consistent and on-brand when working across Adobe Express and Creative Cloud through built-in shared libraries, templates and brands.\n\nGET THE FULL EXPERIENCE - START WITH A FREE TRIAL\n\nCan’t wait to see what you create! Have fun!\n@AdobeExpress\n\nYour Adobe Express membership unlocks more templates, access to the entire royalty-free Adobe Stock photo collection*, effects, and fonts plus premium features like Apply Brand, Customize Cutout, and Resize. Your paid membership includes the premium versions of the following applications:\n• Adobe Express on web and mobile (iOS and Android)\n• Adobe Premiere Rush on desktop and mobile (iOS and Android)\n• Adobe Photoshop Express on mobile (iOS, Android)\n• Adobe Spark Video on mobile (iOS)\n• Adobe Spark Page on mobile (iOS)\n*The Adobe Stock photo collection does not include Premium or editorial content. Limited Adobe Stock functionality available in web page and video features within the desktop app.\n\nGOT QUESTIONS?\n• Instagram/Facebook: @AdobeExpress\n• Twitter: @AdobeExpress\n• Adobe Support https://helpx.adobe.com/support/express.html\nSubmit feature requests here: creativecloudexpress.uservoice.com",
  "releaseYear": "2021",
  "version": "WHAT'S NEW\nSpark Post is now Adobe Express and it’s full of new templates, photos, fonts, and more! \n \nAdobe Express includes everything you love about Spark and much more. Hit the ground running with new on-trend templates, Adobe Stock photos, backgrounds, fonts, illustrations, and icons. With just a few taps, customer your design with easy-to-apply effects, filters, and textures, that can be used together and layered. ",
  "requirements": {
    "availableTarget": "PC",
    "os": "Windows 10 version 19041.0 or higher",
    "architecture": "neutral"
  },
  "privacyPolicy": "https://www.adobe.com/privacy.html"
}
```

### Precautions when using
- `Sometimes, if you don't get results, try after a few minutes.`
- `Because it is a personal project, the service can be stopped at any time in the event of a problem.`

### Questions
- `Please register on the issue card` 
