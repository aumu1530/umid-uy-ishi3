

// let main = document.querySelector('.main');
// let h1 = document.querySelector('.h1');

// const obwiySumma = products.reduce((soni, el) => {
//   return (el.price += soni);
// }, 0);

// h1.innerHTML = obwiySumma.toLocaleString() + " so'm";

// function addHtml() {
//   let html = '';
//   const ibp = products.filter((el) => el.category.name === 'ИБП');
//   ibp.map((el) => {
//     html += `
//     <div class="card">
//       <img src=${el.image} />
//       <h1>${el.name}</h1>
//       <p>${el.description}</p>
//       <b>${el.price.toLocaleString()} сум</b>
//       <button>${el.category.name}</button> 
//     </div>
//     `;
//     main.innerHTML = html;
//   });
// }
// addHtml();

const razer = [
  {
    _id: '630efe226a31de8a5d79ff9f',
    name: 'Razer Blade 15 Bundle V5 Essential',
    image:
      'https://assets3.razerzone.com/hIBWWy-iWluf9ersxDFTkGL3UEs=/500x500/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fh9b%2Fh0d%2F9421204127774%2Fblade15-razercare-recon-500x500.png',
    price: 4999,
    count: 1,
    desc: '· Razer Blade 15 GeForce RTX 3080 Ti ·Razer Recon 15 Rolltop Backpack ·RazerCare Essential For Blade 15',
    category: 'Laptop',
    createdAt: '2022-08-31T06:22:26.902Z',
    updatedAt: '2022-10-05T11:25:44.487Z',
    __v: 0,
  },
  {
    _id: '630f00476a31de8a5d79ffb8',
    name: 'Razer Huntsman V2 Analog',
    image:
      'https://assets3.razerzone.com/16i2UZfus0sZx4JBfQlLMf23LO0=/500x500/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fh46%2Fh03%2F9143301505054%2Frazer-huntsman-v2-analog-500x500.png',
    price: 249,
    count: 1,
    desc: 'Gaming Keyboard with Razer™ Analog Optical Switches',
    category: 'Keyboards',
    createdAt: '2022-08-31T06:31:35.993Z',
    updatedAt: '2022-10-05T11:27:06.790Z',
    __v: 0,
  },
  {
    _id: '630f00796a31de8a5d79ffbb',
    name: 'Razer Huntsman V2',
    image:
      'https://assets3.razerzone.com/_7Mf-qOCANTfu4W72kTfHkX0UX4=/500x500/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fh61%2Fhd7%2F9239675633694%2Fhuntsman-v2-500x500.png',
    price: 189,
    count: 1,
    desc: 'Optical Gaming Keyboard with Near-zero Input Latency',
    category: 'Keyboards',
    createdAt: '2022-08-31T06:32:25.617Z',
    updatedAt: '2022-10-05T11:27:35.508Z',
    __v: 0,
  },
  {
    _id: '630f00f26a31de8a5d79ffc3',
    name: 'Razer Huntsman V2 Tenkeyless',
    image:
      'https://assets3.razerzone.com/02qciF5cWDrRcrL9CxzbHC017No=/500x500/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fhb8%2Fhd7%2F9239675600926%2Fhuntsman-v2-tkl-500x500.png',
    price: 149,
    count: 1,
    desc: 'Tenkeyless Optical Gaming Keyboard by Razer.com',
    category: 'Keyboards',
    createdAt: '2022-08-31T06:34:26.192Z',
    updatedAt: '2022-10-05T11:27:56.566Z',
    __v: 0,
  },
  {
    _id: '630f01336a31de8a5d79ffc7',
    name: 'Razer Huntsman V2 Tenkeyless - Linear Optical Switch - US - ESL Edition',
    image:
      'https://assets3.razerzone.com/A1rk14Tikp9uFf5GNpx0zSMiA20=/500x500/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fheb%2Fh55%2F9325793312798%2Fesl-huntsman-v2-tkl-500x500.png',
    price: 179,
    count: 1,
    desc: 'Tenkeyless Optical Gaming Keyboard by Razer.com',
    category: 'Keyboards',
    createdAt: '2022-08-31T06:35:31.861Z',
    updatedAt: '2022-10-05T11:28:21.188Z',
    __v: 0,
  },
  {
    _id: '630f015c6a31de8a5d79ffca',
    name: 'Razer Huntsman Mini Analog - US',
    image:
      'https://assets3.razerzone.com/UL-pRJQaMYYdLTXGwfiMt7UFOQg=/500x500/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fh79%2Fh55%2F9374925029406%2Fhuntsman-mini-analog-500x500.png',
    price: 149,
    count: 1,
    desc: '60% Gaming Keyboard with Analog Optical Switches by Razer.com',
    category: 'Keyboards',
    createdAt: '2022-08-31T06:36:12.148Z',
    updatedAt: '2022-10-05T11:28:31.861Z',
    __v: 0,
  },
  {
    _id: '630f01876a31de8a5d79ffcd',
    name: 'Razer Huntsman Tournament Edition',
    image:
      'https://assets3.razerzone.com/osFftXSrpcWTP2fa_rDKAOniGYU=/500x500/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fhf5%2Fh0b%2F9178922123294%2Fhuntsman-te-se-500x500.png',
    price: 89,
    count: 1,
    desc: 'Compact Gaming Keyboard with Razer™ Linear Optical Switches',
    category: 'Keyboards',
    createdAt: '2022-08-31T06:36:55.672Z',
    updatedAt: '2022-10-05T11:28:42.263Z',
    __v: 0,
  },
  {
    _id: '630f01d56a31de8a5d79ffd3',
    name: 'Razer BlackWidow V3 Pro',
    image:
      'https://assets3.razerzone.com/fJjdyKQcm84F3VvGt9MeppIFJMc=/500x500/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fh6e%2Fh7a%2F9086238588958%2Frazer-blackwidow-v3-pro-500x500.png',
    price: 229,
    count: 1,
    desc: 'Wireless Full-height Mechanical Gaming Keyboard with Razer Chroma RGB',
    category: 'Keyboards',
    createdAt: '2022-08-31T06:38:13.511Z',
    updatedAt: '2022-10-05T11:29:03.159Z',
    __v: 0,
  },
  {
    _id: '630f01f36a31de8a5d79ffd6',
    name: 'Razer BlackWidow V3',
    image:
      'https://assets3.razerzone.com/lG472mJG7VRIpB9wSLK1tWJykRg=/500x500/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fh66%2Fhed%2F9090120679454%2Fblackwidow-v3-500x500.png',
    price: 139,
    count: 1,
    desc: 'Mechanical Gaming Keyboard with Razer Chroma RGB',
    category: 'Keyboards',
    createdAt: '2022-08-31T06:38:43.675Z',
    updatedAt: '2022-10-05T11:29:14.703Z',
    __v: 0,
  },
  {
    _id: '630f02136a31de8a5d79ffd9',
    name: 'Razer BlackWidow V3 - Green Switch - US - Halo Infinite',
    image:
      'https://assets3.razerzone.com/TuvJd5SGiPHD1VzeimjkN7nrtPA=/500x500/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fh78%2Fhe7%2F9245362159646%2Fblackwidow-v3-halo-infinite-500x500.png',
    price: 179,
    count: 1,
    desc: 'Mechanical Gaming Keyboard with Razer Chroma RGB',
    category: 'Keyboards',
    createdAt: '2022-08-31T06:39:15.037Z',
    updatedAt: '2022-10-05T11:29:24.622Z',
    __v: 0,
  },
  {
    _id: '630f025a6a31de8a5d79ffdf',
    name: 'Razer Ornata V3 - US',
    image:
      'https://assets3.razerzone.com/hx0Mq1e2vMuB0PUuQ-phNFdJ0Ys=/500x500/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fhc1%2Fhb3%2F9411491332126%2Fornata-v3-3-500x500.png',
    price: 69,
    count: 1,
    desc: 'Low-profile Mecha-membrane RGB Keyboard',
    category: 'Keyboards',
    createdAt: '2022-08-31T06:40:26.730Z',
    updatedAt: '2022-10-05T11:29:57.840Z',
    __v: 0,
  },
  {
    _id: '630f02776a31de8a5d79ffe2',
    name: 'Razer Pro Type Ultra - US',
    image:
      'https://assets3.razerzone.com/OIO4GRol7t1vVcIOHQ95KdsGyLo=/500x500/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fh37%2Fhda%2F9257514041374%2F211102-pro-type-ultra-500x500.png',
    price: 159,
    count: 1,
    desc: 'Wireless Mechanical Keyboard for Productivity',
    category: 'Keyboards',
    createdAt: '2022-08-31T06:40:55.196Z',
    updatedAt: '2022-10-05T11:30:06.833Z',
    __v: 0,
  },
  {
    _id: '630f03706a31de8a5d79ffea',
    name: 'Razer BlackShark V2 Pro',
    image:
      'https://assets3.razerzone.com/BUeifXajBHcmrh2rR5dQYv06nR0=/500x500/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fh83%2Fh7e%2F9399589666846%2F2-blackshark-v2-pro-black-500x500.png',
    price: 149,
    count: 1,
    desc: 'Wireless esports headset',
    category: 'Headsets',
    createdAt: '2022-08-31T06:45:04.101Z',
    updatedAt: '2022-10-05T11:30:26.649Z',
    __v: 0,
  },
  {
    _id: '630f039e6a31de8a5d79ffed',
    name: 'Razer BlackShark V2 Pro - Six Siege Special Edition',
    image:
      'https://assets3.razerzone.com/5JoJ3xIZ8uh7j1LBVvtc48__a28=/500x500/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fha4%2Fhfc%2F9188463181854%2Fblackshark-v2-pro-six-siege-se-500x500.png',
    price: 149,
    count: 1,
    desc: 'Wireless esports headset',
    category: 'Headsets',
    createdAt: '2022-08-31T06:45:50.062Z',
    updatedAt: '2022-10-05T11:30:59.986Z',
    __v: 0,
  },
  {
    _id: '630f04896a31de8a5d79fff1',
    name: 'Razer BlackShark V2 CouRageJD Edition',
    image:
      'https://assets3.razerzone.com/dvtquq1AAPKkgNShT759U9HyVfs=/500x500/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fhdf%2Fh6d%2F9196212355102%2FBlackShark-V2-CourageJD-Edition-500x500.png',
    price: 54,
    count: 1,
    desc: 'Multi-platform wired esports headset',
    category: 'Headsets',
    createdAt: '2022-08-31T06:49:45.950Z',
    updatedAt: '2022-10-05T11:31:15.521Z',
    __v: 0,
  },
  {
    _id: '630f04aa6a31de8a5d79fff4',
    name: 'Razer BlackShark V2 Special Edition',
    image:
      'https://assets3.razerzone.com/xe4P8Y_ajpV36genrpU6hTr64fM=/500x500/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fh71%2Fh7b%2F9399589732382%2F2-blackshark-v2-black-se-500x500.png',
    price: 109,
    count: 1,
    desc: 'Multi-platform wired esports headset',
    category: 'Headsets',
    createdAt: '2022-08-31T06:50:18.868Z',
    updatedAt: '2022-10-05T11:31:28.539Z',
    __v: 0,
  },
  {
    _id: '630f10c80c768104b94ded27',
    name: 'Razer BlackShark V2 - ESL Edition',
    image:
      'https://assets3.razerzone.com/v3xJu-XCeU4ZGrT47dycI20VyNE=/500x500/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fh53%2Fh59%2F9325793411102%2Fesl-blackshark-v2-500x500.png',
    price: 119,
    count: 1,
    desc: 'Multi-platform wired esports headset',
    category: 'Headsets',
    createdAt: '2022-08-31T07:42:00.145Z',
    updatedAt: '2022-10-05T11:31:50.373Z',
    __v: 0,
  },
  {
    _id: '630f10ed0c768104b94ded2a',
    name: 'Razer BlackShark V2 X USB - Black',
    image:
      'https://assets3.razerzone.com/0hfUawch_bcD6BssG6F0x0l9m4U=/500x500/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fh9c%2Fh79%2F9431346348062%2Fblackshark-v2-x-usb-500x500.png',
    price: 59,
    count: 1,
    desc: 'Wired esports headset with noise-cancelling mic',
    category: 'Headsets',
    createdAt: '2022-08-31T07:42:37.216Z',
    updatedAt: '2022-10-05T11:32:10.298Z',
    __v: 0,
  },
  {
    _id: '630f11b30c768104b94ded2e',
    name: 'Razer Barracuda Pro',
    image:
      'https://assets3.razerzone.com/eY_PQPH1wakpUwz0Ge0sdDlQW70=/500x500/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fhbb%2Fhe8%2F9412836753438%2Fbarracuda-2-500x500.png',
    price: 249,
    count: 1,
    desc: 'Wireless Gaming Headset with Hybrid ANC',
    category: 'Headsets',
    createdAt: '2022-08-31T07:45:55.345Z',
    updatedAt: '2022-10-05T11:34:20.347Z',
    __v: 0,
  },
  {
    _id: '630f11dd0c768104b94ded31',
    name: 'Razer Barracuda X',
    image:
      'https://assets3.razerzone.com/uYwMFn3aDCeHnO2rWAmm2au853g=/500x500/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fh53%2Fhe5%2F9412836851742%2Fbarracuda-x-2022-2-500x500.png',
    price: 99,
    count: 1,
    desc: 'Wireless Multi-platform Gaming and Mobile Headset',
    category: 'Headsets',
    createdAt: '2022-08-31T07:46:37.381Z',
    updatedAt: '2022-10-05T11:34:31.949Z',
    __v: 0,
  },
  {
    _id: '630f29b20c768104b94ded35',
    name: 'Razer Kraken V3 Pro',
    image:
      'https://assets3.razerzone.com/U96cxEcqLPKUhuxPw3KO7xSNqYk=/500x500/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fh6a%2Fhff%2F9397630140446%2Fkraken-v3-pro-3-500x500.png',
    price: 199,
    count: 1,
    desc: 'Wireless Gaming Headset with Haptic Technology',
    category: 'Headsets',
    createdAt: '2022-08-31T09:28:18.834Z',
    updatedAt: '2022-10-05T11:34:44.795Z',
    __v: 0,
  },
  {
    _id: '630f29e10c768104b94ded38',
    name: 'Razer Kraken',
    image:
      'https://assets3.razerzone.com/KdUz9FtltIjBetXrd7yTIzZkwdo=/500x500/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fhde%2Fh88%2F9081143656478%2Frz04-02830300-r3m1.png',
    price: 79,
    count: 1,
    desc: 'Multi-Platform Wired Gaming Headset',
    category: 'Headsets',
    createdAt: '2022-08-31T09:29:05.545Z',
    updatedAt: '2022-10-05T11:34:55.483Z',
    __v: 0,
  },
  {
    _id: '630f2a0a0c768104b94ded3b',
    name: 'Razer Kraken X',
    image:
      'https://assets3.razerzone.com/dJ7iPsPB7A_fTjy4RQWRtDefZOA=/500x500/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fh4f%2Fhe4%2F9397630926878%2Fkraken-x-mercury-3-500x500.png',
    price: 49,
    count: 1,
    desc: 'Multi-Platform Wired Gaming Headset',
    category: 'Headsets',
    createdAt: '2022-08-31T09:29:46.183Z',
    updatedAt: '2022-10-05T11:35:13.127Z',
    __v: 0,
  },
  {
    _id: '630f2a300c768104b94ded3e',
    name: 'Razer Kraken Ultimate',
    image:
      'https://assets3.razerzone.com/sMm8-XuEO05TjGseoWNr3_9xNmI=/500x500/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fhfb%2Fh01%2F9081100337182%2FKraken-Ultimate-500x500.png',
    price: 64,
    count: 1,
    desc: 'USB Surround Sound Headset with ANC Microphone',
    category: 'Headsets',
    createdAt: '2022-08-31T09:30:24.245Z',
    updatedAt: '2022-10-05T11:35:24.258Z',
    __v: 0,
  },
  {
    _id: '630f2b0d0c768104b94ded42',
    name: 'Razer Enki Pro - Koenigsegg Edition',
    image:
      'https://assets3.razerzone.com/R3uCcugMuuPu18L1LxiapmDCLAU=/500x500/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fh4e%2Fh74%2F9424953245726%2Fenki-pro-koenigsegg-500x500.png',
    price: 1299,
    count: 1,
    desc: 'Premium Gaming Chair with Alcantara® Leather for All-Day Comfort',
    category: 'Chairs',
    createdAt: '2022-08-31T09:34:05.416Z',
    updatedAt: '2022-10-05T11:35:41.989Z',
    __v: 0,
  },
  {
    _id: '630f2ce70c768104b94ded46',
    name: 'Razer Enki Pro - Williams Esports Edition',
    image:
      'https://assets3.razerzone.com/12_4OfwAQ3B5jY_PQs1UmwQQL7k=/500x500/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fhf7%2Fh73%2F9424953278494%2Fenki-pro-williams-esports-500x500.png',
    price: 1299,
    count: 1,
    desc: 'Premium Gaming Chair with Alcantara® Leather for All-Day Comfort',
    category: 'Chairs',
    createdAt: '2022-08-31T09:41:59.292Z',
    updatedAt: '2022-10-05T11:35:59.652Z',
    __v: 0,
  },
  {
    _id: '630f2d060c768104b94ded49',
    name: 'Razer x *A Bathing Ape® Iskur X',
    image:
      'https://assets3.razerzone.com/XJ9Uzl3II-rq8cxdLPoCNGM4SbI=/500x500/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fh87%2Fh01%2F9420856262686%2Fbape-iskur-x-500x500.png',
    price: 699,
    count: 1,
    desc: 'Ergonomic Gaming Chair',
    category: 'Chairs',
    createdAt: '2022-08-31T09:42:30.300Z',
    updatedAt: '2022-10-05T11:36:10.159Z',
    __v: 0,
  },
  {
    _id: '630f2d220c768104b94ded4c',
    name: 'Razer x *A Bathing Ape® Iskur X - Quartz',
    image:
      'https://assets3.razerzone.com/u48G7v4pZP8brfewjOYct-TaVTc=/500x500/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fhf2%2Fh01%2F9420856229918%2Fbape-iskur-x-quartz-500x500.png',
    price: 699,
    count: 1,
    desc: 'Ergonomic Gaming Chair',
    category: 'Chairs',
    createdAt: '2022-08-31T09:42:58.299Z',
    updatedAt: '2022-10-05T11:36:19.634Z',
    __v: 0,
  },
  {
    _id: '630f2d940c768104b94ded4f',
    name: 'Razer Iskur X - Genshin Impact Edition',
    image:
      'https://assets3.razerzone.com/7dgnImhDVIQZfiITYhn9-miNpoA=/500x500/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fhbd%2Fh37%2F9275302641694%2Fiskur-x-genshin-impact-500x500.png',
    price: 499,
    count: 1,
    desc: 'Ergonomic Gaming Chair',
    category: 'Chairs',
    createdAt: '2022-08-31T09:44:52.664Z',
    updatedAt: '2022-10-05T11:36:31.236Z',
    __v: 0,
  },
  {
    _id: '630f2dbd0c768104b94ded52',
    name: 'Razer Iskur X - Hello Kitty and Friends Edition',
    image:
      'https://assets3.razerzone.com/rrDZ6vN5I6bABI8R6d1yhaRvt6k=/500x500/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fh97%2Fh5e%2F9313025196062%2Fiskur-x-hello-kitty-500x500.png',
    price: 499,
    count: 1,
    desc: 'Ergonomic Gaming Chair',
    category: 'Chairs',
    createdAt: '2022-08-31T09:45:33.433Z',
    updatedAt: '2022-10-05T11:36:37.997Z',
    __v: 0,
  },
  {
    _id: '630f31fa0c768104b94ded60',
    name: 'Razer Enki Pro',
    image:
      'https://assets3.razerzone.com/quvWc1_YeefR-uO44Y4FtkgQONE=/500x500/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fh15%2Fh72%2F9407543672862%2Fenki-pro-500x500.png',
    price: 999,
    count: 1,
    desc: 'Premium Gaming Chair with Alcantara® Leather for All-Day Comfort',
    category: 'Chairs',
    createdAt: '2022-08-31T10:03:38.781Z',
    updatedAt: '2022-10-05T11:36:46.889Z',
    __v: 0,
  },
  {
    _id: '630f32180c768104b94ded63',
    name: 'Razer Iskur - Black - XL',
    image:
      'https://assets3.razerzone.com/y453D_RMc62OvR6krHZwpN0WBqo=/500x500/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fh49%2Fh92%2F9151223103518%2Fiskur-black-500x500.png',
    price: 636,
    count: 1,
    desc: 'Gaming Chair with Built-in Lumbar Support',
    category: 'Chairs',
    createdAt: '2022-08-31T10:04:08.212Z',
    updatedAt: '2022-10-05T11:36:59.188Z',
    __v: 0,
  },
  {
    _id: '630f323f0c768104b94ded66',
    name: 'Razer Iskur - Black / Green - XL',
    image:
      'https://assets3.razerzone.com/rsh7Wz1NBc2rXy1eKcob92JFSBw=/500x500/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fh8a%2Fhb0%2F9090587590686%2F500x500-iskur.png',
    price: 536,
    count: 1,
    desc: 'Gaming Chair with Built-in Lumbar Support',
    category: 'Chairs',
    createdAt: '2022-08-31T10:04:47.010Z',
    updatedAt: '2022-10-05T11:37:12.275Z',
    __v: 0,
  },
  {
    _id: '630f32840c768104b94ded6c',
    name: 'Razer Unleashed Snapback Capssetetwrtfgdff',
    image:
      'https://assets3.razerzone.com/S31mMc9u5dw0E-RaJ0pX9oTjJmc=/500x500/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fhe6%2Fhe4%2F9235792920606%2Fiskur-fabric-dark-gray-500x500.png',
    price: 536,
    count: 1,
    desc: 'Gaming Chair with Built-in Lumbar Support',
    category: 'Chairs',
    createdAt: '2022-08-31T10:05:56.873Z',
    updatedAt: '2022-10-05T11:37:23.901Z',
    __v: 0,
  },
  {
    _id: '630f32aa0c768104b94ded6f',
    name: 'Razer Iskur - Black',
    image:
      'https://assets3.razerzone.com/y453D_RMc62OvR6krHZwpN0WBqo=/500x500/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fh49%2Fh92%2F9151223103518%2Fiskur-black-500x500.png',
    price: 447,
    count: 1,
    desc: 'Gaming Chair with Built-in Lumbar Support',
    category: 'Chairs',
    createdAt: '2022-08-31T10:06:34.179Z',
    updatedAt: '2022-10-05T12:00:17.385Z',
    __v: 0,
  },
  {
    _id: '630f32fc0c768104b94ded75',
    name: 'Razer Iskur X',
    image:
      'https://assets3.razerzone.com/vV3lbT0sZdNZ1M-fELCe1JGfcgY=/500x500/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fh58%2Fh5f%2F9183237373982%2Fiskur-x-500x500.png',
    price: 357,
    count: 1,
    desc: 'Ergonomic Gaming Chair',
    category: 'Chairs',
    createdAt: '2022-08-31T10:07:56.634Z',
    updatedAt: '2022-10-05T12:00:32.827Z',
    __v: 0,
  },
  {
    _id: '630f334e0c768104b94ded79',
    name: 'Razer Sneki Snek Plushie',
    image:
      'https://assets3.razerzone.com/5EyfK2388PbHt-MCjVuiCrfL2Lo=/500x500/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fh58%2Fh9b%2F9090910715934%2Fsneki-snek-plushie-500x500.png',
    price: 29,
    count: 1,
    desc: 'Optimized for cuddles and Razer fans of all ages',
    category: 'Gear',
    createdAt: '2022-08-31T10:09:18.637Z',
    updatedAt: '2022-10-05T12:00:46.056Z',
    __v: 0,
  },
  {
    _id: '630f35430c768104b94ded7d',
    name: 'Razer Sneki Snek Fleece Blanket',
    image:
      'https://assets3.razerzone.com/Nm-LqNcmL59Lx5xF-00_ypzfD5Y=/500x500/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fhcd%2Fh21%2F9269661270046%2Fsneki-snek-fleece-blanket-500x500.png',
    price: 39,
    count: 1,
    desc: 'Plush Sleep Accessory',
    category: 'Gear',
    createdAt: '2022-08-31T10:17:39.373Z',
    updatedAt: '2022-10-05T12:00:58.997Z',
    __v: 0,
  },
  {
    _id: '630f355d0c768104b94ded80',
    name: 'Razer Sneki Snek Head Pillow',
    image:
      'https://assets3.razerzone.com/kjXsgTvAL4DKKmz67A7Zx7qhjWs=/500x500/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fha2%2Fh8f%2F9151223070750%2Fsneki-head-pillow-500x500.png',
    price: 29,
    count: 1,
    desc: 'Neck & Head support for Gaming Chairs',
    category: 'Gear',
    createdAt: '2022-08-31T10:18:05.583Z',
    updatedAt: '2022-10-05T12:05:38.724Z',
    __v: 0,
  },
  {
    _id: '630f36cd0c768104b94ded84',
    name: 'Razer Sneki Snek Hoodie - L',
    image:
      'https://assets3.razerzone.com/_D13B3K1YhGeWtIZHnRwAbkJP-A=/500x500/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fhd0%2Fhbf%2F9378779463710%2Fsneki-snek-hoodie-500x500.png',
    price: 49,
    count: 1,
    desc: 'Plush Hooded Outerwear',
    category: 'Gear',
    createdAt: '2022-08-31T10:24:13.881Z',
    updatedAt: '2022-10-05T12:05:54.345Z',
    __v: 0,
  },
  {
    _id: '630f3d780c768104b94ded8c',
    name: 'Razer Sneki Snek Keycap',
    image:
      'https://assets3.razerzone.com/RlkW3wOS-U5to7C03n2ZTK_up_w=/500x500/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fhef%2Fhed%2F9311160467486%2F500x500-sneki-snek-keycap.png',
    price: 19,
    count: 1,
    desc: 'Keyboard Accessory',
    category: 'Gear',
    createdAt: '2022-08-31T10:52:40.297Z',
    updatedAt: '2022-10-05T12:07:42.790Z',
    __v: 0,
  },
  {
    _id: '630f3f460c768104b94ded91',
    name: 'Razer Sneki Snek Fridge Magnet - SSSAVE TREES',
    image:
      'https://assets3.razerzone.com/tiNHTUTfd5t9PLXwE36uPV9STEI=/500x500/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fh8b%2Fh28%2F9247288000542%2Fsneki-snek-fridge-magnet-sssave-trees-500x500.png',
    price: 12,
    count: 1,
    desc: 'Decorative Accessory',
    category: 'Gear',
    createdAt: '2022-08-31T11:00:22.770Z',
    updatedAt: '2022-10-05T12:07:56.082Z',
    __v: 0,
  },
  {
    _id: '630f3f790c768104b94ded94',
    name: 'Razer Sneki Snek Eye Mask',
    image:
      'https://assets3.razerzone.com/6c9YkLiO282a-jWWRP3rSLTRqZg=/500x500/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fh36%2Fh04%2F9186559098910%2Frazer-sneki-eye-mask-500x500.png',
    price: 29,
    count: 1,
    desc: 'Sleep Accessory',
    category: 'Gear',
    createdAt: '2022-08-31T11:01:13.575Z',
    updatedAt: '2022-10-05T12:08:11.683Z',
    __v: 0,
  },
  {
    _id: '630f414a0c768104b94ded99',
    name: 'Razer Rogue 17 Backpack V3 - Black',
    image:
      'https://assets3.razerzone.com/OGWP02xQY21DY3Gw5GYkviNtkLU=/500x500/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fh0b%2Fh68%2F9079790632990%2Frazer-rogue-17-v3-black_500x500.png',
    price: 104,
    count: 1,
    desc: 'Travel backpack with 17” laptop compartment',
    category: 'Gear',
    createdAt: '2022-08-31T11:08:58.530Z',
    updatedAt: '2022-10-05T12:08:28.425Z',
    __v: 0,
  },
  {
    _id: '630f42bb0c768104b94ded9d',
    name: 'Razer Recon 15 Rolltop Backpack',
    image:
      'https://assets3.razerzone.com/MoA0REwHGRvzkGdxld0wjK5ureE=/500x500/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fh22%2Fh6d%2F9122158805022%2Frazer-recon-rolltop-backpack-500x500.png',
    price: 90,
    count: 1,
    desc: 'Versatile all-weather top loader with greater capacity',
    category: 'Gear',
    createdAt: '2022-08-31T11:15:07.347Z',
    updatedAt: '2022-10-05T12:08:50.087Z',
    __v: 0,
  },
  {
    _id: '630f42de0c768104b94deda0',
    name: 'Razer Rogue 15 Backpack V3 - Black',
    image:
      'https://assets3.razerzone.com/JyEq6KRbDnv_KGXMx4hyayC043c=/500x500/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fhb5%2Fh67%2F9079790600222%2Frazer-rogue-15-v3-black_500x500.png',
    price: 69,
    count: 1,
    desc: 'Travel backpack with 15” laptop compartment',
    category: 'Gear',
    createdAt: '2022-08-31T11:15:42.597Z',
    updatedAt: '2022-10-05T12:09:05.258Z',
    __v: 0,
  },
  {
    _id: '630f433e0c768104b94deda4',
    name: 'Razer Scout 15 Backpack',
    image:
      'https://assets3.razerzone.com/2d_Yp1m6mIGBOFWqFhxvsO7WJV4=/500x500/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fha6%2Fh2d%2F9172925710366%2Frazer-scout-backpack-500x500.png',
    price: 69,
    count: 1,
    desc: 'Lightweight all-weather toploader backpack',
    category: 'Gear',
    createdAt: '2022-08-31T11:17:18.432Z',
    updatedAt: '2022-10-05T12:09:18.332Z',
    __v: 0,
  },
  {
    _id: '630f43680c768104b94deda7',
    name: 'Razer Rogue 13 Backpack V3 - Black',
    image:
      'https://assets3.razerzone.com/l-Tg8DVWeyDdcRn9RfprDgqRh90=/500x500/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fh74%2Fh6b%2F9079790731294%2Frazer-rogue-13-v3-black_500x500.png',
    price: 41,
    count: 1,
    desc: 'Compact travel backpack with 13” laptop compartment',
    category: 'Gear',
    createdAt: '2022-08-31T11:18:00.855Z',
    updatedAt: '2022-10-05T12:09:32.884Z',
    __v: 0,
  },
  {
    _id: '630f44000c768104b94dedab',
    name: 'Razer Concourse Pro Backpack 17.3',
    image:
      'https://assets3.razerzone.com/laMOK84U0rc2hILdvBDYVSOSyDo=/500x500/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fha8%2Fh1d%2F9081105678366%2FRC81-02920101-0500-500x500.png',
    price: 149,
    count: 1,
    desc: 'Gaming backpack with 17.3” laptop compartment',
    category: 'Gear',
    createdAt: '2022-08-31T11:20:32.577Z',
    updatedAt: '2022-10-05T12:09:46.275Z',
    __v: 0,
  },
  {
    _id: '630f44930c768104b94dedaf',
    name: 'Razer Tactical Pro 17.3 Backpack V2',
    image:
      'https://assets3.razerzone.com/QjFdSQ3TufYZPgO5KwR94IcIyfM=/500x500/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fhe0%2Fha3%2F9081145622558%2FTactical-Pro-17-Backpack-V2-500x500.png',
    price: 159,
    count: 1,
    desc: 'Roll top travel backpack with 17.3” laptop compartment',
    category: 'Gear',
    createdAt: '2022-08-31T11:22:59.084Z',
    updatedAt: '2022-10-05T12:10:45.379Z',
    __v: 0,
  },
  {
    _id: '630f507c0c768104b94dedb3',
    name: 'Razer Unleashed Zip Hoodie - L',
    image:
      'https://assets3.razerzone.com/4VgLxqbtOQ95yujTEcIFZc7piOE=/500x500/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fh5f%2Fhe2%2F9407119032350%2Funleashed-hoodie-500x500.png',
    price: 99,
    count: 1,
    desc: "Everyday apparel that's bold in style and big on comfort",
    category: 'Gear',
    createdAt: '2022-08-31T12:13:48.774Z',
    updatedAt: '2022-10-05T12:10:57.351Z',
    __v: 0,
  },
  {
    _id: '630f50930c768104b94dedb6',
    name: 'Razer Genesis Bomber Jacket - L',
    image:
      'https://assets3.razerzone.com/HRpYxDtKXtkOE9N2hCFwFq2-yhg=/500x500/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fhe3%2Fh93%2F9407118835742%2Fgenesis-hoodie-500x500.png',
    price: 99,
    count: 1,
    desc: 'Everyday apparel that blends minimalist style with standout comfort.',
    category: 'Gear',
    createdAt: '2022-08-31T12:14:11.074Z',
    updatedAt: '2022-10-05T12:11:07.063Z',
    __v: 0,
  },
  {
    _id: '630f527f0c768104b94dedba',
    name: 'Razer Genesis Tee - L',
    image:
      'https://assets3.razerzone.com/FGutjTYmKlZPZsOht_LjhgL5OnM=/500x500/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fhf9%2Fh97%2F9407118999582%2Fgenesis-tee-500x500.png',
    price: 49,
    count: 1,
    desc: 'Everyday apparel that blends minimalist style with standout comfort.',
    category: 'Gear',
    createdAt: '2022-08-31T12:22:23.942Z',
    updatedAt: '2022-10-05T12:11:19.323Z',
    __v: 0,
  },
  {
    _id: '630f529d0c768104b94dedbd',
    name: 'Razer Genesis Shorts - L',
    image:
      'https://assets3.razerzone.com/DVN62wCYt_veEQxeR6xZ9QBskeE=/500x500/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fh15%2Fh8a%2F9407118573598%2Fgenesis-shorts-500x500.png',
    price: 69,
    count: 1,
    desc: 'Everyday apparel that blends minimalist style with standout comfort.',
    category: 'Gear',
    createdAt: '2022-08-31T12:22:53.503Z',
    updatedAt: '2022-10-05T12:11:31.143Z',
    __v: 0,
  },
  {
    _id: '630f52bf0c768104b94dedc0',
    name: 'Razer Unleashed Oversized Tee - L',
    image:
      'https://assets3.razerzone.com/uCWfsx_b8mDmI_PkaXWXCBHxE14=/500x500/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fh8c%2Fh93%2F9407118802974%2Funleashed-oversized-tee-500x500.png',
    price: 59,
    count: 1,
    desc: "Everyday apparel that's bold in style and big on comfort.",
    category: 'Gear',
    createdAt: '2022-08-31T12:23:27.830Z',
    updatedAt: '2022-10-05T12:11:43.445Z',
    __v: 0,
  },
  {
    _id: '630f52e70c768104b94dedc3',
    name: 'Razer Unleashed Jogger Pants - L',
    image:
      'https://assets3.razerzone.com/7JdDHOTk_p1cGJKrhNjL7EAj44Y=/500x500/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fhb6%2Fhe2%2F9407119065118%2Funleashed-jogger-pants-500x500.png',
    price: 79,
    count: 1,
    desc: "Everyday apparel that's bold in style and big on comfort.",
    category: 'Gear',
    createdAt: '2022-08-31T12:24:07.317Z',
    updatedAt: '2022-10-05T12:11:55.317Z',
    __v: 0,
  },
  {
    _id: '630f53010c768104b94dedc6',
    name: 'Razer Genesis Bucket Hat',
    image:
      'https://assets3.razerzone.com/YdS0cxzU05Iwghg0o_ojMwa5bxo=/500x500/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fha2%2Fh97%2F9407118966814%2Fgenesis-bucket-hat-500x500.png',
    price: 39,
    count: 1,
    desc: 'Everyday apparel that blends minimalist style with standout comfort.',
    category: 'Gear',
    createdAt: '2022-08-31T12:24:33.139Z',
    updatedAt: '2022-10-05T12:12:05.599Z',
    __v: 0,
  },
  {
    _id: '634d2c3ea829d9ca1b9e2021',
    name: 'RAZER KAIRA FOR XBOX',
    image:
      'https://assets2.razerzone.com/images/pnx.assets/659b9c018fff41847dfe1cb0e1706b7f/500x500-kaira-white.png',
    price: 99,
    count: 1,
    desc: 'Wireless Xbox Series X|S headset with cutting-edge drivers and mic',
    category: 'Headsets',
    createdAt: '2022-10-17T10:19:42.954Z',
    updatedAt: '2022-10-17T10:19:42.954Z',
    __v: 0,
  },
  {
    _id: '634d2d05a829d9ca1b9e2029',
    name: 'RAZER KAIRA PRO FOR XBOX',
    image:
      'https://assets2.razerzone.com/images/pnx.assets/659b9c018fff41847dfe1cb0e1706b7f/kaira-pro-white-500x500.png',
    price: 149,
    count: 1,
    desc: 'Wireless, Bluetooth-capable Xbox Series X|S headset that supports mobile Xbox gaming',
    category: 'Headsets',
    createdAt: '2022-10-17T10:23:01.735Z',
    updatedAt: '2022-10-17T10:23:01.735Z',
    __v: 0,
  },
  {
    _id: '634d2f4ba829d9ca1b9e2058',
    name: 'Razer Barracuda',
    image:
      'https://assets3.razerzone.com/7MJCA7sU9fQ0-jkESN2pr2Xg51k=/500x500/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fhb8%2Fh07%2F9447199047710%2Fbarracuda-quartz-500x500.png',
    price: 159,
    count: 1,
    desc: 'Wireless Multi-platform Gaming and Mobile Headset',
    category: 'Headsets',
    createdAt: '2022-10-17T10:32:43.240Z',
    updatedAt: '2022-10-17T10:32:43.240Z',
    __v: 0,
  },
  {
    _id: '634d2f7ca829d9ca1b9e205c',
    name: 'Razer Huntsman V2 Tenkeyless Pink',
    image:
      'https://assets3.razerzone.com/kZAUFpuXfW98-Pmd1dphEmS6DN4=/500x500/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fhe0%2Fh0e%2F9447199277086%2Fhuntsman-v2-tkl-quartz-500x500.png',
    price: 159,
    count: 1,
    desc: 'Tenkeyless Optical Gaming Keyboard',
    category: 'Keyboards',
    createdAt: '2022-10-17T10:33:32.823Z',
    updatedAt: '2022-10-17T10:33:32.823Z',
    __v: 0,
  },
  {
    _id: '635274b075c252df32699e57',
    name: 'Razer Kaira HyperSpeed - PlayStation Licensed',
    image:
      'https://assets3.razerzone.com/jA9Omndn724bgd2f4MhGamIhdW0=/500x500/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fha7%2Fhaa%2F9445641224222%2Fkaira-hyperspeed-ps-2022-500x500.png',
    price: 129,
    count: 1,
    desc: 'Wireless Multi-Platform Gaming Headset',
    category: 'Headsets',
    createdAt: '2022-10-21T10:30:08.947Z',
    updatedAt: '2022-10-21T10:30:08.947Z',
    __v: 0,
  },
  {
    _id: '635276d175c252df32699e6c',
    name: 'Razer Wireless Controller & Quick Charging Stand for Xbox Razer Limited Edition',
    image:
      'https://assets3.razerzone.com/aLwGyvXk95FEBJKRpoqAIOkJsUc=/500x500/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fhbf%2Fh51%2F9445020237854%2Funiversal-quick-charging-stand-xbox-500x500.png',
    price: 199,
    count: 1,
    desc: 'Officially Licensed Xbox Controller and Quick Charging Stand',
    category: 'Console',
    createdAt: '2022-10-21T10:39:13.248Z',
    updatedAt: '2022-10-21T10:39:13.248Z',
    __v: 0,
  },
  {
    _id: '6352774775c252df32699e75',
    name: 'Captain America Razer Wireless Controller & Quick Charging Stand for Xbox',
    image:
      'https://assets3.razerzone.com/PNQYZ8IqZm-nYDM4nzUFh2aUU4o=/500x500/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fh88%2Fh65%2F9414109724702%2Fcaptain-america-controller-charging-stand-2-500x500.png',
    price: 179,
    count: 1,
    desc: 'Officially Licensed Xbox Controller and Quick Charging Stand',
    category: 'Console',
    createdAt: '2022-10-21T10:41:11.655Z',
    updatedAt: '2022-10-21T10:41:11.655Z',
    __v: 0,
  },
  {
    _id: '635285c00aa16c352d70a576',
    name: 'Boba Fett™ Edition Razer Wireless Controller & Quick Charging Stand For Xbox',
    image:
      'https://assets3.razerzone.com/bqVtzLXwJ2ZL9cnqGJtolPY7j1M=/500x500/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fh7e%2Fh6f%2F9414104940574%2Fboba-fett-controller-2-500x500.png',
    price: 179,
    count: 1,
    desc: 'Officially Licensed Xbox Controller and Quick Charging Stand',
    category: 'Console',
    createdAt: '2022-10-21T11:42:56.077Z',
    updatedAt: '2022-10-21T11:42:56.077Z',
    __v: 0,
  },
  {
    _id: '635285e40aa16c352d70a57a',
    name: 'The Mandalorian™ Beskar™ Edition Razer Wireless Controller & Quick Charging Stand For Xbox',
    image:
      'https://assets3.razerzone.com/NwICKkB0WDSdHMPU7ASbp_uHH_U=/500x500/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fh0d%2Fh5a%2F9264212574238%2Fmandalorian-controller-and-charging-stand-500x500.png',
    price: 179,
    count: 1,
    desc: 'Officially Licensed Xbox Controller and Quick Charging Stand',
    category: 'Console',
    createdAt: '2022-10-21T11:43:32.503Z',
    updatedAt: '2022-10-21T11:43:32.503Z',
    __v: 0,
  },
  {
    _id: '635285ff0aa16c352d70a57d',
    name: 'Razer Universal Quick Charging Stand for Xbox - Forza Horizon 5 Limited Edition',
    image:
      'https://assets3.razerzone.com/mpmEL7b8Y808ZlUErYpsyF_Mnfw=/500x500/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fh8e%2Fh7b%2F9252684300318%2FForza-Horizon-5-500x500.png',
    price: 49,
    count: 1,
    desc: 'Quick Charging Stand for Xbox Wireless Controllers',
    category: 'Console',
    createdAt: '2022-10-21T11:43:59.428Z',
    updatedAt: '2022-10-21T11:43:59.428Z',
    __v: 0,
  },
  {
    _id: '635287ea0aa16c352d70a589',
    name: 'Razer Universal Quick Charging Stand for Xbox - Xbox 20th Anniversary Limited Edition',
    image:
      'https://assets3.razerzone.com/EN2Xok7rBc2aZ_ao_iMdEkPzewU=/500x500/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fhd4%2Fh78%2F9252684267550%2Fxbox-20th-anni-500x500.png',
    price: 49,
    count: 1,
    desc: 'Quick Charging Stand for Xbox Wireless Controllers',
    category: 'Console',
    createdAt: '2022-10-21T11:52:10.159Z',
    updatedAt: '2022-10-21T11:52:10.159Z',
    __v: 0,
  },
  {
    _id: '635288160aa16c352d70a58d',
    name: 'Stormtrooper Razer Wireless Controller & Quick Charging Stand for Xbox',
    image:
      'https://assets3.razerzone.com/8xQKpxal6lQECBO74GsQTnHLQmo=/500x500/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fh04%2Fh82%2F9396995063838%2Fcontroller-stormtrooper-charging-stand-500x500.png',
    price: 199,
    count: 1,
    desc: 'Officially Licensed Xbox Controller and Quick Charging Stand',
    category: 'Console',
    createdAt: '2022-10-21T11:52:54.091Z',
    updatedAt: '2022-10-21T11:52:54.091Z',
    __v: 0,
  },
  {
    _id: '635288620aa16c352d70a591',
    name: 'Sonic the Hedgehog Razer Wireless Controller & Quick Charging Stand for Xbox',
    image:
      'https://assets3.razerzone.com/sZsXmHkrN8lp4e3gIYXCA6GXFYE=/500x500/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fh1e%2Fh1b%2F9387020386334%2Fsonic-the-hedgehog-controller-500x500.png',
    price: 199,
    count: 1,
    desc: 'Officially Licensed Xbox Controller and Quick Charging Stand',
    category: 'Console',
    createdAt: '2022-10-21T11:54:10.264Z',
    updatedAt: '2022-10-21T11:54:10.264Z',
    __v: 0,
  },
  {
    _id: '6356617eb24eed2ebede0f07',
    name: 'Razer Kiyo Pro',
    image:
      'https://assets3.razerzone.com/jqcmoIxBpvgsUa3Qc73wnRzL2cc=/500x500/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fhf0%2Fh19%2F9147860779038%2Fkiyo-pro-500x500.png',
    price: 99,
    count: 1,
    desc: 'USB Camera with High-Performance Adaptive Light Sensor',
    category: 'Streaming',
    createdAt: '2022-10-24T09:57:18.764Z',
    updatedAt: '2022-10-24T09:57:18.764Z',
    __v: 0,
  },
  {
    _id: '6356633db24eed2ebede0f13',
    name: 'Razer Kiyo',
    image:
      'https://assets3.razerzone.com/EweKh4R7HKhnGWfIwThsBI4Fc6A=/500x500/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fh6b%2Fhb5%2F9079776870430%2FKiyo-500x500.png',
    price: 69,
    count: 1,
    desc: 'Show the World Who You Are',
    category: 'Streaming',
    createdAt: '2022-10-24T10:04:45.374Z',
    updatedAt: '2022-10-24T10:04:45.374Z',
    __v: 0,
  },
  {
    _id: '635663aeb24eed2ebede0f17',
    name: 'Razer Kiyo X',
    image:
      'https://assets3.razerzone.com/BU6TJJmrn6viYt-sO7WQP9xiSIs=/500x500/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fhb4%2Fhb5%2F9243056603166%2Fkiyo-x-5005x500.png',
    price: 49,
    count: 1,
    desc: 'USB Webcam for Full HD Streaming',
    category: 'Streaming',
    createdAt: '2022-10-24T10:06:38.206Z',
    updatedAt: '2022-10-24T10:06:38.206Z',
    __v: 0,
  },
  {
    _id: '6356648fb24eed2ebede0f1b',
    name: 'Razer Seiren V2 Pro',
    image:
      'https://assets3.razerzone.com/ppbkpoPa1gH7KYo-_eAgCaQW1fc=/500x500/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fhd6%2Fh1a%2F9248849231902%2FSeiren-V2-Pro-500x500.png',
    price: 149,
    count: 1,
    desc: 'Professional-grade USB Microphone for Streamers',
    category: 'Streaming',
    createdAt: '2022-10-24T10:10:23.018Z',
    updatedAt: '2022-10-24T10:10:23.018Z',
    __v: 0,
  },
  {
    _id: '635664b0b24eed2ebede0f1e',
    name: 'Razer Seiren V2 X',
    image:
      'https://assets3.razerzone.com/VbPo3AKa1En5DnIg-8TU0KHlpS0=/500x500/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fhe7%2Fh1d%2F9248849166366%2FSeiren-V2-X-500x500.png',
    price: 99,
    count: 1,
    desc: 'USB Microphone for Streamers',
    category: 'Streaming',
    createdAt: '2022-10-24T10:10:56.033Z',
    updatedAt: '2022-10-24T10:10:56.033Z',
    __v: 0,
  },
  {
    _id: '635664d4b24eed2ebede0f21',
    name: 'Razer Seiren BT',
    image:
      'https://assets3.razerzone.com/cyTf-b3wZn8n3m84oW-zQDdGy1c=/500x500/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fh53%2Fh59%2F9394153160734%2Fseiren-bt-3-500x500.png',
    price: 99,
    count: 1,
    desc: 'Bluetooth Microphone for Mobile Streaming',
    category: 'Streaming',
    createdAt: '2022-10-24T10:11:32.475Z',
    updatedAt: '2022-10-24T10:11:32.475Z',
    __v: 0,
  },
  {
    _id: '635664f8b24eed2ebede0f24',
    name: 'Razer Seiren Mini',
    image:
      'https://assets3.razerzone.com/pIaxstViEYeGRCSj84gjDRu6r5U=/500x500/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fh8f%2Fh8d%2F9090915631134%2Fseiren-mini-black-500x500.png',
    price: 49,
    count: 1,
    desc: 'Ultra-compact Streaming Microphone',
    category: 'Streaming',
    createdAt: '2022-10-24T10:12:08.314Z',
    updatedAt: '2022-10-24T10:12:08.314Z',
    __v: 0,
  },
  {
    _id: '6356658ab24eed2ebede0f29',
    name: 'Razer Ifrit',
    image:
      'https://assets3.razerzone.com/qUDunF8KFBg1r-j_5ngTt0Uv06g=/500x500/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fh47%2Fhf6%2F9081144770590%2FRZ82-02300100-B3U1_500x500.png',
    price: 99,
    count: 1,
    desc: 'Stream Wherever You Go',
    category: 'Streaming',
    createdAt: '2022-10-24T10:14:34.589Z',
    updatedAt: '2022-10-24T10:14:34.589Z',
    __v: 0,
  },
  {
    _id: '635665c2b24eed2ebede0f2c',
    name: 'Razer Blue Screen',
    image:
      'https://assets3.razerzone.com/pdFWIsnhyEEJJJZCH2Ey26UPZdo=/500x500/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fh21%2Fh0b%2F9447199146014%2Fblue-screen-500x500.png',
    price: 149,
    count: 1,
    desc: 'Collapsible Chroma Key Backdrop for Streaming',
    category: 'Streaming',
    createdAt: '2022-10-24T10:15:30.831Z',
    updatedAt: '2022-10-24T10:15:30.831Z',
    __v: 0,
  },
  {
    _id: '635665fbb24eed2ebede0f2f',
    name: 'Razer Stream Controller',
    image:
      'https://assets3.razerzone.com/b-HSwOeYGsTPtypQ2Gs4iqWdDwc=/500x500/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fhb7%2Fh96%2F9419375149086%2Fstream-controller-500x500.png',
    price: 269,
    count: 1,
    desc: 'All-in-one Control Deck for Streaming',
    category: 'Streaming',
    createdAt: '2022-10-24T10:16:27.258Z',
    updatedAt: '2022-10-24T10:16:27.258Z',
    __v: 0,
  },
  {
    _id: '63566676b24eed2ebede0f33',
    name: 'Razer Audio Mixer',
    image:
      'https://assets3.razerzone.com/SBSJ9zQ8dddQ0-8mMXM6V-VrlqA=/500x500/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fh2b%2Fha8%2F9375767101470%2Faudio-mixer-500x500.png',
    price: 249,
    count: 1,
    desc: 'All-in-one Digital Mixer for Broadcasting and Streaming',
    category: 'Streaming',
    createdAt: '2022-10-24T10:18:30.046Z',
    updatedAt: '2022-10-24T10:18:30.046Z',
    __v: 0,
  },
  {
    _id: '63566699b24eed2ebede0f36',
    name: 'Razer Ripsaw HD',
    image:
      'https://assets3.razerzone.com/iCQRmPsX29mvhQVjV7bltlyUauI=/500x500/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fh60%2Fh14%2F9081142312990%2Fripsaw-hd-base.png',
    price: 159,
    count: 1,
    desc: 'Next Level Streaming',
    category: 'Streaming',
    createdAt: '2022-10-24T10:19:05.032Z',
    updatedAt: '2022-10-24T10:19:05.032Z',
    __v: 0,
  },
  {
    _id: '635666c3b24eed2ebede0f3a',
    name: 'Razer Ripsaw X',
    image:
      'https://assets3.razerzone.com/Q1Vb-zFuSSHzItjh9UylxseO1oM=/500x500/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fh62%2Fhb6%2F9243056668702%2Fripsaw-x-500x500.png',
    price: 139,
    count: 1,
    desc: 'USB Capture Card with Camera Connection for Full 4K Streaming',
    category: 'Streaming',
    createdAt: '2022-10-24T10:19:47.388Z',
    updatedAt: '2022-10-24T10:19:47.388Z',
    __v: 0,
  },
  {
    _id: '635666f2b24eed2ebede0f3e',
    name: 'Razer Key Light Chroma',
    image:
      'https://assets3.razerzone.com/aDWrNbQpgcGS2W6KiF7Yvn3i_iw=/500x500/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fh7d%2Fha7%2F9375767167006%2Fkey-light-chroma-500x500.png',
    price: 299,
    count: 1,
    desc: 'Razer Chroma™ RGB Key Light for Streaming',
    category: 'Streaming',
    createdAt: '2022-10-24T10:20:34.665Z',
    updatedAt: '2022-10-24T10:20:34.665Z',
    __v: 0,
  },
  {
    _id: '6356670fb24eed2ebede0f42',
    name: 'Razer Ring Light',
    image:
      'https://assets3.razerzone.com/unhyjOlKs5rGFeNXFXZUhu09bS8=/500x500/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fhe1%2Fh8e%2F9151223005214%2Fring-light-500x500.png',
    price: 79,
    count: 1,
    desc: '12” USB LED Ring Light for PC and Mobile Streaming',
    category: 'Streaming',
    createdAt: '2022-10-24T10:21:03.089Z',
    updatedAt: '2022-10-24T10:21:03.089Z',
    __v: 0,
  },
  {
    _id: '6356672ab24eed2ebede0f45',
    name: 'Razer Emote Display',
    image:
      'https://assets3.razerzone.com/b9_J4fEdu8Go9JOPLqisOL8Ts2g=/500x500/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fh50%2Fh99%2F9081145950238%2FRZ19-03120100-R3M1_500x500.png',
    price: 49,
    count: 1,
    desc: 'Engage, Emote, Entertain',
    category: 'Streaming',
    createdAt: '2022-10-24T10:21:30.921Z',
    updatedAt: '2022-10-24T10:21:30.921Z',
    __v: 0,
  },
  {
    _id: '6357a49648c4d685f62d4ff4',
    name: 'Razer Arctech Pro for iPhone 13 Pro',
    image:
      'https://assets3.razerzone.com/JmxAEDQajKzreG5gfRJ7IWSEnhA=/500x500/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fha2%2Fhe1%2F9237632811038%2Farctech-pro-13-pro-2021-500x500.png',
    price: 44,
    count: 1,
    desc: 'Protective Smartphone Case with Thermaphene™ Cooling Technology',
    category: 'Mobile',
    createdAt: '2022-10-25T08:55:50.016Z',
    updatedAt: '2022-10-25T08:55:50.016Z',
    __v: 0,
  },
  {
    _id: '6357a70948c4d685f62d4ff9',
    name: 'Razer Arctech Pro for iPhone 13',
    image:
      'https://assets3.razerzone.com/WEgM4h4hf2moSRjKpz6Ujaf9M4k=/500x500/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fh91%2Fhde%2F9237632745502%2Farctech-pro-13-2021-500x500.png',
    price: 44,
    count: 1,
    desc: 'Protective Smartphone Case with Thermaphene™ Cooling Technology',
    category: 'Mobile',
    createdAt: '2022-10-25T09:06:17.791Z',
    updatedAt: '2022-10-25T09:06:17.791Z',
    __v: 0,
  },
  {
    _id: '6357a72c48c4d685f62d4ffc',
    name: 'Razer Arctech Pro for iPhone 13 Pro Max',
    image:
      'https://assets3.razerzone.com/EMVH7SvqxR7OM5nDh5b8kbvDU7c=/500x500/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fhf9%2Fhe1%2F9237632843806%2Farctech-pro-13-pro-max-2021-500x500.png',
    price: 44,
    count: 1,
    desc: 'Protective Smartphone Case with Thermaphene™ Cooling Technology',
    category: 'Mobile',
    createdAt: '2022-10-25T09:06:52.131Z',
    updatedAt: '2022-10-25T09:06:52.131Z',
    __v: 0,
  },
  {
    _id: '6357a78048c4d685f62d4fff',
    name: 'Razer Charging Pad Chroma',
    image:
      'https://assets3.razerzone.com/S0Uh9faT6xlv6wPvWrxtDF_GlBU=/500x500/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fh89%2Fh96%2F9094272516126%2F500x500-chargingpadchroma.png',
    price: 59,
    count: 1,
    desc: '10W Fast Wireless Charger with Razer Chroma RGB',
    category: 'Mobile',
    createdAt: '2022-10-25T09:08:16.554Z',
    updatedAt: '2022-10-25T09:08:16.554Z',
    __v: 0,
  },
  {
    _id: '6357a79a48c4d685f62d5002',
    name: 'Razer Phone Cooler Chroma - Universal Clamp',
    image:
      'https://assets3.razerzone.com/9Rc-Fwg5EaIikqa1N8uHNSvCXHI=/500x500/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fh97%2Fhe5%2F9276685615134%2Fphone-cooler-chroma-android-500x500.png',
    price: 59,
    count: 1,
    desc: 'Smartphone Cooling Fan with Razer Chroma™ RGB',
    category: 'Mobile',
    createdAt: '2022-10-25T09:08:42.907Z',
    updatedAt: '2022-10-25T09:08:42.907Z',
    __v: 0,
  },
  {
    _id: '6357a7bb48c4d685f62d5005',
    name: 'Razer Raiju Mobile',
    image:
      'https://assets3.razerzone.com/vZOLdPxcsWuIJvFgqugfSnBHSvM=/500x500/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fh59%2Fh80%2F9081101942814%2FRaiju-Mobile-500x500.png',
    price: 149,
    count: 1,
    desc: 'Mobile gaming controller for Android',
    category: 'Mobile',
    createdAt: '2022-10-25T09:09:15.371Z',
    updatedAt: '2022-10-25T09:09:15.371Z',
    __v: 0,
  },
  {
    _id: '6357a7d448c4d685f62d5008',
    name: 'Razer Kishi for iPhone',
    image:
      'https://assets3.razerzone.com/RjMqDzf_Ol_asiXtM2_hCPWmLcg=/500x500/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fh21%2Fhae%2F9030755090462%2FRZ06-03360100-R3U1-500x500.png',
    price: 99,
    count: 1,
    desc: 'Universal Gaming Controller for iOS',
    category: 'Mobile',
    createdAt: '2022-10-25T09:09:40.826Z',
    updatedAt: '2022-10-25T09:09:40.826Z',
    __v: 0,
  },
  {
    _id: '6357a7f948c4d685f62d500b',
    name: 'Razer Kishi V2 for Android',
    image:
      'https://assets3.razerzone.com/nEUo15xHiCXtd-t8ev00d-VXsVc=/500x500/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fh5f%2Fh27%2F9408540114974%2Fkishi-v2-android-500x500.png',
    price: 99,
    count: 1,
    desc: 'Universal Mobile Gaming Controller for Android',
    category: 'Mobile',
    createdAt: '2022-10-25T09:10:17.961Z',
    updatedAt: '2022-10-25T09:10:17.961Z',
    __v: 0,
  },
  {
    _id: '6357a84048c4d685f62d500f',
    name: 'THX Onyx™',
    image:
      'https://assets3.razerzone.com/y4vOPOI_fqcNvrYahcooYudpknc=/500x500/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fhca%2Fh3a%2F9166151483422%2Fthx-onyx-500x500.png',
    price: 199,
    count: 1,
    desc: 'Portable DAC Headphone Amplifier',
    category: 'Mobile',
    createdAt: '2022-10-25T09:11:28.992Z',
    updatedAt: '2022-10-25T09:11:28.992Z',
    __v: 0,
  },
  {
    _id: '6357a85a48c4d685f62d5012',
    name: 'Razer Hammerhead True Wireless Earbuds (2019) - Black',
    image:
      'https://assets3.razerzone.com/syVfgQRq8YGzbsebn4u4OM-x1mw=/500x500/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fh1c%2Fhea%2F9081097617438%2Fhammerhead-true-wireless-earbuds-base-500x500.png',
    price: 49,
    count: 1,
    desc: 'True Wireless Earbuds',
    category: 'Mobile',
    createdAt: '2022-10-25T09:11:54.265Z',
    updatedAt: '2022-10-25T09:11:54.265Z',
    __v: 0,
  },
  {
    _id: '63a141aa4c88af5457fda10d',
    name: 'Razer Blade 14 - Full HD 144Hz - GeForce RTX 3060 - Mercury',
    image:
      'https://assets3.razerzone.com/0Ab864eqnrTXT7wnKgsRTZZCIvk=/500x500/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fh05%2Fh90%2F9453354024990%2Fblade-14-p8-mercury-fhd-qhd-2-500x500.png',
    price: 1924,
    count: 1,
    desc: '14-inch Gaming Laptop with AMD Ryzen™ 6900HX',
    category: 'Laptop',
    createdAt: '2022-12-20T05:01:30.735Z',
    updatedAt: '2022-12-20T05:01:30.735Z',
    __v: 0,
  },
  {
    _id: '63b9180516b7585d0d3843f3',
    name: 'Razer Wolverine V2 Pro - Black',
    image:
      'https://assets3.razerzone.com/IsSTGcOn6TpMXDSKm7Nxz4MA38o=/500x500/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fh0b%2Fh8c%2F9466430914590%2Fwolverine-v2-pro-black-500x500.png',
    price: 249,
    count: 1,
    desc: 'Wireless Pro Gaming Controller for PS5™ Consoles and PC',
    category: 'Console',
    createdAt: '2023-01-07T06:58:13.033Z',
    updatedAt: '2023-01-07T06:58:13.033Z',
    __v: 0,
  },
  {
    _id: '63b9182616b7585d0d3843f6',
    name: 'Razer Wolverine V2 Pro - White',
    image:
      'https://assets3.razerzone.com/_jne7rN5P9qlRZNcQOwQdD_4vm4=/500x500/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fhd6%2Fh5c%2F9450413228062%2Fwolverine-v2-pro-white-500x500.png',
    price: 249,
    count: 1,
    desc: 'Wireless Pro Gaming Controller for PS5™ Consoles and PC',
    category: 'Console',
    createdAt: '2023-01-07T06:58:46.983Z',
    updatedAt: '2023-01-07T06:58:46.983Z',
    __v: 0,
  },
  {
    _id: '63b9193216b7585d0d384401',
    name: 'Razer Kaira Pro for PlayStation (2021)',
    image:
      'https://assets3.razerzone.com/j4lJXHfCggPYfh283ShPN-Jk1SY=/500x500/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fhe9%2Fh33%2F9397620211742%2Fkaira-pro-ps-2-500x500.png',
    price: 199,
    count: 1,
    desc: 'Dual Wireless PlayStation 5 Headset with Haptics',
    category: 'Headsets',
    createdAt: '2023-01-07T07:03:14.698Z',
    updatedAt: '2023-01-07T07:03:14.698Z',
    __v: 0,
  },
  {
    _id: '63f47a691f3ddf924244e31e',
    name: 'ASUS Laptop X515 ( i7-1065G7/Silver )',
    image: 'https://nout.uz/wp-content/uploads/2021/11/509x5.jpg',
    price: 550,
    count: 1,
    desc: 'Intel® Core™ i7-1065G7 (1.3 GHz - 3.9 GHz) (4 Ядра - 8 Потоков)',
    category: 'Asus',
    updatedAt: '2023-02-21T08:01:45.888Z',
    createdAt: '2023-02-21T08:01:45.888Z',
    __v: 0,
  },
  {
    _id: '63f47a691f3ddf924244e32e',
    name: 'Asus VivoBook K513 (i3-1115G4)',
    image: 'https://nout.uz/wp-content/uploads/2021/11/k513e-vivobook-1-1.jpg',
    price: 510,
    count: 1,
    desc: 'Intel® Core® i3-1115G4 (1.7 GHz – 4.1 GHz ) (2-Ядра; 4-Потокa)',
    category: 'Asus',
    updatedAt: '2023-02-21T08:01:45.888Z',
    createdAt: '2023-02-21T08:01:45.888Z',
    __v: 0,
  },
  {
    _id: '63f47a691f3ddf924244e33e',
    name: 'Asus VivoBook K513 (i5-1135G7/Silver)',
    image:
      'https://nout.uz/wp-content/uploads/2022/03/k513-vivobook-silver3.jpg',
    price: 720,
    count: 1,
    desc: 'Intel Core i5-1135G7 (2.4 GHz – 4.2 GHz) (4-Ядрa; 8-Потоков;)',
    category: 'Asus',
    updatedAt: '2023-02-21T08:01:45.888Z',
    createdAt: '2023-02-21T08:01:45.888Z',
    __v: 0,
  },
  {
    _id: '63f47a691f3ddf924244e35e',
    name: 'Lenovo IdeaPad L3 (Pentium Gold 7505)',
    image: 'https://nout.uz/wp-content/uploads/2021/12/1lenovo-ideapad-3.jpg',
    price: 460,
    count: 1,
    desc: 'Intel Pentium Gold 7505 (2.0 GHz – 3.5 GHz) (2-Ядра; 4-Потока)',
    category: 'Lenovo',
    updatedAt: '2023-02-21T08:01:45.888Z',
    createdAt: '2023-02-21T08:01:45.888Z',
    __v: 0,
  },
  {
    _id: '63f47a691f3ddf924244e36e',
    name: 'Asus VivoBook K513 OLED i5-1135G7',
    image: 'https://nout.uz/wp-content/uploads/2021/11/bez-imeni-123.jpg',
    price: 810,
    count: 1,
    desc: 'Intel Core i5-1135G7 (2.4 GHz – 4.2 GHz) (4-Ядрa; 8-Потоков;)',
    category: 'Lenovo',
    updatedAt: '2023-02-21T08:01:45.888Z',
    createdAt: '2023-02-21T08:01:45.888Z',
    __v: 0,
  },
  {
    _id: '63f47a691f3ddf924244e38e',
    name: 'Lenovo IdeaPad Flex 5 (i7-1255U)',
    image: 'https://nout.uz/wp-content/uploads/2022/12/Flex-5-16-3.jpg',
    price: 1030,
    count: 1,
    desc: 'Intel® Core™ i7-1255U (3.5GHz – 4.7GHz) (10-Ядeр 12-Потоков)',
    category: 'Lenovo',
    updatedAt: '2023-02-21T08:01:45.888Z',
    createdAt: '2023-02-21T08:01:45.888Z',
    __v: 0,
  },
  {
    _id: '63f47a691f3ddf924244e39e',
    name: 'MSI GP66 Leopard (i7/RTX3070)',
    image:
      'https://nout.uz/wp-content/uploads/2022/08/gp66-leopard3-300x300.jpg',
    price: 1280,
    count: 1,
    desc: 'Intel Core i7-11800H (2.3GHz – 4.6GHz) (8-Ядeр; 16-Потоков)',
    category: 'Msi',
    updatedAt: '2023-02-21T08:01:45.888Z',
    createdAt: '2023-02-21T08:01:45.888Z',
    __v: 0,
  },
  {
    _id: '63f5dd85b3e45af6fb500f8c',
    name: 'Bobur MSI GP66 Leopard (i7/RTX3070)',
    image:
      'https://upg.uz/storage/files/products/937/original/SHx2ycYTah8qcwH3TowjPo0o2s6xf1fbdC3Decad.jpg',
    price: 1111,
    count: 1,
    desc: 'Bobur Intel Core i7-11800H (2.3GHz – 4.6GHz) (8-Ядeр; 16-Потоков)',
    category: 'Msi',
    createdAt: '2023-02-22T09:16:53.797Z',
    updatedAt: '2023-02-22T09:16:53.797Z',
    __v: 0,
  },
  {
    _id: '63f5dff5b3e45af6fb500f91',
    name: 'MSI GP76 Leopard (i7/16GB/RTX3070)',
    image: 'https://nout.uz/wp-content/uploads/2021/11/gl761-300x300.jpg',
    price: 1500,
    count: 1,
    desc: 'Intel Core i7-11800H (2.3GHz – 4.6GHz) (8-Ядeр; 16-Потоков)',
    category: 'Msi',
    createdAt: '2023-02-22T09:27:17.368Z',
    updatedAt: '2023-02-22T09:27:17.368Z',
    __v: 0,
  },
  {
    _id: '63f5e089b3e45af6fb500f95',
    name: 'Dell XPS 17 (i7-12700H/RTX3060)',
    image:
      'https://nout.uz/wp-content/uploads/2022/06/xps-17-dell1-300x300.jpg',
    price: 3200,
    count: 1,
    desc: 'Intel® Core™ i7-12700H (3.5 GHz – 4.7 GHz ) (14-Ядра; #производительных ядер 6, #эффективных ядер 8; 20-Потоков)',
    category: 'Dell',
    createdAt: '2023-02-22T09:29:45.814Z',
    updatedAt: '2023-02-22T09:29:45.814Z',
    __v: 0,
  },
  {
    _id: '63f5e0d7b3e45af6fb500f98',
    name: 'Razer Blade 17 2022 (i7-12800H/RTX3070Ti)',
    image:
      'https://nout.uz/wp-content/uploads/2022/12/razer-blade-171-300x300.jpg',
    price: 3200,
    count: 1,
    desc: 'Intel® Core™ i7-12800H (3.7 GHz – 4.8 GHz ) (14-Ядра 20-Потоков)',
    category: 'Razer',
    createdAt: '2023-02-22T09:31:03.564Z',
    updatedAt: '2023-02-22T09:31:03.564Z',
    __v: 0,
  },
  {
    _id: '63f5e11bb3e45af6fb500f9b',
    name: 'Samsung Galaxy Book Pro 15 360 (i7-1165G7)',
    image:
      'https://nout.uz/wp-content/uploads/2022/04/bez-imeni-241-300x300.jpg',
    price: 1300,
    count: 1,
    desc: 'Intel® Core™ i7-1165G7 (1.2GHz – 4.7GHz) (4-Ядра; 8-Потоков)',
    category: 'Samsung',
    createdAt: '2023-02-22T09:32:11.966Z',
    updatedAt: '2023-02-22T09:32:11.966Z',
    __v: 0,
  },
  {
    _id: '63f5e18ab3e45af6fb500fa2',
    name: 'Samsung Galaxy Book Pro 15 (i5-1135G7)',
    image:
      'https://nout.uz/wp-content/uploads/2021/11/galaxy-book-flex-alpha3-300x300.jpg',
    price: 900,
    count: 1,
    desc: 'Intel Core i5-1135G7 (2.4 GHz – 4.2 GHz) (4-Ядрa; 8-Потоков;)',
    category: 'Samsung',
    createdAt: '2023-02-22T09:34:02.770Z',
    updatedAt: '2023-02-22T09:34:02.770Z',
    __v: 0,
  },
  {
    _id: '63f5e322b3e45af6fb500fad',
    name: 'MacBook PRO 13 M1 (16GB/512SSD)',
    image: 'https://nout.uz/wp-content/uploads/2021/11/macbook-m11-300x300.jpg',
    price: 2000,
    count: 1,
    desc: 'Intel® Core™ i7-1165G7 (1.2GHz – 4.7GHz) (4-Ядра; 8-Потоков)',
    category: 'Macbook',
    createdAt: '2023-02-22T09:40:50.922Z',
    updatedAt: '2023-02-22T09:40:50.922Z',
    __v: 0,
  },
  {
    _id: '63f5e726b3e45af6fb500fb1',
    name: 'MacBook PRO 13 M1 (16GB/256SSD)',
    image: 'https://nout.uz/wp-content/uploads/2021/11/macbook-m11-300x300.jpg',
    price: 1700,
    count: 1,
    desc: 'Intel® Core™ i7-1165G7 (1.2GHz – 4.7GHz) (4-Ядра; 8-Потоков)',
    category: 'Macbook',
    createdAt: '2023-02-22T09:57:58.349Z',
    updatedAt: '2023-02-22T09:57:58.349Z',
    __v: 0,
  },
  {
    _id: '63f5e751b3e45af6fb500fb4',
    name: 'MacBook Pro 14 M1 (16GB/1TB)',
    image:
      'https://nout.uz/wp-content/uploads/2021/12/m1-macbook-1-300x300.jpg',
    price: 2500,
    count: 1,
    desc: 'Intel® Core™ i7-1165G7 (1.2GHz – 4.7GHz) (4-Ядра; 8-Потоков)',
    category: 'Macbook',
    createdAt: '2023-02-22T09:58:41.156Z',
    updatedAt: '2023-02-22T09:58:41.156Z',
    __v: 0,
  },
  {
    _id: '63f5e779b3e45af6fb500fb7',
    name: 'Macbook Air M1 (8GB/512SD)',
    image:
      'https://nout.uz/wp-content/uploads/2021/12/macbook-air1-300x300.jpg',
    price: 1300,
    count: 1,
    desc: 'Intel® Core™ i7-1165G7 (1.2GHz – 4.7GHz) (4-Ядра; 8-Потоков)',
    category: 'Macbook',
    createdAt: '2023-02-22T09:59:21.534Z',
    updatedAt: '2023-02-22T09:59:21.534Z',
    __v: 0,
  },
  {
    _id: '63f5ea0db3e45af6fb500fbb',
    name: 'Acer Aspire 5 Black (R5-5500U)',
    image:
      'https://nout.uz/wp-content/uploads/2021/11/acer-aspire-5-black-1-300x300.jpg',
    price: 570,
    count: 1,
    desc: 'AMD Ryzen R5-5500U (2.1 GHz – 4.0 GHz ) (6-Ядер; 12-Потоков)',
    category: 'Acer',
    createdAt: '2023-02-22T10:10:21.023Z',
    updatedAt: '2023-02-22T10:10:21.023Z',
    __v: 0,
  },
  {
    _id: '63f5ea6bb3e45af6fb500fbf',
    name: 'Acer Aspire 5 Grey (i5/Intel Iris Xe)',
    image:
      'https://nout.uz/wp-content/uploads/2021/11/acer-aspire5-grey1-300x300.jpg',
    price: 580,
    count: 1,
    desc: 'Intel Core i5-1135G7 (2.4 GHz – 4.2 GHz) (4-Ядрa; 8-Потоков;)',
    category: 'Acer',
    createdAt: '2023-02-22T10:11:55.760Z',
    updatedAt: '2023-02-22T10:11:55.760Z',
    __v: 0,
  },
  {
    _id: '63f5eaf4b3e45af6fb500fc8',
    name: 'Acer Nitro 5 2022 (i5-12500H/RTX3050Ti)',
    image:
      'https://nout.uz/wp-content/uploads/2022/07/acer-nitro-5-20223-300x300.jpg',
    price: 975,
    count: 1,
    desc: 'Intel® Core™ i5-12500H (3.3 GHz – 4.5 GHz ) (12-Ядeр; #производительных ядер 4, #эффективных ядер 8; 16-Потоков)',
    category: 'Acer',
    createdAt: '2023-02-22T10:14:12.721Z',
    updatedAt: '2023-02-22T10:14:12.721Z',
    __v: 0,
  },
  {
    _id: '63f866e9dcbe1ce89eff4348',
    name: 'HP Victus 15',
    image: 'https://nout.uz/wp-content/uploads/2021/11/victus2-300x300.jpg',
    price: 1900,
    count: 1,
    desc: 'HP Victus 15 (R5-5600H/GTX1650)',
    category: 'Hp',
    createdAt: '2023-02-24T07:27:37.888Z',
    updatedAt: '2023-02-25T11:53:17.331Z',
    __v: 0,
  },
  {
    _id: '63f86953dcbe1ce89eff434d',
    name: 'HP Pavilion 15 Silver (R3-5300U)',
    image:
      'https://nout.uz/wp-content/uploads/2021/11/new-pavilion1-300x300.jpg',
    price: 570,
    count: 1,
    desc: 'AMD Ryzen™ 3-5300U (2.6 GHz - 3.8 GHz) (4 ядра - 8 потоков)',
    category: 'Hp',
    createdAt: '2023-02-24T07:37:55.889Z',
    updatedAt: '2023-02-24T07:37:55.889Z',
    __v: 0,
  },
  {
    _id: '63f8696fdcbe1ce89eff4350',
    name: 'HP Pavilion 15 White (R3-5300U)',
    image:
      'https://nout.uz/wp-content/uploads/2021/11/new-pavilion1-300x300.jpg',
    price: 590,
    count: 1,
    desc: 'AMD Ryzen™ 3-5300U (2.6 GHz - 3.8 GHz) (4 ядра - 8 потоков)',
    category: 'Hp',
    createdAt: '2023-02-24T07:38:23.136Z',
    updatedAt: '2023-02-24T07:38:23.136Z',
    __v: 0,
  },
  {
    _id: '63f8698edcbe1ce89eff4353',
    name: 'HP Pavilion 15 Gold (R3-5300U)',
    image:
      'https://nout.uz/wp-content/uploads/2021/11/new-pavilion1-300x300.jpg',
    price: 593,
    count: 1,
    desc: 'AMD Ryzen™ 3-5300U (2.6 GHz - 3.8 GHz) (4 ядра - 8 потоков)',
    category: 'Hp',
    createdAt: '2023-02-24T07:38:54.732Z',
    updatedAt: '2023-02-24T07:38:54.732Z',
    __v: 0,
  },
  {
    _id: '63f869bcdcbe1ce89eff4356',
    name: 'HP Victus 15 (R5-5600H/GTX1650);',
    image: 'https://nout.uz/wp-content/uploads/2021/11/victus2-300x300.jpg',
    price: 1100,
    count: 1,
    desc: 'AMD® Ryzen™ 5-5600H (2.3 GHz – 4.2 GHz) (6-Ядeр; 12-Потоков)',
    category: 'Hp',
    createdAt: '2023-02-24T07:39:40.048Z',
    updatedAt: '2023-02-25T11:40:06.082Z',
    __v: 0,
  },
  {
    _id: '63fcecab4323324e4da6f889',
    name: 'sdfads',
    image:
      'data:image/jpeg;base64,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',
    price: 234,
    count: 1,
    desc: 'weras',
    category: 'werasd',
    createdAt: '2023-02-27T17:47:23.309Z',
    updatedAt: '2023-02-27T17:47:23.309Z',
    __v: 0,
  },
  {
    _id: '63fd8cea167cd80bedd3e2b7',
    name: 'Asus laptop',
    image: 'https://nout.uz/wp-content/uploads/2021/11/509x5-300x300.jpg',
    price: 570,
    count: 1,
    desc: 'Intel® Core™ i7-1065G7 (1.3 GHz - 3.9 GHz) (4 Ядра - 8 Потоков)',
    category: 'bazavoy',
    createdAt: '2023-02-28T05:11:06.099Z',
    updatedAt: '2023-02-28T05:11:06.099Z',
    __v: 0,
  },
  {
    _id: '63fd8d4d167cd80bedd3e2bb',
    name: 'HP pavilion',
    image:
      'https://nout.uz/wp-content/uploads/2023/02/pavilion-15-gold-300x300.jpg',
    price: 590,
    count: 1,
    desc: '8GB/256',
    category: 'bazavoy',
    createdAt: '2023-02-28T05:12:45.735Z',
    updatedAt: '2023-02-28T05:12:45.735Z',
    __v: 0,
  },
  {
    _id: '63fd8e05167cd80bedd3e2c4',
    name: 'HP Laptop',
    image:
      'https://nout.uz/wp-content/uploads/2021/11/new-pavilion1-300x300.jpg',
    price: 540,
    count: 1,
    desc: '4GB/256',
    category: 'bazavoy',
    createdAt: '2023-02-28T05:15:49.574Z',
    updatedAt: '2023-02-28T05:15:49.574Z',
    __v: 0,
  },
  {
    _id: '63fd8e45167cd80bedd3e2c8',
    name: 'HP 17',
    image: 'https://nout.uz/wp-content/uploads/2021/11/470g87-300x300.jpg',
    price: 680,
    count: 1,
    desc: '8GB/256',
    category: 'bazavoy',
    createdAt: '2023-02-28T05:16:53.572Z',
    updatedAt: '2023-02-28T05:16:53.572Z',
    __v: 0,
  },
  {
    _id: '63fd8e87167cd80bedd3e2cc',
    name: 'Asus Vivo',
    image:
      'https://nout.uz/wp-content/uploads/2022/07/vivobook-17x-300x300.jpg',
    price: 740,
    count: 1,
    desc: '8GB/256',
    category: 'bazavoy',
    createdAt: '2023-02-28T05:17:59.167Z',
    updatedAt: '2023-02-28T05:17:59.167Z',
    __v: 0,
  },
  {
    _id: '63fd8ee7167cd80bedd3e2d0',
    name: 'Lenovo Laptop',
    image:
      'https://nout.uz/wp-content/uploads/2022/05/len-ideapad-5pro4-300x300.jpg',
    price: 1300,
    count: 1,
    desc: '16GB/512',
    category: 'biznes',
    createdAt: '2023-02-28T05:19:35.933Z',
    updatedAt: '2023-02-28T05:19:35.933Z',
    __v: 0,
  },
  {
    _id: '63fd8fad167cd80bedd3e2d9',
    name: 'Lenevo Laptop',
    image:
      'https://nout.uz/wp-content/uploads/2022/08/t16-thinkpad2-300x300.jpg',
    price: 1800,
    count: 1,
    desc: '16GB/512',
    category: 'biznes',
    createdAt: '2023-02-28T05:22:53.070Z',
    updatedAt: '2023-02-28T05:22:53.070Z',
    __v: 0,
  },
  {
    _id: '63fd9003167cd80bedd3e2df',
    name: 'HP laptop',
    image:
      'https://nout.uz/wp-content/uploads/2021/11/new-pavilion1-300x300.jpg',
    price: 680,
    count: 1,
    desc: '8GB/512',
    category: 'biznes',
    createdAt: '2023-02-28T05:24:19.355Z',
    updatedAt: '2023-02-28T05:24:19.355Z',
    __v: 0,
  },
  {
    _id: '63fd90e4167cd80bedd3e2e7',
    name: 'HP Dmon',
    image: 'https://nout.uz/wp-content/uploads/2022/12/omen1-300x300.jpg',
    price: 1400,
    count: 1,
    desc: '16GB/512',
    category: 'mochni',
    createdAt: '2023-02-28T05:28:04.100Z',
    updatedAt: '2023-02-28T05:28:04.100Z',
    __v: 0,
  },
  {
    _id: '63fd9112167cd80bedd3e2eb',
    name: 'Asus Rog',
    image:
      'https://nout.uz/wp-content/uploads/2022/04/rog-r7-6800h4-300x300.jpg',
    price: 1400,
    count: 1,
    desc: '8GB/512',
    category: 'mochni',
    createdAt: '2023-02-28T05:28:50.909Z',
    updatedAt: '2023-02-28T05:28:50.909Z',
    __v: 0,
  },
  {
    _id: '63fd9142167cd80bedd3e2ef',
    name: 'Acer Nitro',
    image:
      'https://nout.uz/wp-content/uploads/2021/11/%D0%91%D0%B5%D0%B7-%D0%B8%D0%BC%D0%B5%D0%BD%D0%B8-er3-300x300.jpg',
    price: 1200,
    count: 1,
    desc: '8GB/256',
    category: 'mochni',
    createdAt: '2023-02-28T05:29:38.811Z',
    updatedAt: '2023-02-28T05:29:38.811Z',
    __v: 0,
  },
  {
    _id: '63fd9171167cd80bedd3e2f3',
    name: 'Asus Tuf',
    image: 'https://nout.uz/wp-content/uploads/2022/04/a17-tuf1-300x300.jpg',
    price: 1900,
    count: 1,
    desc: '16GB/1TB',
    category: 'mochni',
    createdAt: '2023-02-28T05:30:25.461Z',
    updatedAt: '2023-02-28T05:30:25.461Z',
    __v: 0,
  },
  {
    _id: '63fd91e1167cd80bedd3e2fb',
    name: 'Asus TUF',
    image: 'https://nout.uz/wp-content/uploads/2022/04/a17-tuf1-300x300.jpg',
    price: 1209,
    count: 1,
    desc: '8GB/512',
    category: 'mochni',
    createdAt: '2023-02-28T05:32:17.992Z',
    updatedAt: '2023-02-28T05:32:17.992Z',
    __v: 0,
  },
  {
    _id: '63fd926a167cd80bedd3e301',
    name: 'MSI GP76',
    image: 'https://nout.uz/wp-content/uploads/2021/11/gl761-300x300.jpg',
    price: 1603,
    count: 1,
    desc: '16GB/512',
    category: 'mochni',
    createdAt: '2023-02-28T05:34:34.235Z',
    updatedAt: '2023-02-28T05:34:34.235Z',
    __v: 0,
  },
  {
    _id: '63fd92ce167cd80bedd3e305',
    name: 'Levono IdeaPaad Gaming 3pro',
    image:
      'https://nout.uz/wp-content/uploads/2022/12/Ideapad-2022-300x300.jpg',
    price: 1040,
    count: 1,
    desc: '8GB/512',
    category: 'mochni',
    createdAt: '2023-02-28T05:36:14.897Z',
    updatedAt: '2023-02-28T05:36:14.897Z',
    __v: 0,
  },
  {
    _id: '63fd9308167cd80bedd3e309',
    name: 'Acer NItro 5 2022',
    image:
      'https://nout.uz/wp-content/uploads/2022/07/acer-nitro-5-20223-300x300.jpg',
    price: 1080,
    count: 1,
    desc: '8GB/512',
    category: 'mochni',
    createdAt: '2023-02-28T05:37:12.080Z',
    updatedAt: '2023-02-28T05:37:12.080Z',
    __v: 0,
  },
  {
    _id: '63fd9355167cd80bedd3e30d',
    name: 'Asus ROG 8RTX',
    image:
      'https://nout.uz/wp-content/uploads/2022/07/scar-g733-korea1-300x300.jpg',
    price: 3000,
    count: 1,
    desc: '16GB/1TB',
    category: 'mochni',
    createdAt: '2023-02-28T05:38:29.709Z',
    updatedAt: '2023-02-28T05:38:29.709Z',
    __v: 0,
  },
  {
    _id: '63fd942b167cd80bedd3e315',
    name: 'Asus ZenBook',
    image:
      'https://nout.uz/wp-content/uploads/2022/08/q408-zenbook5-300x300.jpg',
    price: 740,
    count: 1,
    desc: '8GB/256',
    category: 'ultra',
    createdAt: '2023-02-28T05:42:03.198Z',
    updatedAt: '2023-02-28T05:42:03.198Z',
    __v: 0,
  },
  {
    _id: '63fd9467167cd80bedd3e319',
    name: 'Asus VivoBook K4',
    image: 'https://nout.uz/wp-content/uploads/2022/03/k413-i31-300x300.jpg',
    price: 740,
    count: 1,
    desc: '8GB/256',
    category: 'ultra',
    createdAt: '2023-02-28T05:43:03.819Z',
    updatedAt: '2023-02-28T05:43:03.819Z',
    __v: 0,
  },
  {
    _id: '63fd9693167cd80bedd3e31d',
    name: 'Asus ZenBook UK425J',
    image: 'https://nout.uz/wp-content/uploads/2021/11/i3-zenbook3-300x300.jpg',
    price: 920,
    count: 1,
    desc: '8GB/512',
    category: 'ultra',
    createdAt: '2023-02-28T05:52:19.410Z',
    updatedAt: '2023-02-28T05:52:19.410Z',
    __v: 0,
  },
  {
    _id: '63fd96cd167cd80bedd3e321',
    name: 'Asus ZenBook UX425',
    image:
      'https://nout.uz/wp-content/uploads/2021/11/ux425-white2-300x300.jpg',
    price: 1080,
    count: 1,
    desc: '16GB/512',
    category: 'ultra',
    createdAt: '2023-02-28T05:53:17.027Z',
    updatedAt: '2023-02-28T05:53:17.027Z',
    __v: 0,
  },
  {
    _id: '63fd9719167cd80bedd3e325',
    name: 'Levono ThinkBook 3X',
    image:
      'https://nout.uz/wp-content/uploads/2023/01/thinkbook-13x4-1-300x300.jpg',
    price: 1310,
    count: 1,
    desc: '16GB/1TB',
    category: 'ultra',
    createdAt: '2023-02-28T05:54:33.226Z',
    updatedAt: '2023-02-28T05:54:33.226Z',
    __v: 0,
  },
  {
    _id: '63fd9759167cd80bedd3e329',
    name: 'Asus ZenBook UX325E',
    image:
      'https://nout.uz/wp-content/uploads/2021/11/zenbook-ux3251-300x300.jpg',
    price: 980,
    count: 1,
    desc: '8GB/512',
    category: 'ultra',
    createdAt: '2023-02-28T05:55:37.559Z',
    updatedAt: '2023-02-28T05:55:37.559Z',
    __v: 0,
  },
  {
    _id: '63fd9926167cd80bedd3e32d',
    name: 'HP Spectre X360 16',
    image:
      'https://nout.uz/wp-content/uploads/2022/08/hp-spectre-20222-300x300.jpg',
    price: 1600,
    count: 1,
    desc: '16GB/512',
    category: 'transform',
    createdAt: '2023-02-28T06:03:18.084Z',
    updatedAt: '2023-02-28T06:03:18.084Z',
    __v: 0,
  },
  {
    _id: '63fd996c167cd80bedd3e331',
    name: 'Asus ZenBook Flip 15',
    image:
      'https://nout.uz/wp-content/uploads/2022/12/zenbook-q508ug1-300x300.jpg',
    price: 830,
    count: 1,
    desc: '8GB/256',
    category: 'transform',
    createdAt: '2023-02-28T06:04:28.214Z',
    updatedAt: '2023-02-28T06:04:28.214Z',
    __v: 0,
  },
  {
    _id: '63fd99ad167cd80bedd3e335',
    name: 'HP ENNY x360',
    image:
      'https://nout.uz/wp-content/uploads/2022/09/envy-13-new2-300x300.jpg',
    price: 1030,
    count: 1,
    desc: '8GB/512',
    category: 'transform',
    createdAt: '2023-02-28T06:05:33.999Z',
    updatedAt: '2023-02-28T06:05:33.999Z',
    __v: 0,
  },
  {
    _id: '63fd9a1e167cd80bedd3e339',
    name: 'HP ENNY 15 X360 1IN2',
    image:
      'https://nout.uz/wp-content/uploads/2022/02/new-envy-152-300x300.jpg',
    price: 740,
    count: 1,
    desc: '8GB/256',
    category: 'transform',
    createdAt: '2023-02-28T06:07:26.456Z',
    updatedAt: '2023-02-28T06:07:26.456Z',
    __v: 0,
  },
  {
    _id: '63fd9c79167cd80bedd3e34e',
    name: 'Leveno IdeaPad l3',
    image:
      'https://nout.uz/wp-content/uploads/2021/12/1lenovo-ideapad-3-300x300.jpg',
    price: 480,
    count: 1,
    desc: '4GB/1TB',
    category: 'LevonoCategory',
    createdAt: '2023-02-28T06:17:29.174Z',
    updatedAt: '2023-02-28T06:17:29.174Z',
    __v: 0,
  },
  {
    _id: '63fd9cfd167cd80bedd3e356',
    name: 'Levono IdeaPad 5Pro',
    image:
      'https://nout.uz/wp-content/uploads/2022/05/len-ideapad-5pro4-300x300.jpg',
    price: 970,
    count: 1,
    desc: '16GB/512',
    category: 'LevonoCategory',
    createdAt: '2023-02-28T06:19:41.710Z',
    updatedAt: '2023-02-28T06:19:41.710Z',
    __v: 0,
  },
  {
    _id: '63fd9d62167cd80bedd3e35a',
    name: 'Leveno IdeaPad Flex 5',
    image: 'https://nout.uz/wp-content/uploads/2022/12/Flex-5-16-3-300x300.jpg',
    price: 1030,
    count: 1,
    desc: '8GB/512',
    category: 'LevonoCategory',
    createdAt: '2023-02-28T06:21:22.012Z',
    updatedAt: '2023-02-28T06:21:22.012Z',
    __v: 0,
  },
  {
    _id: '63fd9e00167cd80bedd3e35e',
    name: 'HP Pavilion 15 Silver',
    image:
      'https://nout.uz/wp-content/uploads/2021/11/new-pavilion1-300x300.jpg',
    price: 540,
    count: 1,
    desc: '4GB/256',
    category: 'HPCategory',
    createdAt: '2023-02-28T06:24:00.387Z',
    updatedAt: '2023-02-28T06:24:00.387Z',
    __v: 0,
  },
  {
    _id: '63fd9e58167cd80bedd3e362',
    name: 'HP Pavilion  15 White',
    image:
      'https://nout.uz/wp-content/uploads/2021/11/new-pavilion1-300x300.jpg',
    price: 590,
    count: 1,
    desc: '8GB/512',
    category: 'HPCategory',
    createdAt: '2023-02-28T06:25:28.859Z',
    updatedAt: '2023-02-28T06:25:28.859Z',
    __v: 0,
  },
  {
    _id: '63fd9e8c167cd80bedd3e366',
    name: 'HP Pavilion 15 Gold',
    image:
      'https://nout.uz/wp-content/uploads/2023/02/pavilion-15-gold-300x300.jpg',
    price: 590,
    count: 1,
    desc: '8GB/512',
    category: 'HPCategory',
    createdAt: '2023-02-28T06:26:20.487Z',
    updatedAt: '2023-02-28T06:26:20.487Z',
    __v: 0,
  },
  {
    _id: '63fd9eee167cd80bedd3e36c',
    name: 'HP 17 new',
    image: 'https://nout.uz/wp-content/uploads/2021/11/470g87-300x300.jpg',
    price: 670,
    count: 1,
    desc: '8GB/256',
    category: 'HPCategory',
    createdAt: '2023-02-28T06:27:58.085Z',
    updatedAt: '2023-02-28T06:27:58.085Z',
    __v: 0,
  },
  {
    _id: '63fd9f3d167cd80bedd3e370',
    name: 'MSI Creator M16',
    image: 'https://nout.uz/wp-content/uploads/2023/02/Creator3-300x300.jpg',
    price: 1100,
    count: 1,
    desc: '16GB/512',
    category: 'MSICategory',
    createdAt: '2023-02-28T06:29:17.307Z',
    updatedAt: '2023-02-28T06:29:17.307Z',
    __v: 0,
  },
  {
    _id: '63fd9f8a167cd80bedd3e374',
    name: 'MSI GP76 Leapard',
    image: 'https://nout.uz/wp-content/uploads/2021/11/gl761-300x300.jpg',
    price: 1600,
    count: 1,
    desc: '8GB/512',
    category: 'MSICategory',
    createdAt: '2023-02-28T06:30:34.605Z',
    updatedAt: '2023-02-28T06:30:34.605Z',
    __v: 0,
  },
  {
    _id: '63fd9fc1167cd80bedd3e378',
    name: 'MSI Crosshair 17',
    image: 'https://nout.uz/wp-content/uploads/2022/05/grosshare1-300x300.jpg',
    price: 2100,
    count: 1,
    desc: '16GB/512',
    category: 'MSICategory',
    createdAt: '2023-02-28T06:31:29.211Z',
    updatedAt: '2023-02-28T06:31:29.211Z',
    __v: 0,
  },
  {
    _id: '63fda002167cd80bedd3e37e',
    name: 'MSI Steath G566',
    image:
      'https://nout.uz/wp-content/uploads/2022/04/gs66-stealth1-300x300.jpg',
    price: 2900,
    count: 1,
    desc: '32GB/1TB',
    category: 'MSICategory',
    createdAt: '2023-02-28T06:32:34.553Z',
    updatedAt: '2023-02-28T06:32:34.553Z',
    __v: 0,
  },
  {
    _id: '63fda04b167cd80bedd3e382',
    name: 'Dell XPS 17',
    image:
      'https://nout.uz/wp-content/uploads/2022/06/xps-17-dell1-300x300.jpg',
    price: 3200,
    count: 1,
    desc: '32GB/1TB',
    category: 'DellCategory',
    createdAt: '2023-02-28T06:33:47.900Z',
    updatedAt: '2023-02-28T06:33:47.900Z',
    __v: 0,
  },
  {
    _id: '63fda0af167cd80bedd3e386',
    name: 'Razer Blade 17 2022',
    image:
      'https://nout.uz/wp-content/uploads/2022/12/razer-blade-171-300x300.jpg',
    price: 3400,
    count: 1,
    desc: '16GB/1TB',
    category: 'RazerCategory',
    createdAt: '2023-02-28T06:35:27.409Z',
    updatedAt: '2023-02-28T06:35:27.409Z',
    __v: 0,
  },
  {
    _id: '63fda106167cd80bedd3e38a',
    name: 'Samsung Galaxy Bock 15 360',
    image:
      'https://nout.uz/wp-content/uploads/2022/04/bez-imeni-241-300x300.jpg',
    price: 1400,
    count: 1,
    desc: '16GB/1TB',
    category: 'SamsungCategory',
    createdAt: '2023-02-28T06:36:54.110Z',
    updatedAt: '2023-02-28T06:36:54.110Z',
    __v: 0,
  },
  {
    _id: '63fda143167cd80bedd3e38e',
    name: 'Samsung Galaxy Bock Pro 15',
    image:
      'https://nout.uz/wp-content/uploads/2022/04/samsung-pro-amoled4-300x300.jpg',
    price: 1200,
    count: 1,
    desc: '16GB/512',
    category: 'SamsungCategory',
    createdAt: '2023-02-28T06:37:55.054Z',
    updatedAt: '2023-02-28T06:37:55.054Z',
    __v: 0,
  },
  {
    _id: '63fda194167cd80bedd3e392',
    name: 'Samsung Galaxy Bock Pro Flex2',
    image:
      'https://nout.uz/wp-content/uploads/2021/11/galaxy-book-flex-alpha3-300x300.jpg',
    price: 1140,
    count: 1,
    desc: '8GB/512',
    category: 'SamsungCategory',
    createdAt: '2023-02-28T06:39:16.311Z',
    updatedAt: '2023-02-28T06:39:16.311Z',
    __v: 0,
  },
  {
    _id: '647ef0702c9c718637e97ae0',
    name: 'Razer Basilisk V3 X HyperSpeed',
    image:
      'https://assets3.razerzone.com/WjED_340nvaIpKLOgVbmgruoOyo=/500x500/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fh3a%2Fhb0%2F9529652609054%2Fbasilisk-v3-x-hyperspeed-2-500x500.png',
    price: 69.99,
    count: 1,
    desc: 'Customizable Wireless Gaming Mouse with RGB Lighting',
    category: 'MICE',
    createdAt: '2023-06-06T08:38:08.922Z',
    updatedAt: '2023-06-06T08:38:08.922Z',
    __v: 0,
  },
  {
    _id: '64b51e6e6dcc1aaf6369449e',
    name: 'Razer Cobra',
    image:
      'https://assets3.razerzone.com/Vz6zFhY6ZYCtueYuZFrLK9HRH5U=/500x500/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fh54%2Fh60%2F9591466950686%2Fcobra-500x500.png',
    price: 40,
    count: 1,
    desc: 'Lightweight Wired Gaming Mouse with Razer Chroma™ RGB',
    category: 'MICE',
    createdAt: '2023-07-17T10:56:46.708Z',
    updatedAt: '2023-07-17T10:56:46.708Z',
    __v: 0,
  },
  {
    _id: '64c4c9e2675e8137d7f5fe7b',
    name: 'Razer Cobra Pro + Wireless Charging Puck Bundle',
    image:
      'https://assets3.razerzone.com/Cvapp8cfAH73TzJ36AtaSFEVWcs=/500x500/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fhd4%2Fhb0%2F9592950226974%2Fcobra-pro-wireless-charging-puck-500x500.png',
    price: 139,
    count: 1,
    desc: 'Customizable Wireless Gaming Mouse with Razer Chroma™ RGB',
    category: 'MICE',
    createdAt: '2023-07-29T08:12:18.366Z',
    updatedAt: '2023-07-29T08:12:18.366Z',
    __v: 0,
  },
  {
    _id: '64c4ca44675e8137d7f5fe7f',
    name: 'Razer Pro Click',
    image:
      'https://assets3.razerzone.com/w3IlIjQRh36Eic3eU67GTpLl57Q=/500x500/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fhc7%2Fh53%2F9529653231646%2Fpro-click-2-500x500.png',
    price: 99,
    count: 1,
    desc: 'High-precision ergonomic wireless mouse for productivity',
    category: 'MICE',
    createdAt: '2023-07-29T08:13:56.512Z',
    updatedAt: '2023-07-29T08:13:56.512Z',
    __v: 0,
  },
  {
    _id: '64c4ca8d675e8137d7f5fe82',
    name: 'Razer DeathAdder V3',
    image:
      'https://assets3.razerzone.com/H092QbS-88qbrNyTrOcfm44Xr1I=/500x500/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fh34%2Fh18%2F9533723115550%2F230609-dav3-pro-black-hyper-polling-dongle-bundle-4-500x500.png',
    price: 164,
    count: 1,
    desc: 'Ultra-lightweight Ergonomic Esports Mouse',
    category: 'MICE',
    createdAt: '2023-07-29T08:15:09.740Z',
    updatedAt: '2023-07-29T08:15:09.740Z',
    __v: 0,
  },
  {
    _id: '64c4cee7675e8137d7f5fe8b',
    name: 'Razer Huntsman V2 - Linear Optical Switch - US - PUBG: BATTLEGROUNDS Edition',
    image:
      'https://assets3.razerzone.com/Y_uxVrIDqp-7P4ouhdk1PaSC0Js=/500x500/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fh1b%2Fh64%2F9618322620446%2Fhuntsman-v2-pubg-2-500x500.png',
    price: 229,
    count: 1,
    desc: 'Optical Gaming Keyboard with Near-zero Input Latency',
    category: 'Keyboards',
    createdAt: '2023-07-29T08:33:43.890Z',
    updatedAt: '2023-07-29T08:33:43.890Z',
    __v: 0,
  },
  {
    _id: '64c4cf05675e8137d7f5fe8f',
    name: 'Razer Viper V2 Pro - PUBG: BATTLEGROUNDS Edition',
    image:
      'https://assets3.razerzone.com/Tv1JKEHlOyH2w5Z8znx60I-i0Sc=/500x500/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fh41%2Fh24%2F9606772916254%2Fviper-v2-pro-pubg-2-500x500.png',
    price: 169,
    count: 1,
    desc: 'Ultra-lightweight, Ultra-fast Wireless Esports Mouse',
    category: 'MICE',
    createdAt: '2023-07-29T08:34:13.091Z',
    updatedAt: '2023-07-29T08:34:13.091Z',
    __v: 0,
  },
  {
    _id: '64c4cf1c675e8137d7f5fe92',
    name: 'Razer Barracuda X - PUBG: BATTLEGROUNDS Edition',
    image:
      'https://assets3.razerzone.com/mLNtHPtS8BHBzUQS5oxn-a7yJQ0=/500x500/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fhf9%2Fha0%2F9593488834590%2Fbarracuda-x-pubg-500x500.png',
    price: 129,
    count: 1,
    desc: 'Wireless Multi-platform Gaming and Mobile Headset',
    category: 'Headsets',
    createdAt: '2023-07-29T08:34:36.922Z',
    updatedAt: '2023-07-29T08:34:36.922Z',
    __v: 0,
  },
  {
    _id: '64c8e42ab9fe49be1c7f1338',
    name: 'Razer Moray',
    image:
      'https://assets3.razerzone.com/rPwKS5S5e2c-df6kyshZUlVOalw=/500x500/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fh69%2Fh38%2F9591445061662%2Fmoray-500x500.png',
    price: 129,
    count: 1,
    desc: 'Ergonomic In-ear Monitor for All-day Streaming',
    category: 'Headsets',
    createdAt: '2023-08-01T10:53:30.863Z',
    updatedAt: '2023-08-01T10:53:30.863Z',
    __v: 0,
  },
  {
    _id: '64ec951ab76bc78eff475497',
    name: 'Razer Kishi V2 Pro for Android (Xbox)',
    image:
      'https://assets3.razerzone.com/uc-VIhpSRoRtBGcRMOm5c_JkKPI=/500x500/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fhb9%2Fh2c%2F9635435413534%2Fkishi-v2-pro-for-android-xbox-500x500.png',
    price: 149,
    count: 1,
    desc: 'Xbox Gaming Controller for Android',
    category: 'Mobile',
    createdAt: '2023-08-28T12:37:46.216Z',
    updatedAt: '2023-08-28T12:37:46.216Z',
    __v: 0,
  },
  {
    _id: '64ec953ab76bc78eff47549a',
    name: 'Razer Kishi V2 for iPhone (Xbox)',
    image:
      'https://assets3.razerzone.com/U50b9nGHzYZI1De3gSLP44ScMsE=/500x500/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fhf9%2Fh0d%2F9636642226206%2Fkishi-v2-iphone-xbox-500x500.png',
    price: 119,
    count: 1,
    desc: 'Universal Mobile Gaming Controller for iPhone',
    category: 'Mobile',
    createdAt: '2023-08-28T12:38:18.324Z',
    updatedAt: '2023-08-28T12:38:18.324Z',
    __v: 0,
  },
  {
    _id: '64ec957bb76bc78eff47549e',
    name: 'Razer Edge Gaming Tablet and Kishi V2 Pro Controller',
    image:
      'https://assets3.razerzone.com/wMrKpdbFNMP8X3t9plEyNJVDR0E=/500x500/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fh21%2Fh96%2F9469027614750%2Fedge-wifi-500x500.png',
    price: 399,
    count: 1,
    desc: 'Android Gaming Handheld',
    category: 'Mobile',
    createdAt: '2023-08-28T12:39:23.542Z',
    updatedAt: '2023-08-28T12:39:23.542Z',
    __v: 0,
  },
  {
    _id: '64ec98f5b76bc78eff4754ac',
    name: 'Razer Blade 16 Models',
    image:
      'https://assets3.razerzone.com/xusudNlBP4YoKgoOh3EkWXxopYg=/500x500/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fhfe%2Fh86%2F9470716772382%2Fblade16-s9-v2-500x500.png',
    price: 2699,
    count: 1,
    desc: 'NVIDIA® GeForce RTX™ 40 Series 16” Laptop with 13th Gen Intel® Core™ i9 Processor (24-Core)',
    category: 'Laptop',
    createdAt: '2023-08-28T12:54:13.207Z',
    updatedAt: '2023-08-28T12:54:13.207Z',
    __v: 0,
  },
  {
    _id: '650982da9620a3146ef5956d',
    name: 'Razer BlackWidow V4 Pro',
    image:
      'https://assets3.razerzone.com/pAYbv__1hDknbv0Jj5-Rw39CrRw=/500x500/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fh2a%2Fhd3%2F9538807103518%2Fblackwidow-v3-black-5-500x500.png',
    price: 229,
    count: 1,
    desc: 'Mechanical Gaming Keyboard with Razer Chroma™ RGB',
    category: 'Keyboards',
    createdAt: '2023-09-19T11:15:39.016Z',
    updatedAt: '2023-09-19T11:15:39.016Z',
    __v: 0,
  },
  {
    _id: '650983409620a3146ef59574',
    name: 'Razer Kraken Kitty V2 Pro - Black',
    image:
      'https://assets3.razerzone.com/jYGSWcBY-3CZNv_IoOwRtoP5vuk=/500x500/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fh61%2Fh07%2F9447199014942%2Fkitty-v2-pro-black-500x500.png',
    price: 199,
    count: 1,
    desc: 'Wired RGB Headset with Interchangeable Ears',
    category: 'Headsets',
    createdAt: '2023-09-19T11:17:20.141Z',
    updatedAt: '2023-09-19T11:17:20.141Z',
    __v: 0,
  },
  {
    _id: '6509835d9620a3146ef59578',
    name: 'Razer Kraken Kitty V2 - Quartz',
    image:
      'https://assets3.razerzone.com/7Z2NGMYWXrpt3f6VS7lrB9F_t2o=/500x500/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fhcc%2Fh6b%2F9631977570334%2Fkraken-kitty-v2-quartz-500x500.png',
    price: 99,
    count: 1,
    desc: 'Wired RGB Headset with Kitty Ears',
    category: 'Headsets',
    createdAt: '2023-09-19T11:17:49.434Z',
    updatedAt: '2023-09-19T11:17:49.434Z',
    __v: 0,
  },
  {
    _id: '6509840b9620a3146ef59585',
    name: 'Razer Kitsune',
    image:
      'https://assets3.razerzone.com/Z8mmUcBwVwFPiVJLXN0mYsQTOjI=/500x500/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fh7d%2Fh57%2F9629815472158%2Fkitsune-500x500.png',
    price: 299,
    count: 1,
    desc: 'All-Button Optical Arcade Controller for PS5™ and PC',
    category: 'Console',
    createdAt: '2023-09-19T11:20:43.139Z',
    updatedAt: '2023-09-19T11:20:43.139Z',
    __v: 0,
  },
  {
    _id: '650984259620a3146ef59589',
    name: 'Razer Kitsune - SF6 Cammy Edition',
    image:
      'https://assets3.razerzone.com/18Ok8KfbmDs96qAvkDfWBs2dFZc=/500x500/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fhe8%2Fh57%2F9629815439390%2Fkitsune-cammy-500x500.png',
    price: 329,
    count: 1,
    desc: 'All-Button Optical Arcade Controller for PS5™ and PC',
    category: 'Console',
    createdAt: '2023-09-19T11:21:09.240Z',
    updatedAt: '2023-09-19T11:21:09.240Z',
    __v: 0,
  },
  {
    _id: '650984489620a3146ef5958f',
    name: 'Razer Kitsune - SF6 Chun-Li Edition',
    image:
      'https://assets3.razerzone.com/15VwGmEFlaqAz45sTNnPS6S7NZs=/500x500/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fh93%2Fh0c%2F9631289573406%2Fkitsune-chunli-500x500.png',
    price: 329,
    count: 1,
    desc: 'All-Button Optical Arcade Controller for PS5™ and PC',
    category: 'Console',
    createdAt: '2023-09-19T11:21:44.752Z',
    updatedAt: '2023-09-19T11:21:44.752Z',
    __v: 0,
  },
  {
    _id: '65644e3b1f0f95a655b51bc1',
    name: 'Razer Tartarus Pro - Mercury',
    image:
      'https://assets3.razerzone.com/TXfAH6JGINrKtFIshS_YYSNipv0=/300x300/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fh75%2Fhf2%2F9081144639518%2FTartaturs-Pro-Mercury-500x500.png',
    price: 129,
    count: 1,
    desc: 'Razer Analog Optical Switches Dual-Function Keys Adjustable actuation',
    category: 'Keyboards',
    createdAt: '2023-11-27T08:07:23.284Z',
    updatedAt: '2023-11-27T08:07:23.284Z',
    __v: 0,
  },
  {
    _id: '65644e7f1f0f95a655b51bc8',
    name: 'Razer Tartarus Pro - Black',
    image:
      'https://assets3.razerzone.com/6YYUXEtctnckmXulWeO5ibkkyL0=/300x300/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fh62%2Fh9c%2F9081145884702%2FTartaturs-Pro-Black-500x500.png',
    price: 129,
    count: 1,
    desc: 'Razer Analog Optical Switches Dual-Function Keys Adjustable actuation',
    category: 'Keyboards',
    createdAt: '2023-11-27T08:08:31.436Z',
    updatedAt: '2023-11-27T08:08:31.436Z',
    __v: 0,
  },
  {
    _id: '65686455f00b576bfcf6f403',
    name: 'ROG Zephyrus G15 (2022)',
    image:
      'https://dlcdnwebimgs.asus.com/gain/C7BA90AC-D74F-4C16-8443-3739E7772D9C/h300/w300',
    price: 1150,
    count: 1,
    desc: 'Powered by up to the latest Ryzen™ 9 6900HS CPU and up to an NVIDIA® GeForce RTX™ 3080 Laptop GPU with MUX Switch',
    category: 'Laptop',
    createdAt: '2023-11-30T10:30:45.858Z',
    updatedAt: '2023-11-30T10:30:45.858Z',
    __v: 0,
  },
  {
    _id: '65686a97f00b576bfcf6f41f',
    name: 'HP OMEN 16 2022 (R7-6800H/RTX3060)',
    image:
      'https://www.omen.com/content/dam/sites/omen/worldwide/laptops/2022-omen-16-amd/Hero%20Image%203.png',
    price: 1200,
    count: 1,
    desc: 'AMD® Ryzen™ 7-6800H (3.2 GHz – 4.7 GHz) | GeForce RTX™ 3060 NVIDIA® | 16GB DDR5 | 512GB PCIe® NVMe™ M.2 SSD',
    category: 'Laptop',
    createdAt: '2023-11-30T10:57:27.201Z',
    updatedAt: '2023-11-30T10:57:27.201Z',
    __v: 0,
  },
  {
    _id: '656871acf00b576bfcf6f43e',
    name: 'HP Victus 15 (i5-12450H/RTX3050)',
    image:
      'https://ssl-product-images.www8-hp.com/digmedialib/prodimg/lowres/c08220568.png',
    price: 700,
    count: 1,
    desc: 'Intel® Core™ i5-12450H (3.3 GHz – 4.4 GHz) | GeForce RTX™ 3050 NVIDIA® 4GB/128Bit/GDDR6 | 16GB DDR4 | 512GB PCIe® NVMe™ M.2 SSD',
    category: 'Laptop',
    createdAt: '2023-11-30T11:27:40.318Z',
    updatedAt: '2023-11-30T11:27:40.318Z',
    __v: 0,
  },
  {
    _id: '657034b0d44f33ed12f1d5e6',
    name: 'Razer Raptor 27 - 1440P - 165 Hz',
    image:
      'https://assets3.razerzone.com/jqTPU3pUADwr1fK48nAYOfFoPkM=/500x500/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fh1a%2Fh53%2F9188160569374%2Fraptor-27-165hz-500x500.png',
    price: 399,
    count: 1,
    desc: 'The Ultimate Gaming Monitor',
    category: 'Laptop',
    createdAt: '2023-12-06T08:45:36.146Z',
    updatedAt: '2023-12-06T08:45:36.146Z',
    __v: 0,
  },
  {
    _id: '6570350dd44f33ed12f1d5ea',
    name: 'Razer Raptor 27 - 144 Hz',
    image:
      'https://assets3.razerzone.com/NxlrT-J-DkXAHLiOpcEEX2A11i0=/500x500/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fh20%2Fh2d%2F9004167233566%2FRaptor-27-Base.png',
    price: 349,
    count: 1,
    desc: 'The Ultimate Gaming Monitor​',
    category: 'Laptop',
    createdAt: '2023-12-06T08:47:09.055Z',
    updatedAt: '2023-12-06T08:47:09.055Z',
    __v: 0,
  },
];

