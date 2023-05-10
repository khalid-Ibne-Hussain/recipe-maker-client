import React from 'react';
import { FaThumbsUp } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';



const SingleChef = ({ chef }) => {
    console.log(chef);
    const { chef_picture, chef_name, chef_bio, likes, num_recipes, years_of_experience } = chef;
    return (
        <div className=''>

            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                {/* <a href="#">
                    <img className="rounded-t-lg  h-72 object-fill  w-full" src={chef_picture} alt="" />
                </a> */}

                <div>
                    <LazyLoadImage effect='blur' className="rounded-t-lg  h-72  object-fill w-full" src={chef_picture} alt="" />
                </div>

                <div className="p-5">
                    <a href="#">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{chef_name}</h5>
                    </a>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{chef_bio.slice(0, 100)}...</p>
                    <div className='flex items-center justify-between'>
                        <p>Experience: <button className='bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-green-400 border border-green-400 my-4'>{years_of_experience}</button>years.</p>
                        <p className='flex gap-2 items-center justify-between'>
                            <FaThumbsUp />
                            <button className='bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-green-400 border border-green-400 my-4'>{likes}</button> </p>
                    </div>
                    <div className='mb-2'>
                        <p>Number of Recipes: <button className=''>{num_recipes}</button></p>
                    </div>
                    <Link to={`/chef/${chef.id}`} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        View Recipes
                        <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                    </Link>
                </div>
            </div>

        </div>
    );
};

export default SingleChef;