export const products = [  
    {
        id : 1,
        name : 'Nike Sb Dunk Low',
        stock: 10,
        price: 17500,
        img: " https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/w_600,c_limit/6a00eff0-8215-423a-b071-38d1bb050653/nike-snkrs-calendario-de-fechas-de-lanzamientos.jpg",
        category: 'Sb',
    },
    {
        id : 2,
        name : 'Air Jordan 1',
        stock: 5,
        price: 23500,
        img: "https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/w_600,c_limit/07898c4c-845f-4d47-ab71-7f8a3ccb4906/nike-snkrs-calendario-de-fechas-de-lanzamientos.jpg",
        category: 'Jordan',
        
    },
    {
        id : 3,
        name : 'Air Force 1',
        stock: 7,
        price: 22900,
        img: "https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/w_600,c_limit/17e9f8d8-10ca-4eb7-a9df-787698396ae9/nike-snkrs-calendario-de-fechas-de-lanzamientos.jpg",
        category: 'Airforce',
    },
    
];
console.log(products);

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 1000)
    })
}

export const getProduct = (id) => {
    return new Promise((resolve) => {
        const prod = products.find(p => p.id === parseInt(id))
        setTimeout(() => {
            resolve(prod)
        }, 1000)
    })
}
