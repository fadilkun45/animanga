import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router'
import { getDataByName } from '../actions'
import parse from 'html-react-parser'
import { Link } from 'react-router-dom'

const MangaDetail = () => {
    const {name} = useParams()
    const dispatch  = useDispatch()
    const data = useSelector(state => state.mangaDetail)


    
    useEffect(() => {
        dispatch({type: 'DELETE OLD DATA'})
        window.scrollTo(0,0)
        dispatch(getDataByName(name))
        console.log(name)
    },[])

    const toPage = () => {
        // dispatch({type: 'DELETE OLD DATA'})
    }

    return (
       <>
       {
           data.length < 1 ?  <div className='mx-auto bg-gray-100 py-6 text-center'>sedang memuat...</div>  :  <div className="px-4 lg:px-0 container mx-auto bg-gray-100 py-6">
           <div className="flex flex-col lg:flex-row justify-between">
           <img src={data && data?.thumb} alt="thumb" className='w-full lg:w-1/6 h-80 lg:h-64 mx-auto object-cover rounded-md'/>
           
           <div className="flex flex-col w-full mt-5 lg:mt-0 lg:w-4/6">
                <h1 className="font-bold text-gray-700 text-xl lg:text-4xl">{data && data?.title}</h1>
                <h2 className="font-normal text-gray-700 text-base lg:text-xl mt-2">author : {data && data?.author}</h2>
                <p className='text-gray-700 text-base lg:text-xl mt-2'>status : {data && data?.status}</p>
                <p className='text-gray-700 font-bold text-base lg:text-xl mt-2'>sipnosis :</p>
                <p className='mt-2 text-sm pr-4 tracking-wide leading-loose'>
                {
                   data?.synopsis && parse(data?.synopsis)
                }
                </p>
                <p className='text-gray-700 font-bold text-base md:text-xl mt-2'>genre list :</p>
                <div className="font-normal grid grid-cols-1 md:grid-cols-3 mt-1 text-center gap-5 pr-4 text-gray-700 text-sm "> {data && data?.genre_list?.map(genre => (
                    <Link to={`/detail/${genre.genre_name}`} className='bg-white py-2 px-2 rounded-xl'>{genre.genre_name}</Link>
                ))}</div>
           </div>
           </div>
           <h3 className='text-gray-700 font-bold text-2xl text-center mt-10 mb-2'>daftar chapter :</h3>
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 px-5 mt-2 gap-6">
             {
                 data && data?.chapter?.reverse().map((chapter, index) => (
                    <Link to={`/chapter/${name}/${index}`} onClick={toPage} className="bg-white px-4 font-bold  text-sm lg:text-xl py-3 rounded-lg text-center">
                        {chapter?.chapter_title}
                    </Link>
                 ))
             }
           </div>
          </div>
       }
       </>
    )
}

export default MangaDetail
