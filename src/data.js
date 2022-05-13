const fishData = [
    {id: 1,
    image: 'https://d2407na1z3fc0t.cloudfront.net/prodDev/pr_41jku6qp0fd/1/prod_display_image/1634557164.7757--2021-10-1817:09:24--1818',
    title: 'Seer(Vanjaram/Surmai) Small - Steaks',
    price: 219,
    weight: '350gms'
},
{id: 2,
    image: 'https://d2407na1z3fc0t.cloudfront.net/prodDev/pr_6j4jhlmxsk1/1/prod_display_image/1611136763.5723--2021-01-2015:29:23--738?format=webp',
    title: 'Rohu(Rui) Medium - Bengali Cut, No Head',
    price: 219,
    weight: '500gms'
},
{id: 3,
    image: 'https://dao54xqhg9jfa.cloudfront.net/ProductMerchantdising/9674e62a-11ef-d90f-3f4f-b1f065124a46/original/1601654396.3729--2020-10-0221_29_56--738.jpeg?format=webp',
    title: 'Catla (Theppu) Medium - Bengali Cut, No Head',
    price: 305,
    weight: '500gms'
},
{id: 4,
    image: 'https://d2407na1z3fc0t.cloudfront.net/prodDev/pr_2j9jxe8y0fy/1/prod_display_image/1621148995.0437--2021-05-1612:39:55--472?format=webp',
    title: 'Seer(Vanjaram/Surmai) Medium - Thin Steaks',
    price: 405,
    weight: '250gms'
},
{id: 5,
    image: 'https://dao54xqhg9jfa.cloudfront.net/ProductMerchantdising/88e3d5b5-577e-d773-41b7-54ad354dbc41/original/1587014153.978--2020-04-1610_45_53--738.jpeg?format=webp',
    title: 'Rohu (Rui) Small - Bengal Cut, No Head',
    price: 215,
    weight: '500gms'
},
{id: 6,
    image: 'https://dao54xqhg9jfa.cloudfront.net/ProductMerchantdising/c196cff4-7162-e967-3c69-435b524b6ebf/original/1597861324.8659--2020-08-1923_52_04--738.jpeg?format=webp',
    title: 'Roopchand (Chanduva) - Steaks',
    price: 225,
    weight: '500gms'
},
{id: 7,
    image: 'https://d2407na1z3fc0t.cloudfront.net/prodDev/pr_8izjlf6xn0k/1/prod_display_image/1636890789.8179--2021-11-1417:23:09--905?format=webp',
    title: 'Basa (Pangas) - Fillet, Platinum Grade',
    price: 335,
    weight: '450gms'
},
{id: 8,
    image: 'https://d2407na1z3fc0t.cloudfront.net/prodDev/pr_3rkjm1v51mm/1/prod_display_image/1636890938.9032--2021-11-1417:25:38--905?format=webp',
    title: 'Basa (pangas) - Boneless Cubes',
    price: 345,
    weight: '400gms'
},
{id: 9,
    image: 'https://d2407na1z3fc0t.cloudfront.net/prodDev/pr_mnhkb7pq1cb/1/prod_display_image/1631107537.1677--2021-09-0818:55:37--1818?format=webp',
    title: 'White Sardine/Silver Fish - Whole Uncleaned',
    price: 99,
    weight: '250gms'
}
];

