# MS-Store-api

## Contents

- [Quick Start](#quick-start)

## <a name="quick-start"></a>Quick Start

### Getting started

To get your product ID, please do the following:

1. Open [MS-Store](https://apps.microsoft.com/store/apps?hl=en) browser 
2. Please click on the product you want
3. The ID at the end of the Internet address is the product ID
![ms-store-productID](https://user-images.githubusercontent.com/34180230/204074446-60175418-905b-451b-99aa-7b7219ede626.gif)



#### If you have a product ID, send method Get to the corresponding API address.
- **https://api.for-developer.link/ms/app/{productID}**
  - EX) https://api.for-developer.link/ms/app/9NCBCSZSJRSB
* Please note that it will take some time (5-10 seconds)
- Get it as JSON type:
```
{
  "name": "Spotify - Music and Podcasts",
  "publisher": "Spotify AB",
  "category": "Music",
  "description": "Love music and podcasts? Play your favorite songs, podcasts and albums free on Windows with Spotify.\n\nStream the tracks you love instantly, browse the charts or fire up readymade playlists in every genre and mood. Radio plays you great song after great song, based on your music taste. Discover new music too, with awesome playlists built just for you.\n\nSpotify also offers thousands of Podcasts, including originals that you can't find anywhere else. \n\nStream Spotify free, with occasional ads, or go Premium.\n\nFree:\n• Play any song, artist, album, playlist, or podcast instantly\n• Browse hundreds of readymade playlists in every genre and mood\n• Watch video podcasts in mini-player or full screen mode\n• Stay on top of the Charts\n• Stream Radio \n• Enjoy audiobooks and videos\n• Discover more music with personalized playlists\n \nPremium:\n• Download tunes and play offline\n• Listen ad-free\n• Get even better sound quality\n• Try it free for 30 days, no strings attached\n\nLike us on Facebook: http://www.facebook.com/spotify \nFollow us on Twitter: http://twitter.com/spotify",
  "releaseYear": "2017",
  "version": "",
  "requirements": {
    "availableTarget": "PC",
    "os": "Windows 10 version 17763.0 or higher",
    "architecture": "X86"
  },
  "privacyPolicy": "https://www.spotify.com/legal/privacy-policy/"
}
```

### Precautions when using
- Sometimes, if you don't get results, try after a few minutes
- Because it is a personal project, the service can be stopped at any time in the event of a problem

### Questions
- Please register on the issue card