let mainRazer = document.querySelector('.main_razer')
function addHtml() {
  let html = '';
  razer.map((el) => {
    html += `
    <div class="card">
      <img src=${el.image} />
      <h1>${el.name}</h1>
      <p>${el.desc}</p>
      <b>${el.price.toLocaleString()}$</b>
    </div>
    `;
    mainRazer.innerHTML = html;
  });
}
addHtml();


function laptop() {
  let html = '';
  const Laptop = razer.filter(el => el.category === 'Laptop')
  Laptop.map((el) => {
    html += `
    <div class="card">
      <img src=${el.image} />
      <h1>${el.name}</h1>
      <p>${el.desc}</p>
      <b>${el.price.toLocaleString()}$</b>
    </div>
    `;
    mainRazer.innerHTML = html;
  });
}

function MICE() {
  let html = '';
  const MICE = razer.filter(el => el.category === 'MICE')
  MICE.map((el) => {
    html += `
    <div class="card">
      <img src=${el.image} />
      <h1>${el.name}</h1>
      <p>${el.desc}</p>
      <b>${el.price.toLocaleString()}$</b>
    </div>
    `;
    mainRazer.innerHTML = html;
  });
}
function Keyboards() {
  let html = '';
  const Keyboards = razer.filter(el => el.category === 'Keyboards')
  Keyboards.map((el) => {
    html += `
    <div class="card">
      <img src=${el.image} />
      <h1>${el.name}</h1>
      <p>${el.desc}</p>
      <b>${el.price.toLocaleString()}$</b>
    </div>
    `;
    mainRazer.innerHTML = html;
  });
}

