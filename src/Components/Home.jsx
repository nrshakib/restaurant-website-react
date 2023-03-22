import React from 'react';
import { heroIcons } from '../Data'
import foodBowl from '../images/food.png'
import {FaArrowRight} from 'react-icons/fa'

const Home = () => {
    return (
        <div className="mx-auto pt-[5rem] items-center xl:justify-center justify-start flex-wrap lg:px-16 px-4"
            id="home">
            <div className="flex items-start gap-10">
                <div className="text-start sm:text-[2.5rem] text-[1.8rem] font-bold">
                    Delicious <br/> Food Is Waiting <br/> For You
                </div>
                <div>
                <img className='w-72 justify-self-center' src={foodBowl} alt="hero-img" />
            </div>
            </div>
            <div className='rounded-lg bg-red-600 p-3 w-1/6 mb-6 flex items-center gap-4 text-white text-[0.85rem]'>
                <a href="#" className='ml-4'>View Menu</a>
                <FaArrowRight className='text-yellow-400'/>
            </div>
            <div className="flex md:gap-6 gap-2">
                {heroIcons.map((heroIcon, index) => {
                    return (
                        <div className='rounded-md bg-black w-12 h-12 text-amber-300 flex items-center justify-center
                        md:text-3xl text-xl' key={index}>{heroIcon}</div>
                    )
                })}
            </div>
            
        </div>
    );
};

export default Home;