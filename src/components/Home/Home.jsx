import { Button, Spinner } from 'flowbite-react';
import React, { useEffect, useState } from 'react';
import Banner from '../Banner/Banner';
import SingleChef from '../Chefs/SingleChef';
import DeshiFood from '../Food/DeshiFood';
import RequestForm from '../Food/RequestForm';

const Home = () => {

    const [data, setData] = useState([]);
    const [deshi, setDeshi] = useState([]);
    // const [spin, setSpin] = useState(null);

    // for chefs
    useEffect(() => {
        fetch('https://recipe-maker-server-khalid-ibne-hussain.vercel.app/chef_data')
            .then(res => res.json())
            .then(data => setData(data));
    }, [])

    // for deshi food
    useEffect(() => {
        fetch('https://recipe-maker-server-khalid-ibne-hussain.vercel.app/deshi')
            .then(res => res.json())
            .then(deshi => setDeshi(deshi));
    }, [])


    return (
        <div className=''>
            <Banner></Banner>

            <h2 className='text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white mt-14 mb-6'>Popular Chefs</h2>
            {
                data ? <div className='grid gap-3 md:grid-cols-2 lg:grid-cols-3 justify-items-center align-middle w-full max-w-screen-xl mx-auto px-4 md:py-2'>
                    {
                        data.map((chef => <SingleChef key={chef.id} chef={chef}> </SingleChef>))
                    }
                </div> : <Button>
                    <Spinner aria-label="Spinner button example" />
                    <span className="pl-3">
                        Loading...
                    </span>
                </Button>
            }

            <h2 className='text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white mt-14 mb-6'>Deshi Food</h2>
            {
                deshi ? <div className='grid gap-3 md:grid-cols-2 lg:grid-cols-3 justify-items-center align-center w-full max-w-screen-xl mx-auto px-4 md:py-2'>
                    {
                        deshi.map((deshi => <DeshiFood key={deshi.food_id} deshi={deshi}> </DeshiFood>))
                    }
                </div> : <Button>
                    <Spinner aria-label="Spinner button example" />
                    <span className="pl-3">
                        Loading...
                    </span>
                </Button>
            }
            <RequestForm></RequestForm>
        </div>
    );
};

export default Home;