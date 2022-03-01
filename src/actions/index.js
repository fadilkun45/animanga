import { fetchCategories, fetchCategoriesDetail, fetchManga, fetchMangaDetail, fetchMangaDetailByChapter, fetchMangaPopular, searchManga } from "../Api"

export const getData = (page) => async (dispatch) => {
   try {
    const response = await fetchManga(page)
    dispatch({type: 'FETCH ALL',payload:  response.manga_list.filter(response => response.type.toLowerCase().includes("manga"))
   })
   } catch (error) {
    dispatch({type: 'FETCH ALL',payload: []})
   }
}

export const nextPage = (page) => async (dispatch) => {
   try {
    const response = await fetchManga(page)
    let data = response.manga_list.filter(response => response.type.toLowerCase().includes("manga"))

    for(let i = 0 ; i < data.length ; i++ ){
      dispatch({type: 'FETCH NEXT PAGE',payload: data[i] 
   })
    }
      
   } catch (error) {
    dispatch({type: 'FETCH NEXT PAGE',payload: []})
   }
}

export const getDataPopular = (page) => async (dispatch) => {
   try {
    const response = await fetchMangaPopular(page)
  
    dispatch({type: 'FETCH POPULAR',payload: response.manga_list.filter(response => response.type.toLowerCase().includes("manga"))})
   } catch (error) {
    dispatch({type: 'FETCH POPULAR',payload: []})
   }
}

export const getDataByName = (name) => async (dispatch) => {
   try {
    const response = await fetchMangaDetail(name)
    dispatch({type: 'FETCH BY ID',payload: response})
   } catch (error) {
    dispatch({type: 'FETCH BY ID',payload: error})
   }
}

export const getMangaChapter = (Name) => async (dispatch) => {
   try {
    const response = await fetchMangaDetailByChapter(Name)
    dispatch({type: 'FETCH BY CHAPTER',payload: response?.chapter_image})
   } catch (error) {
    dispatch({type: 'FETCH BY CHAPTER',payload: error})
   }
}

export const SearchData = (Name) => async (dispatch) => {
   try {
    const response = await searchManga(Name)
    dispatch({type: 'GET SEARCH',payload: response.manga_list.filter(response => response.type.toLowerCase().includes("manga"))})
   } catch (error) {
    dispatch({type: 'GET SEARCH',payload: []})
   }
}

export const getCategories = () => async (dispatch) => {
   try {
    const response = await fetchCategories()
    dispatch({type: 'FETCH CATEGORIES',payload: response?.list_genre
   })
   } catch (error) {
    dispatch({type: 'FETCH CATEGORIES',payload: []})
   }
}

export const getCategoriesDetail = (kategori,page) => async (dispatch) => {
   try {
    const response = await fetchCategoriesDetail(kategori,page)
    dispatch({type: 'GET CATEGORIES BY DETAIL',payload: response?.manga_list.filter(response => response.type.toLowerCase().includes("manga"))
   })
   } catch (error) {
    dispatch({type: 'GET CATEGORIES BY DETAIL',payload: [ ]})
   }
}

export const addCategoriesDetail = (kategori,page) => async (dispatch) => {
   try {
    const response = await fetchCategoriesDetail(kategori,page)

    let data = response.manga_list.filter(response => response.type.toLowerCase().includes("manga"))

    for(let i = 0 ; i < data.length ; i++ ){
      dispatch({type: 'ADD CATEGORIES BY DETAIL',payload: data[i] })
   }

   } catch (error) {
    dispatch({type: 'ADD CATEGORIES BY DETAIL',payload: []})
   }
}
