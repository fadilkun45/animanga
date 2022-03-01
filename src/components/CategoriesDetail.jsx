import React, { useEffect, useState } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router'
import { addCategoriesDetail, getCategoriesDetail } from '../actions'
import LoadSkeleton from './LoadSkeleton'
import MangaCard from './MangaCard'

const CategoriesDetail = () => {
    const dispatch = useDispatch()
    const {kategori} = useParams()
    const mangaData = useSelector(state => state.categoriesDetail)
    const [page,setPage] = useState(1)

    useEffect(()=>{
        dispatch({type: 'DELETE CATEGORIES BY DETAIL'})
        dispatch(getCategoriesDetail(kategori,1))
    },[])

    console.log(mangaData)
    console.log(kategori)

    const loadMore = () => {
        setPage(page + 1)
        dispatch(addCategoriesDetail(kategori,page))
        console.log(mangaData)
    }


    return (
        <div className="container mx-auto">
            <div className="mt-6">
                <h2 className="font-bold text-2xl">kategori : {kategori}</h2>
                <InfiniteScroll  dataLength={mangaData.length} next={loadMore} hasMore={true} loader={<><LoadSkeleton /> <LoadSkeleton /> <LoadSkeleton /> <LoadSkeleton /> <LoadSkeleton /> </>}
           className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 mt-5">
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

export default CategoriesDetail
