import React from 'react';

const About = () => {
    return (
        <div >
            <div className="bg-white py-8">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="lg:text-center">
                        <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                            Our Story
                        </p>
                    </div>

                    <div className="mt-10 shadow-lg p-10">
                        <p className="text-xl text-gray-500">
                            Welcome to our recipe website! We're passionate about sharing our love of cooking and baking with others. Our mission is to make it easy for anyone to find and make delicious meals and treats, no matter their skill level in the kitchen.
                        </p>
                        <br />
                        <p className="text-xl text-gray-500">
                            We believe that good food brings people together, and we want to help you create unforgettable meals and memories with your loved ones. That's why we've curated a collection of recipes that are both delicious and easy to make, with step-by-step instructions and photos to guide you along the way.
                        </p>
                        <br />
                        <p className="text-xl text-gray-500">
                            Whether you're a seasoned chef or a beginner, we hope you'll find something here to inspire you. From weeknight dinners to special occasion desserts, our recipes are sure to please even the pickiest eaters. So come on in, browse our collection, and let's get cooking!
                        </p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default About;