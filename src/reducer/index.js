import { combineReducers } from "redux";
import categoriesReducer from "./categoriesReducer";
import mangaDetailReducer from "./MangaDetailReducer";
import mangaPopularReducer from "./mangaPopularReducer";
import mangaReducer from "./mangaReducer";
import mangaChapterReducer from "./MangaChReducer";
import searchReducer from "./searchReducer";
import categoriesDetailReducer from "./categoriesDetail";

const rootReducer = combineReducers({
    categories : categoriesReducer,
    categoriesDetail:categoriesDetailReducer,
    manga: mangaReducer,
    mangaPopular: mangaPopularReducer,
    mangaDetail: mangaDetailReducer,
    mangaChapter: mangaChapterReducer,
    search: searchReducer,
})

export default rootReducer