// import { Rating } from 'flowbite-react';
import React, { useState } from 'react';
import { FaHeart } from "react-icons/fa";
// import Rating from 'react-rating';
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css';
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const Recipe = ({ recipe }) => {
    const [disable, setDisable] = useState(false);
    // console.log(recipe);
    const { name, description, r_img, ingredients, cooking_method, rating } = recipe;

    // handle toast and disable favourite button

    const handleDisable = () => {
        toast.success('Item Added!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
        setDisable(true);
    }


    return (
        <>

            <a href="#" className=" p-5 bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                <div className='flex flex-col items-center'>
                    <LazyLoadImage effect='blur' className="object-cover w-full rounded-lg h-96 " src={r_img} alt="" />
                    <div className="flex flex-col justify-between p-4 leading-normal">
                        <div className='flex justify-between'>
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{name}</h5>

                        </div>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{description}</p>
                    </div>
                </div>
                <div className='px-4'>
                    <h3 className='text-xl font-semibold'>Ingredients:</h3>
                    {
                        ingredients.map((i, index) => (<li key={index}>{i}</li>))
                    }
                </div>
                <div className='px-4 mt-4'>
                    <h3 className='text-xl font-semibold text-center underline mb-3'>Cooking Method</h3>
                    {
                        cooking_method.map((i, index) => (<li key={index}>{i}</li>))
                    }
                </div>
                <div className='p-4 flex justify-between'>
                    <div className='flex items-center'>
                        <Rating style={{ maxWidth: 150 }} value={rating} readOnly></Rating>
                        <span className='ms-2'> {rating}</span>
                    </div>
                    <div>
                        <button onClick={handleDisable} disabled={disable}>{
                            disable ? <FaHeart className='text-slate-400 text-2xl' /> : <FaHeart className='text-red-600 text-2xl' />
                        }
                        </button>
                        <ToastContainer
                            position="top-right"
                            autoClose={5000}
                            hideProgressBar={false}
                            newestOnTop={false}
                            closeOnClick
                            rtl={false}
                            pauseOnFocusLoss
                            draggable
                            pauseOnHover
                            theme="light"
                        />
                        {/* Same as */}
                        <ToastContainer />
                    </div>
                </div>
            </a>

        </>
    );
};

export default Recipe;