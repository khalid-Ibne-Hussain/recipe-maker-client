import { Button } from 'flowbite-react';
import React, { useRef } from 'react';
import propsImg from '../../assets/props.png';
import { FaFileDownload } from "react-icons/fa";
import ReactToPrint from 'react-to-print';

const Blog = () => {
    const ref = useRef();
    return (
        <div>
            <div ref={ref} className='max-w-screen-xl  justify-between mx-auto mb-8'>
                <header className='bg-slate-100 flex items-center justify-around  h-40'>
                    <h2 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">Blog</h2>
                </header>
                <div className='px-2'>
                    <div className='mt-5 rounded-lg border-l-indigo-100 shadow-lg p-4'>
                        <h3 className='text-2xl font-semibold my-2'>Differences between uncontrolled and controlled components.</h3>
                        <p className='text-xl text-gray-700'>An uncontrolled component is a component that manages its own state internally. This means that when a user interacts with the component, such as by filling out a form field, the component will update its own state without any help from the parent component. The parent component doesn't have direct control over the state of the uncontrolled component. Examples of uncontrolled components include regular HTML form elements like 'input', 'textarea', and 'select'.

                            On the other hand, a controlled component is a component that gets its value and state from the parent component via props. This means that when a user interacts with the component, such as by filling out a form field, the component will send an event to the parent component with the updated value. The parent component will then update its own state with the new value and pass it back down to the controlled component as a prop. Examples of controlled components include custom form elements built in React that receive their value and state from the parent component.
                        </p>

                        <p className='text-xl text-gray-700'>The main difference between controlled and uncontrolled components is the way they manage their state. Uncontrolled components manage their state internally, while controlled components get their state from the parent component via props. Controlled components give the parent component more control over the state of the child component, which can be useful in certain situations, such as when you need to validate user input before allowing it to be submitted. However, uncontrolled components can be simpler to use and require less code to set up.</p>
                    </div>



                    <div className='mt-8 rounded-lg border-l-indigo-100 shadow-lg p-4'>
                        <h3 className='text-2xl font-semibold my-2'>How to validate React props using PropTypes?
                        </h3>
                        <p className='text-xl text-gray-700'>In React, PropTypes is a built-in library that allows you to validate the props of a component. You can use PropTypes to check that a prop is of the expected type, and to specify whether a prop is required or optional.
                        </p>
                        <p className='text-xl text-gray-700'>Here's an example of how to use PropTypes to validate the props of a simple component:</p>
                        <img className='p-4' src={propsImg} alt="" />

                        <p className='text-xl text-gray-700'>In this example, the Assignment10 component expects three props: title, description, and image. The title prop and description prop are both expected to be strings and are required, while the image prop is also expected to be a string but is not required.

                            If the title or description prop is missing or not a string, or if the image prop is missing or not a string, React will log a warning in the console.</p>
                    </div>

                    <div className='mt-8 rounded-lg border-l-indigo-100 shadow-lg p-4'>
                        <h3 className='text-2xl font-semibold my-2'> Difference between nodejs and express js.        </h3>
                        <p className='text-xl text-gray-700'>Node.js is a runtime environment for executing JavaScript outside of a web browser. It allows you to run JavaScript code on the server side, and includes a number of built-in modules and APIs that make it easy to build web applications, servers, and other types of applications.</p>
                        <p>Express.js is a popular web framework for Node.js that provides a set of features and tools for building web applications and APIs. Express.js is built on top of Node.js, and provides a layer of abstraction that makes it easier to handle HTTP requests and responses, route URLs to specific functions, manage middleware, and more.</p>
                        <p>Here are some of the key differences between Node.js and Express.js:</p>
                        <ul className='list-disc list-inside '>
                            <li className='text-xl text-gray-700'>Node.js provides a runtime environment for executing JavaScript on the server side, while Express.js is a framework that provides a set of features and tools for building web applications and APIs on top of Node.js.</li>
                            <li className='text-xl text-gray-700'>Node.js includes a number of built-in modules and APIs for working with the file system, networking, and other tasks, while Express.js provides a set of tools for handling HTTP requests and responses, routing URLs, managing middleware, and more.</li>
                            <li className='text-xl text-gray-700'>Express.js is built on top of Node.js and uses many of its built-in modules and APIs, but adds a layer of abstraction that makes it easier to build web applications and APIs.</li>
                            <li className='text-xl text-gray-700'>Node.js can be used with other web frameworks besides Express.js, such as Hapi, Koa, and Sails. Express.js, however, is one of the most popular and widely used web frameworks for Node.js.</li>

                        </ul>

                        <p className='text-xl text-gray-700'>Overall, Node.js and Express.js are complementary technologies that work together to make it easy to build high-performance, scalable web applications and APIs using JavaScript on the server side.</p>
                    </div>
                    <div className='mt-8 rounded-lg border-l-indigo-100 shadow-lg p-4'>
                        <h3 className='text-2xl font-semibold my-2'>What is a custom hook & why we create custom hook?
                        </h3>
                        <p className='text-xl text-gray-700'>In React, a custom hook is a JavaScript function that lets us reuse logic between components. Custom hooks allow us to extract complex logic from a component into a reusable function, which can be shared across different components.</p>
                        <p className='text-xl text-gray-700'>The main reason to write a custom hook is for code reusability.</p>
                    </div>


                </div>

            </div>
            <div className='flex justify-center max-w-screen-xl mx-auto my-14'>
                <ReactToPrint trigger={() => <Button className=''>Download <span className='ml-2'><FaFileDownload /></span></Button>} content={() => ref.current} />
            </div>
            {/* <ReactPrint></ReactPrint> */}
        </div>
    );
};

export default Blog;