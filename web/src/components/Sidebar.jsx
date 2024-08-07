import React from 'react'
import Avatar from './Avatar'
import SearchInput from './SearchInput'

export default function Sidebar({ children }) {
    return (
        <div className='grid grid-cols-7'>
            <aside id="default-sidebar" class="relative z-40 h-screen" aria-label="Sidebar">
                <div class="h-full px-3 py-4 overflow-y-auto bg-[#343A40]">
                    <ul class="space-y-4 font-medium">
                        <li className='border-b-2'>
                            <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg text-white">
                                <Avatar />
                                <span class="ms-3">Your Name</span>
                            </a>
                        </li>
                        <li>
                            <SearchInput />
                        </li>
                        <li>
                            <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 group text-white hover:text-gray-900">
                                <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 21">
                                    <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
                                    <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
                                </svg>
                                <span class="ms-3">Dashboard</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </aside>
            <div className='col-span-6 h-screen overflow-y-auto'>
                {children}
            </div>
        </div>
    )
}
