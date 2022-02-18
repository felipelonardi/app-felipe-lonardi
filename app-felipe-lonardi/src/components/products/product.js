export const products = [  
    {
        id : 1,
        name : 'Nike Sb Dunk Low',
        stock: 10,
        price: 17500,
        img: " https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/w_600,c_limit/6a00eff0-8215-423a-b071-38d1bb050653/nike-snkrs-calendario-de-fechas-de-lanzamientos.jpg",
        category: 'Sb',
        description :  'Antes de aparecer en el mundo del skate, el Dunk era activo como una zapatilla de basquet de alto rendimiento. Con su excelente durabilidad y excelente contacto con el suelo, la reputación de los patinadores ha aumentado gradualmente. Para satisfacer las necesidades de una nueva base de fans, Dunk renovó su silueta en 2002. Hemos realizado mejoras para los patinadores, como la introducción de una bolsa Zoom Air en la plantilla. En la última edición, utilizando materiales reciclados, perseguimos el valor sostenible mientras heredamos fielmente la tradición. Minimice el desperdicio y mire hacia el futuro de las zapatillas de skate.'
    },
    {
        id : 2,
        name : 'Air Jordan 1',
        stock: 5,
        price: 23500,
        img: "https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/w_600,c_limit/07898c4c-845f-4d47-ab71-7f8a3ccb4906/nike-snkrs-calendario-de-fechas-de-lanzamientos.jpg",
        category: 'Jordan',
        description :  'El Air Jordan 1 es una de las zapatillas más vendidas de Nike en relación con la practica del baloncesto, desde sus orígenes siempre ha destacado por su gran versatilidad sobre la pista de basket. Adaptándose a diversos estilos de juegos y deslumbrando por su calidad.'

    },
    {
        id : 3,
        name : 'Air Force 1',
        stock: 7,
        price: 22900,
        img: "https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/w_600,c_limit/17e9f8d8-10ca-4eb7-a9df-787698396ae9/nike-snkrs-calendario-de-fechas-de-lanzamientos.jpg",
        category: 'Airforce',
        description :  'Las Air Force 1, lanzado al mercado en 1982, es un producto de Nike Inc. Fue creado por el diseñador Bruce Kilgore, fue el primer calzado deportivo de Baloncesto lanzado por Nike que usa la Nike Air. En septiembre de 2018 hizo su último lanzamiento.'


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
