import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div className='fixed top-0 left-0 w-full z-20'>
            <nav className="relative container max-auto flex items-center justify-between py-4 px-2">
                <div>
                    <h4 className='text-xl font-semibold'>Taste</h4>
                    <span className='text-[0.65rem]'>BBQ Reataurant</span>
                </div>
            </nav>
        </div>
    );
};

export default Header;