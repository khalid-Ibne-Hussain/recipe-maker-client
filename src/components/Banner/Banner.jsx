import React from 'react';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div className="w-full max-w-screen-xl flex flex-wrap items-center justify-between mx-auto px-4 ">
            <div>
                <section className="object-cover rounded-md w-full bg-center bg-no-repeat bg-[url('https://i0.wp.com/www.onceuponachef.com/images/2019/11/jennifer-segal-homepage-photo-2019.jpg?resize=1200%2C572&ssl=1')] bg-gray-600 bg-blend-multiply">
                    <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-48">
                        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-5xl">Bangladeshi Most Popular Chefs and Their Recipes.</h1>
                        <p className="mb-8 text-lg font-normal text-gray-100 lg:text-xl sm:px-16 lg:px-48">Chefs are like artists who use their creativity to transform ingredients into works of art that not only nourish the body but also delight the senses.</p>
                        <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
                            <Link to="/about" className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
                                Learn More
                                <svg aria-hidden="true" className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                            </Link>
                            {/* <a href="#" className="inline-flex justify-center hover:text-gray-900 items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg border border-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-400">
                                Learn more
                            </a> */}
                        </div>
                    </div>
                </section>

            </div>
        </div>
    );
};

export default Banner;