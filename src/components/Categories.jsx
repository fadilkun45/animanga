import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { getCategories } from '../actions'

const Categories = () => {
    const dispatch = useDispatch()
    const data = useSelector((state) => state.categories)

    useEffect(() => {
        dispatch(getCategories())
    },[])

    console.log(data)


    return (
     <div className="py-6 px-5">
         <div className="container mx-auto">
             <h1 className="text-center my-5 text-2xl">Daftar kategori</h1>
           <div className="grid grid-cols-1 gap-5 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
               {
                   data?.map((genre) => (
                       <Link to={`/detail/${genre?.endpoint}`} className="px-4 py-1 items-center flex justify-center rounded-md bg-gray-100">{genre.genre_name}</Link>
                   ))
               }
           </div>
         </div>
     </div>
    )
}

export default Categories
