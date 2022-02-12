export const products = [  
    {
        id : 1,
        name : 'Auriculares',
        stock: 10,
        price: 6500,
        img: " https://res.cloudinary.com/dqbu1gefv/image/upload/v1644697400/ath-anc700btbk_01_skdngx.png",
        category: 'Headphone',
    },
    {
        id : 2,
        name : 'Mouse',
        stock: 5,
        price: 1750,
        img: "https://res.cloudinary.com/dqbu1gefv/image/upload/v1644697451/m607-1-11-8151d583dfb13328b415936980307637-640-0_dtxide.png",
        category: 'Mouse',
        
    },
    {
        id : 3,
        name : 'Teclado',
        stock: 7,
        price: 5600,
        img: "https://res.cloudinary.com/dqbu1gefv/image/upload/v1644697514/rnnm-1_goxw19.png",
        category: 'Keyboard',
    },
];
console.log(products);

export const traerProductos = new Promise ((resolve, reject)=>{
    setTimeout(()=>{
        resolve(products);
    },2000);
});

 
