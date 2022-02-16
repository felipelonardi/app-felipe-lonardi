import Item from "../Item/Item"
import './ItemDetail.css'
import FunctionCounter from "../Counter/counter";

const ItemDetail = (product) =>{

    return(
        <div className="Item-list">
            <div className='rotate-scale-up'>
                <div className="foto-producto">
                    <h1>Air Max</h1>
                    <img src="https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/w_600,c_limit/f8e46b1e-9c32-4740-8688-64f00432920f/nike-snkrs-calendario-de-fechas-de-lanzamientos.jpg" />
                    <h2 className='product-price'>$23900</h2>
                    <p className="parrafo-descripcion">Descripción: <br></br>
                    Podríamos utilizar muchos adjetivos para describir la Nike Air Max 2021. Podríamos decir que hemos incorporado materiales reciclados para crear una zapatilla con al menos un 20% de contenido reciclado. O que la nueva unidad de aire bajo los pies es la mas revolucionaria que tenemos.
                    </p>
                    <FunctionCounter />
             </div>
            </div> 
        </div>   
    )
    
    
    }
    
    
    export default ItemDetail;