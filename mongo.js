const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://tsittidet:thereallalune@findfigdb.4gxdoii.mongodb.net/')
.then(()=>{
    console.log('mongodb connected');
})
.catch(()=>{
    console.log('error');
})


const FigureSchema = new mongoose.Schema({
    product_code: String,
    name: String,
    price: Number,
    description: String,
    barcode: Number,
    category: [String],
    tags: [String],
    stock: Number,
    release_by: String,
    brand: String,
    series: String,
    copyright: [String],
    manufacturer: String,
    Specifications: [{
        scale: String,
        product_size: String,
        weight: String,
        material: String,
    }],
    preowned_grade: [{
        item: String,
        box: String,
    }],
    imgs: [String]
})

const collection = new mongoose.model('FigureData',FigureSchema)

figuredata=[{
    name: 'ELDEN RING: FIGUARTS MINI RAGING WOLF',
    price: 1270,
    description: 'Your favorite characters, stylized and squashed down to adorable palm-sized proportions with lifelike eyes and simple possibility. Raging Wolf from the smash hit game "ELDEN RING" joins Figuarts mini!',
    barcode: 4573102618917,
    category: ['game','Elden Ring'],
    tags: ['game','Elden Ring','Stand','TAMASHII','wolf'],
    stock: 3,
    release_by: 'ELDEN RING',
    brand: 'TAMASHII NATIONS',
    series: 'Elden Ring',
    copyright: ['Elden Ring TM','(C)Bandai Namco Entertainment Inc.','(C)2022 FromSoftware Inc.'],
    manufacturer: 'Bandai',
    Specifications: [{
        product_size: '8.9 cm in height',
        weight: '0.35 kg',
        material: 'PVC and ABS',
    }],
    preowned_grade: [{
        item: 'A',
        box: 'A',
    }],
    imgs: ['https://www.ffcollectibles.com.au/cdn/shop/products/FIGUARTSMINIRAGINGWOLF_1.jpg?v=1673515141',
  'https://www.ffcollectibles.com.au/cdn/shop/products/FIGUARTSMINIRAGINGWOLF_2.jpg?v=1673515140',
  'https://www.ffcollectibles.com.au/cdn/shop/products/FIGUARTSMINIRAGINGWOLF_3.jpg?v=1673515141',
  'https://www.ffcollectibles.com.au/cdn/shop/products/FIGUARTSMINIRAGINGWOLF_4.jpg?v=1673515142']
  
},
{ 
    name: 'ELDEN RING: FIGUARTS MINI MELINA',
    price: 1200,
    description: 'Your favorite characters, stylized and squashed down to adorable palm-sized proportions with lifelike eyes and simple possibility. Melina from the smash hit game "ELDEN RING" joins Figuarts mini!',
    barcode: 4573102618924,
    category: ['game','Elden Ring'],
    tags: ['game','Elden Ring','Stand','TAMASHII','Malenia'],
    stock: 5,
    release_by: 'ELDEN RING',
    brand: 'TAMASHII NATIONS',
    series: 'Elden Ring',
    copyright: ['Elden Ring TM','(C)Bandai Namco Entertainment Inc.','(C)2022 FromSoftware Inc.'],
    manufacturer: 'Bandai',
    Specifications: [{
        product_size: '8.9 cm in height',
        weight: '0.35 kg',
        material: 'PVC and ABS',
    }],
    preowned_grade: [{
        item: 'A',
        box: 'B',
    }],
    imgs: ['https://www.ffcollectibles.com.au/cdn/shop/products/FIGUARTSMINIMELINA_1.jpg?v=1673515372',
    'https://www.ffcollectibles.com.au/cdn/shop/products/FIGUARTSMINIMELINA_2.jpg?v=1673515372',
    'https://www.ffcollectibles.com.au/cdn/shop/products/FIGUARTSMINIMELINA_3.jpg?v=1673515373',
    'https://www.ffcollectibles.com.au/cdn/shop/products/FIGUARTSMINIMELINA_4.jpg?v=1673515372']},
{
    name: 'ELDEN RING: DRACONIC TREE SENTINEL AND THE TARNISHED',
    price: 10000,
    description: 'This is a MUST OWN statue for ANY lover or fan of the Draconic Tree Sentinel, The Tarnished and Elden Ring!',
    barcode: 4573102618926,
    category: ['game','Elden Ring'],
    tags: ['game','Elden Ring','Stand','TAMASHII'],
    stock: 3,
    release_by: 'ELDEN RING',
    brand: 'SWORD & WING STUDIO',
    series: 'Elden Ring',
    copyright: ['Elden Ring TM','(C)Bandai Namco Entertainment Inc.','(C)2022 FromSoftware Inc.'],
    manufacturer: 'Bandai',
    Specifications: [{
        product_size: '74 cm in height',
        weight: 'To be announced',
        material: 'Polyresin and PU',
    }],
    preowned_grade: [{
        item: 'B',
        box: 'B',
    }],
    imgs: ['https://www.ffcollectibles.com.au/cdn/shop/files/SWORD_WINGSTUDIO_ELDENRINGDRACONICTREESENTINELANDTHETARNISHED_2.jpg?v=1682860724',
    'https://www.ffcollectibles.com.au/cdn/shop/files/SWORD_WINGSTUDIO_ELDENRINGDRACONICTREESENTINELANDTHETARNISHED_1.jpg?v=1682860723&width=493',
    'https://www.ffcollectibles.com.au/cdn/shop/files/SWORD_WINGSTUDIO_ELDENRINGDRACONICTREESENTINELANDTHETARNISHED_10.jpg?v=1682860723&width=493',
    'https://www.ffcollectibles.com.au/cdn/shop/files/SWORD_WINGSTUDIO_ELDENRINGDRACONICTREESENTINELANDTHETARNISHED_3.jpg?v=1682860725&width=493']},
{
    name: 'TOM NOOK AMIIBO',
    price: 500,
    description: 'Introducing amiibo: character figures designed to connect and interact with compatible games.',
    barcode: 45496892609,
    category: ['game','ACNH'],
    tags: ['game','acnh','animal crossing','amiibo'],
    stock: 2,
    release_by: 'Nintendo',
    brand: 'Nintendo',
    series: 'Animal crossing',
    copyright: ['Nintendo'],
    manufacturer: 'Nintendo',
    Specifications: [{
        product_size: '5 cm in height',
        weight: '3.52 ounces',
        material: 'Polyresin and PU',
    }],
    preowned_grade: [{
        item: 'A',
        box: 'A',
    }],
    imgs: ['https://m.media-amazon.com/images/I/61bx5ZEWPeL._SX342_.jpg',
    'https://m.media-amazon.com/images/I/61bx5ZEWPeL._SX342_.jpg',
    'https://m.media-amazon.com/images/I/61bx5ZEWPeL._SX342_.jpg',
    'https://m.media-amazon.com/images/I/61bx5ZEWPeL._SX342_.jpg']},
{
    name: 'ISABELLE AMIIBO',
    price: 550,
    description: 'Introducing amiibo: character figures designed to connect and interact with compatible games.',
    barcode: 145496353407,
    category: ['game','ACNH'],
    tags: ['game','acnh','animal crossing','amiibo'],
    stock: 3,
    release_by: 'Nintendo',
    brand: 'Nintendo',
    series: 'Animal crossing',
    copyright: ['Nintendo'],
    manufacturer: 'Nintendo',
    Specifications: [{
        product_size: '5 cm in height',
        weight: '3.52 ounces',
        material: 'Polyresin and PU',
    }],
    preowned_grade: [{
        item: 'A',
        box: 'A',
    }],
    imgs: ['https://assets.nintendo.eu/image/upload/f_auto,c_limit,w_1920,q_75/t_product_tile_mobile/MNS/NOE/000000000001079566/1.1_ProductTile_amiibo_Isabelle-Winter-Outfit_AnimalCrossingCollection_BeautyShot_NOE']
},
{
    name: 'TIMMY & TOMMY AMIIBO',
    price: 50,
    description: 'Introducing amiibo: character figures designed to connect and interact with compatible games.',
    barcode: 145496353409,
    category: ['game','ACNH'],
    tags: ['game','acnh','animal crossing','amiibo'],
    stock: 2,
    release_by: 'Nintendo',
    brand: 'Nintendo',
    series: 'Animal crossing',
    copyright: ['Nintendo'],
    manufacturer: 'Nintendo',
    Specifications: [{
        product_size: '5 cm in height',
        weight: '3.52 ounces',
        material: 'Polyresin and PU',
    }],
    preowned_grade: [{
        item: 'A',
        box: 'A',
    }],
    imgs: ['https://assets.nintendo.eu/image/upload/f_auto,c_limit,w_1920,q_75/t_product_tile_mobile/MNS/NOE/000000000002000566/1.1_ProductTile_amiibo_TimmyTommy_AnimalCrossingCollection_BeautyShot_NOE']
},
{
    name: 'HUGGY GOOD SMILE LOID FORGER',
    price: 600,
    description: 'From the anime series "SPY x FAMILY" comes Huggy figures of Loid Forger, Anya Forger, Yor Forger, Damian Desmond and Becky Blackbell!',
    barcode: 4580590177468,
    category: ['anime','SPY x FAMILY','Chibi'],
    tags: ['anime','spyxfam','Loid Forger'],
    stock: 3,
    release_by: 'Good Smile Arts Shanghai',
    brand: 'Good Smile Arts Shanghai',
    series: 'SPY x FAMILY',
    copyright: ['Tatsuya Endo/Shueisha', 'SPY x FAMILY Project'],
    manufacturer: 'Good Smile Arts Shanghai',
    Specifications: [{
        product_size: '65 mm in height',
        weight: '0.1 kg',
        material: 'Plastic, Magnets',
    }],
    preowned_grade: [{
        item: 'A',
        box: 'B',
    }],
    imgs: ['https://goodsmileeurope.com/cdn/shop/files/4580590177468_HuggyGoodSmileLoidForger_1.jpg?v=1698719525&width=400',
'https://goodsmileeurope.com/cdn/shop/files/4580590177468_HuggyGoodSmileLoidForger_2.jpg?v=1698719525&width=776',
'https://goodsmileeurope.com/cdn/shop/files/4580590177468_HuggyGoodSmileLoidForger_3.jpg?v=1698719525&width=776',
'https://goodsmileeurope.com/cdn/shop/files/4580590177468_HuggyGoodSmileLoidForger_4.jpg?v=1698719526&width=776']
},
{
    name: 'NENDOROID ANYA FORGER: WINTER CLOTHES',
    price: 1200,
    description: 'From the anime series "SPY x FAMILY" comes a new Nendoroid of Anya Forger wearing her winter clothes! ',
    barcode: 4983164884623,
    category: ['anime','SPY x FAMILY','Nendoroid'],
    tags: ['anime','spyxfam','Anya Forger','stand'],
    stock: 3,
    release_by: 'Good Smile Arts Shanghai',
    brand: 'Good Smile Arts Shanghai',
    series: 'SPY x FAMILY',
    copyright: ['遠藤達哉 集英社・SPYxFAMILY製作委員会'],
    manufacturer: 'Good Smile Arts Shanghai',
    Specifications: [{
        product_size: '100 mm in height',
        weight: '0.15 kg',
        material: 'Plastic',
    }],
    preowned_grade: [{
        item: 'A',
        box: 'C',
    }],
    imgs: ['https://images.goodsmile.info/cgm/images/product/20220609/12801/99713/large/a2c690c2d8ec02179247baea1eb59dc5.jpg',
'https://images.goodsmile.info/cgm/images/product/20220609/12801/99714/large/9eabea585f199f66bf11a3ebb0e89bd3.jpg',
'https://images.goodsmile.info/cgm/images/product/20220609/12801/99715/large/14906e390b8dcbb24ae7c29b547d0365.jpg',
'https://images.goodsmile.info/cgm/images/product/20220609/12801/99716/large/d915ba651747241a1786db5ff0020e8a.jpg']
},
{
    name: 'SPYXFAMILY FLUFFY PUFFY - BOND FORGER (VER.A)',
    price: 1300,
    description: 'From the anime series "SPY x FAMILY" comes a new Nendoroid of Anya Forger wearing her winter clothes! ',
    barcode: 4983164884685,
    category: ['anime','SPY x FAMILY'],
    tags: ['anime','spyxfam','Bond Forger'],
    stock: 3,
    release_by: 'Banpresto',
    brand: 'Banpresto',
    series: 'SPY x FAMILY',
    copyright: ['遠藤達哉 集英社・SPYxFAMILY製作委員会'],
    manufacturer: 'Banpresto',
    Specifications: [{
        product_size: '7 cm in height',
        weight: '0.2 kg',
        material: 'Plastic',
    }],
    preowned_grade: [{
        item: 'A',
        box: 'A',
    }],
    imgs: ['https://www.kaika.com.au/assets/full/BAP03400.jpg?20231025144612',
'https://www.kaika.com.au/assets/alt_2_thumb/BAP03400.jpg?20230509210924',
'https://www.kaika.com.au/assets/alt_3_thumb/BAP03400.jpg?20230509210925',
'https://www.kaika.com.au/assets/alt_1_thumb/BAP03400.jpg?20231025144612']
}
]
collection.insertMany(figuredata)
