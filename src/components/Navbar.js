import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'

const Navbar = () => {
    
    //create useLocation - for active link
    let location = useLocation();

    //create getLocation function for active link
    const getActiveLink = (path) =>
    {
        return location.pathname === path ? 'text-white' :'text-gray-500'
    }
  return (
  <>
        <nav className='max-w-7xl bg-gray-800 text-white justify-between flex mx-auto items-start rounded-lg  mt-5 py-4 px-5'>
            <h1 className='logo text-xl font-bold'>EXPENSES</h1>

            <div className='space-x-8'>
                <NavLink to='/' className={getActiveLink('/')} >All Expenses</NavLink>
                <NavLink to='/addexpense' className={getActiveLink('/addexpense')}>Add Expense</NavLink>
            </div>
        </nav>
  </>
  )
}

export default Navbar
