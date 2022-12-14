import React from 'react'
import CategoryItem from '../catagery-item/category-item.component'
import './directory.styles.scss';

import {Link ,useNavigate} from 'react-router-dom'

const Directory = ({categories}) => {
  const Navigate= useNavigate()
  return (
   <>

   <div className="h-screen bg-slate-50 justify-center items-center w-full ">

      

     <div className=" grid grid-col-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mx-2  md:p-5 mb-12 ">
                {categories.map((item) => {
                  return (
                    <div className="w-full p-1  md:p-2 my-12  " key={item.id}>
                      <ul className="">
                        <li className='h-[400px] md:h-[350px] '>
                          <img
                            src={item.imageUrl}
                            alt=""
                            srcset=""
                            class="block object-cover object-center w-full h-[300px] md:h-[250px]  rounded-lg"
                          />

                          <h4 class="mt-2 text-lg font-medium text-gray-700 dark:text-gray-200">
                            {item.model}
                          </h4>
                          <p class=""> {item.title}</p>
                          {/* <p className="text-blue-500">{item.size}</p>
                          <p className="text-blue-500">{item.detail}</p> */}
                          <Link to='/shop'>
                          <button class="flex items-center justify-center w-full px-2 py-2 mt-4 font-medium tracking-wide text-gray-600 capitalize transition-colors duration-200 transform bg-yellow-400 border-2 border-yellow-400 rounded-md hover:bg-yellow-100 focus:outline-none focus:bg-gray-700">
                            <span class="mx-1">Shop Now</span>
                          </button>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  );
                })}
              </div> 

   
   </div>
   </>
  )
}

export default Directory