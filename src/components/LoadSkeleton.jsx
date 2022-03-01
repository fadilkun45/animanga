import React from 'react'

const LoadSkeleton = () => {
    return (
        <div className="animate-pulse bg-gray-300 rounded-md duration-300 transition mb-9">
                    <div className="w-full bg-gray-400 h-40 rounded-t-md"
                    ></div>
                    <div className="px-4 py-3 h-16">
                    </div>
                  </div>
    )
}

export default LoadSkeleton