const prawnsData = [
    {id: 1,
    image: 'https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/66e96bfe-5abc-2cd8-18a7-01a9eceb2bfa/original/WhatsApp_Image_2022-04-13_at_2.16.31_PM.jpeg?format=webp',
    title: 'Freshwater Prawns 40C - 60C - Cleaned & Deveined, No Tail',
    price: 355,
    weight: '250gms'
},
{id: 2,
    image: 'https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/7f4bdc51-123a-4854-075c-0762953faa4c/original/unnamed.jpg?format=webp',
    title: 'Freshwater Prawns Trial Pack- 10Pcs',
    price: 199,
    weight: '10 Pcs'
},
{id: 3,
    image: 'https://d2407na1z3fc0t.cloudfront.net/prodDev/pr_gi9kauyla8l/1/prod_display_image/1623211757.2848--2021-06-0909:39:17--738?format=webp',
    title: 'Freshwater prawns 80Count/Kg (Jhinga/Seegadi) - No Tail',
    price: 305,
    weight: '250gms'
},
{id: 4,
    image: 'https://d2407na1z3fc0t.cloudfront.net/prodDev/pr_8umkrer7r4w/1/prod_display_image/1636637640.0469--2021-11-1119:04:00--1818',
    title: 'Sea White Prawns 20 - 40C Cleaned & Deveined No Tail',
    price: 515,
    weight: '250gms'
},
{id: 5,
    image: 'https://d2407na1z3fc0t.cloudfront.net/prodDev/pr_nsckuccfuji/1/prod_display_image/1633863323.1243--2021-10-1016:25:23--1818',
    title: 'Sea White PRawns 70C-110C Trial Pack',
    price: 249,
    weight: '150gms'
},
{id: 6,
    image: 'https://d2407na1z3fc0t.cloudfront.net/prodDev/pr_123kq19agfk/1/prod_display_image/1632811803.1135--2021-09-2812:20:03--1818',
    title: 'Flower Shrimp 30C-50C (Chemmeen), No Tail',
    price: 489,
    weight: '250gms'
},
{id: 7,
    image: 'https://dao54xqhg9jfa.cloudfront.net/ProductMerchantdising/62f423ab-4e95-ae02-a882-923ff0d71424/original/1596357822.7689--2020-08-0214_13_42--738.jpeg?format=webp',
    title: 'Scampi(Giant Prawns/Jhinga/Seagadi) - Whole',
    price: 600,
    weight: '500gms'
},
{id: 8,
    image: 'https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/5af4ae39-7629-bc5f-65cc-78e1239147c5/original/1624645711.jpg?format=webp',
    title: 'Tiger Prawns 16Count - 20Count/Kg (Jhinga/Seegadi) - Cleaned and Deveined with Tail',
    price: 649,
    weight: '250gms'
},
{id: 9,
    image: 'https://dao54xqhg9jfa.cloudfront.net/ProductMerchantdising/4f003ba8-d470-247b-435d-422a1a57f984/original/1591960259.2414--2020-06-1216_40_59--738.jpeg?format=webp',
    title: 'Freshwater Large Prawns 30Count/Kg, No Tail',
    price: 645,
    weight: '250gms'
}
];

const exoticData = [
    {id: 1,
    image: 'https://d2407na1z3fc0t.cloudfront.net/prodDev/pr_blnkrc0nbpz/1/prod_display_image/1634029214.8223--2021-10-1214:30:14--1818',
    title: 'Butterfish(Pabda/Konade)- Whole Cleaned & Gutted With Head',
    price: 289,
    weight: '300gms'
},
{id: 2,
    image: 'https://d2407na1z3fc0t.cloudfront.net/prodDev/pr_6j4jhm2hcmk/1/prod_display_image/1634364694.0119--2021-10-1611:41:34--905?format=webp',
    title: 'Kajoli - Whole & Cleaned, No Tail',
    price: 289,
    weight: '250gms'
},
{id: 3,
    image: 'https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/b11c2aa6-1e10-1494-e9d8-9ecc08a2f058/original/Blue-Crab-medium.jpg?format=webp',
    title: 'Blue Crab(Nandu/Aedi) Medium - Whole, Cleaned',
    price: 699,
    weight: '500gms'
},
{id: 4,
    image: 'https://d2407na1z3fc0t.cloudfront.net/prodDev/pr_m95jp42ceta/1/prod_display_image/1634297042.4732--2021-10-1516:54:02--905?format=webp',
    title: 'White Pomfret (paplet/Avoli) - Whole, Cleaned',
    price: 849,
    weight: '450gms'
},
{id: 5,
    image: 'https://dao54xqhg9jfa.cloudfront.net/ProductMerchantdising/9c060515-15e9-9f3e-0ac5-dd96c2d4cb5b/original/1602089556.0754--2020-10-0722_22_36--738.jpeg?format=webp',
    title: 'Pink Perch(Kendai/Madumagala) Small Whole',
    price: 225,
    weight: '300gms'
},
{id: 6,
    image: 'https://d2407na1z3fc0t.cloudfront.net/prodDev/pr_faakezayo2x/1/prod_display_image/1605775908.287--2020-11-1914:21:48--738?format=webp',
    title: 'Pearl Spot (Karimean/Pattai) Small- Whole',
    price:325,
    weight: '300gms'
},
{id: 7,
    image: 'https://d2407na1z3fc0t.cloudfront.net/prodDev/pr_3iuknh949ue/1/prod_display_image/1621737427.7212--2021-05-2308:07:07--738',
    title: 'Singhi - Whole, CLeaned',
    price: 589,
    weight: '450gms'
},
{id: 8,
    image: 'https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/33c25153-76c3-810d-b20b-1ed81f5cfcd8/original/Bombay-Duck-small.jpeg?format=webp',
    title: 'Bombay Duck (Bombil) Small- Whole, Cleaned',
    price: 125,
    weight: '200gms'
},
{id: 9,
    image: 'https://d2407na1z3fc0t.cloudfront.net/prodDev/pr_hlckrer5g11/1/prod_display_image/1627366736.0131--2021-07-2711:48:56--738',
    title: 'Silver Belly(Kara) Medium Whole, Cleaned With Head',
    price: 119,
    weight: '250gms'
}
];

export {fishData, prawnsData, exoticData};