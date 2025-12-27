import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = (props) => {

    let isLoggedIn = props.isLoggedIn;
    let setIsLoggedIn = props.setIsLoggedIn;

    return (
        <div className='flex justify-between items-center w-11/12 max-w-[1160px] py-4 mx-auto'>

            <Link to='/'>
                <img src='https://codehelp-router-project.netlify.app/static/media/Logo.0d90853fa1468dbe2d8d82c0ea06b8b1.svg' alt='logo' width={160} height={32} loading='lazy' />
            </Link>

            <nav>
                <ul className='text-white flex gap-6'>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/'>About</Link>
                    </li>
                    <li>
                        <Link to='/'>Contact</Link>
                    </li>
                </ul>
            </nav>

            <div className='flex items-center gap-x-4'>
                {!isLoggedIn &&
                    <Link to='/login'>
                        <button className='bg-gray-900 text-white py-[8px] px-[12px] rounded-[8px] border border-gray-950'>
                            Login
                        </button>
                    </Link>
                }
                {!isLoggedIn &&
                    <Link to='/signup'>
                        <button className='bg-gray-900 text-white py-[8px] px-[12px] rounded-[8px] border border-gray-950'>
                            Sign up
                        </button>
                    </Link>
                }
                {isLoggedIn &&
                    <Link to='/'>
                        <button onClick={() => {
                            setIsLoggedIn(false);
                            toast.success("Logged Out");
                        }} className='bg-gray-900 text-white py-[8px] px-[12px] rounded-[8px] border border-gray-950'>
                            Log Out
                        </button>
                    </Link>
                }
                {isLoggedIn &&
                    <Link to='/dashboard'>
                        <button className='bg-gray-900 text-white py-[8px] px-[12px] rounded-[8px] border border-gray-950'>
                            Dashboard
                        </button>
                    </Link>
                }
            </div>

        </div>
    )
}

export default Navbar
