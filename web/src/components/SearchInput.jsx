import React from 'react'

export default function SearchInput() {
    return (

        <form class="max-w-md mx-auto">
            <div class="relative w-full">
                <input type="search" id="location-search" class="block p-2.5 w-full z-20 text-sm text-white bg-[#343A40] rounded-lg border-s-gray-50 border-s-2 border border-gray-300" placeholder="Search" required />
                <button type="submit" class="absolute top-0 end-0 h-full p-2.5 text-sm font-medium text-white bg-[#343A40] rounded-e-lg border ">
                    <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                    </svg>
                    <span class="sr-only">Search</span>
                </button>
            </div>
        </form>
    )
}
