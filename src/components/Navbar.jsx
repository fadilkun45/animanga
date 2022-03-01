import React, { useState } from 'react'
import { Link, NavLink,useNavigate } from 'react-router-dom'
import logo from '../img/logo.png'

const Navbar = () => {
    const navigate = useNavigate()
    const [data,setData] = useState()

    const searchHandle = () => {
        navigate(`/search/${data}`)
        setData('')
    }

    return (
    <>
     <nav className='px-1 md:px-6 border-b pb-1 border-gray-800 md:border-none'>
     <div className="flex flex-col">
        <div className="w-full md:container mx-auto flex justify-between items-center" >
            <div className="w-5/12 md:w-2/12 ">
            <Link to="/"  ><img src={logo} alt="logo" className='w-full md:w-5/6 xl:w-full h-full' /></Link>
            </div>
            <div className="hidden md:flex md:w-5/12 text-gray-700" >
                <NavLink to="/" activeClassname="active" className="text-xs lg:text-lg w-2/6 text-center font-bold py-2" >home</NavLink>
                <NavLink to="/kategori" activeClassname="active" className="text-xs lg:text-lg w-2/6 text-center py-2 font-bold" >daftar kategori</NavLink>
                <NavLink to="/about" activeClassname="active" className="text-xs lg:text-lg w-2/6 text-center py-2 font-bold">About</NavLink>
            </div>
            <div className="flex  w-6/12 md:w-4/12 lg:w-3/12">
            <input type="text" placeholder='cari manga' value={data} onChange={(e) => {setData(e.target.value)}} className='rounded-md w-5/6 md:w-5/6 px-1 outline-none py-1 bg-gray-200'/>
            <button onClick={searchHandle} className='bg-gray-800 px-2 text-xs md:text-sm md:px-4 ml-2 text-white rounded-md py-1'>cari</button>
            </div>
        </div>
        <div className="flex md:hidden md:w-5/12  text-gray-700" >
            <NavLink to="/" activeClassname="active" className="text-xs lg:text-lg w-2/6 text-center font-bold py-2" >home</NavLink>
            <NavLink to="/kategori" activeClassname="active" className="text-xs lg:text-lg w-2/6 text-center py-2 font-bold" >daftar kategori</NavLink>
            <NavLink to="/about" activeClassname="active" className="text-xs lg:text-lg w-2/6 text-center py-2 font-bold">About</NavLink>
        </div>
     </div>
     </nav>
    </>
    )
}

export default Navbar
