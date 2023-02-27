import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <>
            <header className="App-header p-5 text-xs md:text-base lg:text-lg">
                <nav className='flex flex-col gap-4 lg:flex-row justify-between items-center mx-2 md:mx-10 lg:mx-20 cursor-pointer '>
                    <div className='text-[2rem] lg:text-[3rem] font-extralight'>
                        <NavLink to={'/'}>
                        N
                        </NavLink>
                    </div>
                    <div className='min-w-[300px] flex justify-evenly items-center gap-2'>
                        <NavLink to={'/about'} >
                            <div className='hover:bg-black transition-all ease-in px-5 py-2 rounded'>About</div>
                        </NavLink>
                        <NavLink to={'/gigs'} >
                            <div className='hover:bg-black transition-all ease-in px-5 py-2 rounded'>Gigs</div>
                        </NavLink>
                        <NavLink to={'/projects'} >             
                            <div className='hover:bg-black transition-all ease-in px-5 py-2 rounded'>Projects</div>
                        </NavLink>
                        <NavLink to={'/experience'} >
                            <div className='hover:bg-black transition-all ease-in px-5 py-2 rounded'>Experiences</div>
                        </NavLink>
                        <NavLink to={'/contactme'} >
                            <div className='hover:bg-black transition-all ease-in px-5 py-2 rounded border border-white text-center'>Contact Me</div>
                        </NavLink>
                    </div>
                </nav>
            </header>
        </>
    );
};

export default Navbar;