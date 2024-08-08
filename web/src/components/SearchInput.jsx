import React from 'react'

export default function SearchInput({ center }) {
    return !center ?
        <form className="max-w-md mx-auto">
            <div className="relative w-full">
                <input type="search" id="location-search" className="block p-2.5 w-full z-20 text-sm text-white bg-[#343A40] rounded-lg border-s-gray-50 border-s-2 border border-gray-300" placeholder="Search" required />
                <button type="submit" className="absolute top-0 end-0 h-full p-2.5 text-sm font-medium text-white bg-[#343A40] rounded-e-lg border ">
                    <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                    </svg>
                    <span className="sr-only">Search</span>
                </button>
            </div>
        </form>
        :
        <div>
            <label for="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only">Search</label>
            <div className="relative">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <svg className="w-4 h-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                    </svg>
                </div>
                <input type="search" id="default-search" className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500" placeholder="" required />
            </div>
        </div>
}
