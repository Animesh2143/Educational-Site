import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/Logo.svg';
import toast from 'react-hot-toast';

const Navbar = ({isLoggedIn, setIsLoggedIn}) => {
  return (
    <div className='flex justify-between items-center w-11/12 max-w-[1160px] mx-auto py-4'>
        <Link to="/">
            <img src={logo} width={160} height={32} loading='lazy'/>
        </Link>

        <nav>
            <ul className='flex gap-x-6 text-richblack-100'>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/about'>About</Link>
                </li>
                <li>
                    <Link to='/contacts'>Contact</Link>
                </li>
            </ul>
        </nav>

        <div className='flex gap-4 items-center'>

            { !isLoggedIn &&
                <div>
                    <Link to="/login">
                        <button className='bg-richblack-800 text-richblack-100 py-[8px] 
                        px-[12px] rounded-[8px] border border-richblack-800'>Login</button>
                    </Link>
                </div>
            }
            {   !isLoggedIn &&
                <div>
                    <Link to="/signup">
                        <button className='bg-richblack-800 text-richblack-100 py-[8px] 
                        px-[12px] rounded-[8px] border border-richblack-800'>Signup</button>
                    </Link>
                </div>
            }
            { isLoggedIn &&
                <div>
                    <Link to="/">
                        <button className='bg-richblack-800 text-richblack-100 py-[8px] 
                        px-[12px] rounded-[8px] border border-richblack-800' onClick={()=>{
                        setIsLoggedIn(false);
                        toast.success("Logged Out");
                        }}>Logout</button>
                    </Link>
                </div>
            }
            { isLoggedIn &&
                <div>
                    <Link to="/dashboard">
                        <button className='bg-richblack-800 text-richblack-100 py-[8px] 
                        px-[12px] rounded-[8px] border border-richblack-800'>Dashboard</button>
                    </Link>
                </div>
            }
        </div>
    </div>
  )
}

export default Navbar