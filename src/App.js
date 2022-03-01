import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import { getData, getDataByChapter, getDataByName, SearchData } from "./actions";
import Categories from "./components/Categories";
import Home from "./components/Home";
import MangaDetail from "./components/MangaDetail";
import Navbar from "./components/Navbar";
import Search from "./components/Search";
import About from './components/About'
import MangaDetailChapter from "./components/MangaDetailChapter";
import CategoriesDetail from "./components/CategoriesDetail";
import ScrollToTop from "react-scroll-up";

function App() {

  const dispatch = useDispatch()
  const data = useSelector(state => state.manga)

  return (
   <>
   <BrowserRouter>
      <Navbar />
   <Routes>
    <Route path="/" index element={<Home />} />
    <Route path="/manga/:name"  element={<MangaDetail />} />
    <Route path="/chapter/:manga/:page"  element={<MangaDetailChapter />} />
    <Route path="/kategori"  element={<Categories />} />
    <Route path="/detail/:kategori"  element={<CategoriesDetail />} />
    <Route path="/search/:title"  element={<Search />} />
    <Route path="/about"  element={<About />} />
   </Routes>
   </BrowserRouter>
   <ScrollToTop showUnder={100}>
             <svg class="w-9 h-9 mb-10 xl:mb-0 text-white bg-gray-800 px-1 py-1 rounded-full " fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 11l7-7 7 7M5 19l7-7 7 7"></path></svg>
    </ScrollToTop>
   </>
  );
}

export default App;
