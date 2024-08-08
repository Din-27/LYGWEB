import React from 'react'

export default function Tabs() {
    return (
        <div className="bg-white text-sm pt-4 space-x-4 font-medium text-center text-gray-500 w-full border-gray-200">
            <h2 className='mx-6 mb-4 text-4xl font-bold text-left'>Sewing</h2>
            <ul className="flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-200">
                <li className="me-2">
                    <a href="#" className="inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50">
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="currentColor" className="icon icon-tabler icons-tabler-filled icon-tabler-home"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M12.707 2.293l9 9c.63 .63 .184 1.707 -.707 1.707h-1v6a3 3 0 0 1 -3 3h-1v-7a3 3 0 0 0 -2.824 -2.995l-.176 -.005h-2a3 3 0 0 0 -3 3v7h-1a3 3 0 0 1 -3 -3v-6h-1c-.89 0 -1.337 -1.077 -.707 -1.707l9 -9a1 1 0 0 1 1.414 0m.293 11.707a1 1 0 0 1 1 1v7h-4v-7a1 1 0 0 1 .883 -.993l.117 -.007z" /></svg>
                    </a>
                </li>
                <li className="me-2">
                    <a href="#" className="inline-block p-4 text-[#666666] border-b-2 border-b-green-400 bg-gray-100 rounded-t-lg active text-xl font-bold" aria-current="page">OUTPUT</a>
                </li>
            </ul>
        </div >
    )
}
