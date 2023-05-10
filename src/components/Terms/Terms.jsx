import React from 'react';
import { Link } from 'react-router-dom';

const Terms = () => {
    return (
        <div className='max-w-screen-xl justify-between mx-auto mb-8'>
            <div className="bg-gray-100 rounded-lg p-4 my-4">
                <h2 className="text-lg font-bold mb-2">Terms and Conditions</h2>
                <ul className="list-disc ml-4 mb-4">
                    <li className="mb-2">All info collected from internet.</li>
                    <li className="mb-2">Don't share your credit card information.</li>
                    <li className="mb-2">Terms & condition are changeable by the RecipeMaker authority.</li>
                    <li className="mb-2">We reserve the right to refuse service to anyone.</li>
                    <li className="mb-2">The use of this product is at your own risk.</li>
                </ul>
                <p className="text-sm text-gray-500">
                    By using this website, you agree to our Terms and Conditions. If you do not agree to these terms, please do not use this website.
                </p>
                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                    Back to <Link to="/register" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Register page</Link>
                </p>

            </div>

        </div>
    );
};

export default Terms;