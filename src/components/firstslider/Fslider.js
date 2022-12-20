import React, { useState, useEffect } from 'react';
import { Carousel } from 'primereact/carousel';
import { Button } from 'primereact/button';
import { ProductService } from './ProductService';
import './CarouselDemo.css';
import mainLogo from'./xboxadvise.png';


function Fslider() {

    const [products, setProducts] = useState([]);
    const responsiveOptions = [
        {
            breakpoint: '1024px',
            numVisible: 7,
            numScroll: 3
        },
        {
            breakpoint: '600px',
            numVisible: 2,
            numScroll: 2
        },
        {
            breakpoint: '480px',
            numVisible: 1,
            numScroll: 1
        },
        {
            breakpoint: '600px',
            numVisible: 2,
            numScroll: 2
        },
    ];

    const productService = new ProductService();

    useEffect(() => {
        dataSlider()
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const dataSlider= async()=>{
        const data = productService.getProductsSmall().data 
        console.log("11111111",data);
        setProducts(data.slice(0,3));
    }

    const productTemplate = (product) => {
        return (
            <div style={{direction: 'ltr' , }} className="product-item p-0">
                <div className="product-item-content p-0 m-0 b-0">
                    <div className="mb-0">
                        <img style={{width:'100%',height:'420px'}} src={product.image} onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} alt={product.name}  />
                    </div>

                </div>
            </div>
        );
    }

  return (
    <div  style={{direction: "ltr",position:"relative", top: "100px"}} className="card carousel-demo">
        <div style={{paddingLeft: "16%"}} className="w-10">
            <Carousel className= 'h-45rem' value={products} numVisible={1} numScroll={1} responsiveOptions={responsiveOptions}
                itemTemplate={productTemplate} header={""} />
        </div>
    </div>
  );
}

export default Fslider;