import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { RiHomeFill } from 'react-icons/ri';
import { IoIosArrowForward } from 'react-icons/io'
import logo from '../assets/logo.png';
const isNotActiveStyle = 'flex items-center px-5 gap-3 text-gray-500 hover:text-black transition-all duration-200 ease-in-out capitalize';
const isActiveStyle = 'flex items-center px-5 gap-3 font-extrabold border-r-2 border-black transition-all duration-200 ease-in-out capitalize';

const categories = [
  { name: 'Animals '},
  { name: 'Wallpapers'},
  { name: 'Photos '},
  { name: 'Gaming '},
  { name: 'Coding '},
  { name: 'Other '},
]

const Sidebar = ({ closeToggle, user }) => {
  const handleCloseSidebar = () => {
    if (closeToggle) closeToggle(false); //if closeToggle exists, call closeToggle function. Happens in Home
  };

  return (
    <div className="flex flex-col justify-between bg-white h-full overflow-y-scroll min-w-210 hide-scrollbar">
      <div className='flex flex-col'>
        <Link 
          to="/"
          className='flex px-5 gap-2 my-6 pt-1 w-190 items-center' 
          onClick={handleCloseSidebar}       
        >
          <img src={logo} alt='logo' className='w-full' />
        </Link>
        <div className='flex flex-col gap-5'>
          {/* We use a dynamic code block because we want to check if its active or not active. If its active, we use the callback function. "isActive" is from React-Router-DOM when we use the "NavLink" component. If "isActive", renter "isActiveStyle". If not, render "isNotActiveStyle" */}
          <NavLink
            to='/'
            className={({ isActive }) => (isActive ? isActiveStyle : isNotActiveStyle)}
            onClick={handleCloseSidebar}
          >
            <RiHomeFill />
            Home
          </NavLink>
          <h3 className='mt-2 px-5 text-base 2xl:text-xl'>Discover Categories</h3>
          {categories.slice(0, categories.length - 1).map((category) => (
            <NavLink
              to={`/category/${category.name}`}
              className={({ isActive }) => (isActive ? isActiveStyle : isNotActiveStyle)}
              onClick={handleCloseSidebar} //closes sidebar on click
              key={category.name}
            >
              {category.name}
            </NavLink>
          ))}
        </div>
      </div>

      {/* Users profile image, bottom sidebar */}
      {/* check if user exists. If so render "Link" */}
      {user && (
        <Link
          to={`user-profile/${user.id}`}
          className='flex my-5 mb-3 gap-2 p-2 items-center bg-white rounded-lg shadow-lg mx-3'
          onClick={handleCloseSidebar}
        >
          <img src={user.image} className='w-10 h-10 rounded-full' alt='user-profile' />
          <p>{user.userName}</p>
        </Link>
      )} 
    </div>
  );
};

export default Sidebar;