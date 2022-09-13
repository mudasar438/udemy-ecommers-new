// import "./product-card.styles.scss";
import { useContext } from "react";

import Button from "../button/button.component";
import { CartContext } from "../../contexts/cart.context";

const ProductCard = ({ product }) => {
  const { addItemToCart } = useContext(CartContext);
  // console.log("props products",product)
  const { name, price, imageUrl } = product;
  const addProductToCart = () => {
    addItemToCart(product);
    console.log(product)
    alert("Product add in to Cart");
  };

  return (
    <>

      <div className=" bg-slate-100 flex justify-center items-center w-full border mt-12 rounded-md">

      <div className=" w-full border">
        
          <ul className="  w-full">
            <li className=" h-[371px]  ">
              <img
                src={imageUrl}
                alt=""
                srcSet=""
                className="block object-cover object-center w-full h-[250px] rounded-lg"
              />

              <h4 className="mt-2 ml-2 text-lg font-medium text-gray-700 dark:text-gray-200">
                {name}
              </h4>
              <div className="text-gray-700 flex justify-between"> <p className="ml-2">Price</p>  <span className="mr-5">{price}$</span> </div>
             

              <button
                onClick={addProductToCart}
                className="flex items-center justify-center w-full px-2 py-2 mt-4 font-medium tracking-wide text-gray-600 capitalize transition-colors duration-200 transform bg-yellow-400 border-2 border-yellow-400 rounded-md hover:bg-yellow-100 focus:outline-none focus:bg-gray-700"
              >
                <span className="mx-1">Add To Cart</span>
              </button>
            </li>
          </ul>
        </div>
        </div>
     

      {/* </div> */}
    </>
  );
};

export default ProductCard;
