import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router'
import { SearchData } from '../actions'
import LoadSkeleton from './LoadSkeleton'
import MangaCard from './MangaCard'

const Search = () => {
    const {title} = useParams()
    const dispatch = useDispatch()
    const result = useSelector((state) => state.search)

    useEffect(() => {
        dispatch({type: 'DELETE SEARCH'})
        dispatch(SearchData(title))
    },[title])

    console.log(result)

    return (
        <div className="container mx-auto">
               <div className="mt-6">
               { result && <h2 className="font-bold text-2xl">{result.length} dari {title}</h2>}
                <div className="grid grid-cols-5 gap-4 mt-5">
                {
                    result && result?.map((manga) => (
                        <MangaCard endpoint={manga.endpoint}  thumb={manga.thumb} title={manga.title} time_update={manga.upload_on} chapter={manga.chapter}/>
                    ))
                }
                {
                    result.length < 1 ? <><LoadSkeleton /> <LoadSkeleton /> <LoadSkeleton /> <LoadSkeleton /> <LoadSkeleton /> </> : ""
                }
                </div>
            </div>
        </div>
    )
}

export default Search
