import React from "react";
import { Link } from "react-router-dom";

const MangaCard = ({endpoint,thumb,title,time_update,chapter}) => {
  return (
    <Link to={`/manga/${endpoint}`} className="bg-gray-100 rounded-md hover:shadow-lg hover:-translate-y-4 duration-300 transition mb-9">
      <img
        src={thumb}
        alt="thumb"
        className="w-full h-40 rounded-t-md"
      />
      <div className="px-4 py-3">
        <h2 className="font-bold text-base">{title?.length > 50 ? title.slice(0,50) + '...' : title}</h2>
        <p className="text-sm">{chapter}</p>
        <div className="flex items-center">
          <svg
            class="w-6 h-6 mr-3"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
            ></path>
          </svg>
          <p className="text-sm">{time_update} yang lalu</p>
        </div>
      </div>
    </Link>
  );
};

export default MangaCard;
