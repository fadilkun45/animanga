import axios from 'axios'
import { useState } from 'react';

axios.defaults.baseURL = 'http://localhost:3500/api' 


export const fetchManga = (page) => 
    axios.get(`/manga/page/${page}`).then((json) => json.data)

export const fetchMangaPopular = (page) => axios.get(`/manga/popular/${page}`).then((json) => json.data)
export const fetchMangaDetail  = (name) => axios.get(`/manga/detail/${name}`).then((json) => json.data)
export const fetchMangaDetailByChapter  = (name) => axios.get(`/chapter/${name}`).then((res) =>  res.data)
export const fetchCategories  = () => axios.get(`/genres`).then((res) =>  res.data)
export const fetchCategoriesDetail  = (name,page) => axios.get(`/genres/${name}/${page}`).then((res) =>  res.data)

export const searchManga  = (name) => axios.get(`/search/${name}`).then((json) => json.data)