function Headsets() {
  let html = '';
  const Headsets = razer.filter(el => el.category === 'Headsets')
  Headsets.map((el) => {
    html += `
    <div class="card">
      <img src=${el.image} />
      <h1>${el.name}</h1>
      <p>${el.desc}</p>
      <b>${el.price.toLocaleString()}$</b>
    </div>
    `;
    mainRazer.innerHTML = html;
  });
}

function Streaming() {
  let html = '';
  const Streaming= razer.filter(el => el.category === 'Streaming')
  Streaming.map((el) => {
    html += `
    <div class="card">
      <img src=${el.image} />
      <h1>${el.name}</h1>
      <p>${el.desc}</p>
      <b>${el.price.toLocaleString()}$</b>
    </div>
    `;
    mainRazer.innerHTML = html;
  });
}

function Chairs() {
  let html = '';
  const Chairs = razer.filter(el => el.category === 'Chairs')
  Chairs.map((el) => {
    html += `
    <div class="card">
      <img src=${el.image} />
      <h1>${el.name}</h1>
      <p>${el.desc}</p>
      <b>${el.price.toLocaleString()}$</b>
    </div>
    `;
    mainRazer.innerHTML = html;
  });
}

function Console() {
  let html = '';
  const Console = razer.filter(el => el.category === 'Console')
  Console.map((el) => {
    html += `
    <div class="card">
      <img src=${el.image} />
      <h1>${el.name}</h1>
      <p>${el.desc}</p>
      <b>${el.price.toLocaleString()}$</b>
    </div>
    `;
    mainRazer.innerHTML = html;
  });
}


function Mobile() {
  let html = '';
  const Mobile = razer.filter(el => el.category === 'Mobile')
  Mobile.map((el) => {
    html += `
    <div class="card">
      <img src=${el.image} />
      <h1>${el.name}</h1>
      <p>${el.desc}</p>
      <b>${el.price.toLocaleString()}$</b>
    </div>
    `;
    mainRazer.innerHTML = html;
  });
}

function Gear() {
  let html = '';
  const Gear = razer.filter(el => el.category === 'Gear')
  Gear.map((el) => {
    html += `
    <div class="card">
      <img src=${el.image} />
      <h1>${el.name}</h1>
      <p>${el.desc}</p>
      <b>${el.price.toLocaleString()}$</b>
    </div>
    `;
    mainRazer.innerHTML = html;
  });
}