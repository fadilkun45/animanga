import React, { useEffect, useState } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { getData, getDataPopular, nextPage } from '../actions'
import LoadSkeleton from './LoadSkeleton'
import MangaCard from './MangaCard'

const Home = () => {
        const dispatch = useDispatch()
        const mangaData = useSelector(state => state.manga)
        const mangaPopular = useSelector(state => state.mangaPopular)
        let [page,setPage] = useState(1)

        useEffect(() => {
        dispatch(getDataPopular(1))
            dispatch(getData(1))
        },[])

        const loadMore = () => {
            setPage(page + 1)
            dispatch(nextPage(page))
        }

    return (
        <div className='w-5/6 md:container mx-auto mt-6'> 
            <div className="bg-gray-100 px-4 py-5">
            <h1 className="text-center text-3xl">
                Animanga ID
            </h1>
            <p className='text-center text-sm'>tempat baca manga Gratis Dan Mudah</p>
            </div>

            <div className="mt-6">
                <h2 className="font-bold text-2xl">manga terpopuler</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 mt-5">
                {
                    mangaPopular && mangaPopular?.map((manga) => (
                        <MangaCard endpoint={manga.endpoint}  thumb={manga.thumb} title={manga.title} time_update={manga.upload_on} chapter={manga.chapter}/>
                    ))
                }
                {
                    mangaPopular.length < 1 ? <><LoadSkeleton /> <LoadSkeleton /> <LoadSkeleton /> <LoadSkeleton /> <LoadSkeleton /> </> : ""
                }
                </div>
            </div>
            
            <div className="mt-6">
                <h2 className="font-bold text-2xl">manga terbaru</h2>
                <InfiniteScroll  dataLength={mangaData.length} next={loadMore} hasMore={true} loader={<><LoadSkeleton /> <LoadSkeleton /> <LoadSkeleton /> <LoadSkeleton /> <LoadSkeleton /> </>}
           className="grid md:grid-cols-3  grid-cols-1 lg:grid-cols-4 xl:grid-cols-5 gap-4 mt-5">
                {
                    mangaData.length < 1 ? <><LoadSkeleton /> <LoadSkeleton /> <LoadSkeleton /> <LoadSkeleton /> <LoadSkeleton /> </> : ''
                }
                {
                    mangaData && mangaData?.map((manga) => (
                        <MangaCard endpoint={manga?.endpoint} chapter={manga?.chapter} thumb={manga?.thumb} title={manga?.title} time_update={manga?.updated_on}/>
                    ))
                }
                </InfiniteScroll >
            </div>
        </div>
    )
}

export default Home
