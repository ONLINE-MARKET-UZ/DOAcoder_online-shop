import React,{useEffect, useState} from 'react';
import FullCard from './../UI/Cards/FullCard';
import API from "../../Server/api";




const index = () => {

  const [product, setProduct]=useState([]);






 function getProducts() {
   API
     .getProduct()
     .then((response) => {
       if (response.status === 200) {
         setProduct(response.data);
       }
     })
     .catch((err) => {
       console.log(err.message);
     });
 }


  useEffect(() => {
    getProducts();
    
  }, []);






  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <h2 className=' text-[24px] font-semibold leading-[32px] tracking-[-0.2px] mb-[33px]'>Recommended items</h2>
          <ul className='flex flex-wrap items-center gap-[20px]'>
            {
              product.length && product.map((el)=>{
                return(
                   <FullCard state={el} /> 
                )
              })
            }

           
          </ul>
        </div>
      </div>
    </section>
  );
};

export default index;