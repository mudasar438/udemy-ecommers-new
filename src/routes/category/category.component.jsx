
import './category.styles.scss';
import { useParams } from 'react-router-dom';
import { useContext ,useState,useEffect} from 'react';
import { CategoriesContext } from '../../contexts/categories.context';

import React from 'react'
import ProductCard from '../../component/product-card/product-card.component';

 const Category = () => {
    const {category} = useParams()

    // console.log('useParam',category)
    const {categoriesMap}= useContext(CategoriesContext)
    // console.log("hats data",categoriesMap[category])

    const [products, setProducts] = useState(categoriesMap[category]);

    useEffect(()=>{
setProducts(categoriesMap[category])
    },[category,categoriesMap])

  // console.log("product data ", products)



  return (
    <>
    <h2 className='category-title'>{category.toUpperCase()}</h2>
    <div className='grid grid-cols-4 gap-8'>
      {products &&
        products.map((product) => (
            <div>

            {console.log("map hat product",product)}
            <ProductCard key={product.id} product={product} />
            </div>
            ))}
    </div>
            </>
  )
}

export default Category
