import axios from "axios"
import { useEffect, useState,useRef } from "react"
import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"
import { useParams } from "react-router"
import ReactToPrint from 'react-to-print'
import { Link } from "react-router-dom"
import { getDataByName, getMangaChapter } from "../actions"

const MangaDetailChapter = () => {
  
    const dispatch = useDispatch()
    const {manga} = useParams()
    const {page} = useParams()
    const mangaRef = useRef()
    const checkData = useSelector((state) => state.mangaDetail)
    const data = useSelector((state) => state.mangaDetail?.chapter)
    const dataChapter = useSelector((state) => state.mangaChapter)
    const [mangaData,setMangaData] = useState()

    const chapterPage = []
    const [chapterPage2,setchapter2] = useState([]) 

       useEffect(() => {
        dispatch(getDataByName(manga))
       },[])


    for(let i = 0 ; i < data?.length ; i++){
        chapterPage.push(data[i])
    }

   
    useEffect(() => {
        console.log(mangaData)
        console.log(chapterPage2)
        console.log(dataChapter)
    },[checkData,dataChapter])

    useEffect(() => {
        dispatch({type: 'DELETE CHAPTER'})
        chapterPage.reverse()
        setchapter2(chapterPage)
        dispatch(getMangaChapter(chapterPage[page]?.chapter_endpoint))
    },[checkData])

    
    let onChangePage = () => {
        window.scrollTo(0,0)
        dispatch(getDataByName(manga))
        dispatch({type: 'DELETE CHAPTER'})
    }

    return (
      <>
        <div className="bg-gray-900 py-6 text-white">
            <div className="w-11/12 md:w-5/6 lg:container mx-auto">
               {
                   <div className="w-full lg:w-5/6 xl:w-full mx-auto flex flex-col">
                   <h2 className="text-base md:text-2xl">{checkData?.title}</h2>
                   <p className="text-sm md:text-xl">{chapterPage2[page]?.chapter_title}</p>
               </div>  
               }

            <div className="flex mt-4 justify-between mb-6">
              {
                  page > 0 ? <Link onClick={onChangePage} to={`/chapter/${manga}/${parseInt(page) - 1}`} className="bg-gray-200 px-2 md:px-4 py-1 md:py-2 text-center text-gray-800 text-xs md:text-sm">ke sebelum nya</Link> :  ''
              }
                {
                    page < chapterPage.length  - 1? <Link onClick={onChangePage} to={`/chapter/${manga}/${parseInt(page) + 1}`} className="bg-gray-200 px-2 md:px-4 py-1 md:py-2 text-center text-gray-800 text-xs md:text-sm">ke selanjut nya </Link> : ''
                }
           </div>

           <div ref={mangaRef} className="flex flex-col w-full md:w-5/6 lg:w-3/6 mx-auto">
           {
            dataChapter && dataChapter?.map((manga) => (
                <img src={manga?.chapter_image_link} alt="thumb"   />
            ))
           }
           {
                 dataChapter?.length < 1 ? <div className="w-full h-screen bg-gray-600 animate-pulse"></div> : '' 
           }
           </div>
           
           <div className="flex mt-4 justify-between mb-6">
              {
                  page > 0 ? <Link onClick={onChangePage} to={`/chapter/${manga}/${parseInt(page) - 1}`} className="bg-gray-200 px-2 md:px-4 py-1 md:py-2 text-center text-gray-800 text-xs md:text-sm">ke sebelum nya</Link> :  ''
              }
                {
                    page < chapterPage.length  - 1? <Link onClick={onChangePage} to={`/chapter/${manga}/${parseInt(page) + 1}`} className="bg-gray-200 px-2 md:px-4 py-1 md:py-2 text-center text-gray-800 text-xs md:text-sm">ke selanjut nya </Link> : ''
                }
           </div>
        </div>
        </div>
        <ReactToPrint 
         trigger={() => <div className="fixed bottom-20 left-4 z-20 px-2 py-2 rounded-xl bg-white font-bold flex ">
             download
                <svg class="w-6 h-6 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"></path></svg>
         </div>}
         content={() => mangaRef.current}
         onBeforePrint={() => console.log("lagi print")}
         onAfterPrint={() => console.log("print selesai")}
        />
            
      </>
    )
}

export default MangaDetailChapter
