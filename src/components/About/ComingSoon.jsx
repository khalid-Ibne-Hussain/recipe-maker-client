import React from 'react';
import { Link } from 'react-router-dom';

const ComingSoon = () => {
    return (
        <div>
            <div className="bg-white h-screen">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center h-full">
                    <div className="text-center">
                        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                            Recipe & Cooking method
                        </h2>
                        <p className="mt-8 text-xl text-gray-600">
                            Coming Soon!
                        </p>
                        <div className="mt-6">
                            <Link to="/"> <button type="button" className="mt-10 text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Go Back to Home page</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ComingSoon;