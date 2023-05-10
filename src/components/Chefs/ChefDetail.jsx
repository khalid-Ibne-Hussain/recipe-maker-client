import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { FaThumbsUp } from "react-icons/fa";
import Recipe from './Recipe';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const ChefDetail = () => {

    const chefDetail = useLoaderData();
    let { chefId } = useParams();
    // console.log(chefDetail);
    // console.log(chefId);

    const chef_Info = chefDetail.find(chefInfo => chefInfo.id == chefId);
    // console.log(chef_Info);
    const { chef_name, chef_bio, chef_picture, likes, num_recipes, recipes, years_of_experience } = chef_Info;

    return (
        <div className='max-w-screen-xl  justify-between mx-auto mb-8 '>
            <header className='bg-slate-100 flex flex-col items-center justify-around md:flex-row p-4 gap-5 '>
                <img className="rounded-lg  h-72 object-cover  w-72" src={chef_picture} alt="" />
                <div className=''>
                    <h3 className='font-bold text-2xl mb-2'>{chef_name}</h3>
                    <p>{chef_bio}</p>
                    <div className='flex items-center justify-between'>
                        <p>Experience: <button className='bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-green-400 border border-green-400 my-4'>{years_of_experience}</button>years.</p>
                        <p className='flex gap-2 items-center justify-between'>
                            <FaThumbsUp />
                            <button className='bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-green-400 border border-green-400 my-4'>{likes}</button> </p>
                    </div>
                    <div className='mb-2'>
                        <p>Number of Recipes: <button className=''>{num_recipes}</button></p>
                    </div>
                </div>
            </header>
            <h2 className='text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white mt-14 mb-6'>{chef_name}'s Recipes</h2>
            <div className='grid  justify-center gap-5'>
                {
                    recipes.map(recipe => (<Recipe key={recipe.r_id} recipe={recipe}></Recipe>))
                }
            </div>
        </div>
    );
};

export default ChefDetail;