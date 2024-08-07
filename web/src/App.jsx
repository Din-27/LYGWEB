import { useState } from 'react'
import './App.css'
import Sidebar from './components/Sidebar'
import Tabs from './components/Tabs'
import Tables from './components/Tables'
import { useEffect } from 'react'
import { GetSummary } from './api/getSummary'
import { useCallback } from 'react'

function App() {
  const [query, setQuery] = useState(null)
  const [summary, setSummary] = useState([])
  const [headerSummary, setHeaderSummary] = useState([])
  const fetchDataSummary = async () => {
    const data = await GetSummary()
    setSummary(data)
    console.log(data[0]);
    setHeaderSummary(Object.keys(data[0]))
  }

  const handleSetQuery = useCallback((data) => {
    setQuery(data)
  }, [])

  const handleCloseQuery = useCallback((data) => {
    setQuery(null)
  }, [])
  console.log(query);
  useEffect(() => {
    fetchDataSummary()
  }, [])
  return (
    <div className='bg-gray-200'>
      <Sidebar>
        <div className='fixed w-full z-20 shadow-md'>
          <Tabs />
        </div>
        <div className='mt-4 bg-gray-200 mx-6 flex items-center space-x-6 pt-36'>
          <h2 className='text-2xl font-bold text-left text-[#666666]'>Search</h2>
          <form class="w-1/2">
            <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only">Search</label>
            <div class="relative">
              <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg class="w-4 h-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                </svg>
              </div>
              <input type="search" id="default-search" class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500" placeholder="" required />
            </div>
          </form>
        </div>
        <div className='mx-6 mt-8'>
          <div className='w-1/2'>
            <h3 className='bg-white font-bold text-xl py-2 pl-2 border border-[1px] border-gray-600'>Summary</h3>
            <Tables
              query={query}
              data={summary}
              handleSetQuery={handleSetQuery}
              handleCloseQuery={handleCloseQuery}
              header={headerSummary} />
          </div>
          <div className='w-2/3 my-8 border border-[1px] border-gray-600'>
            <h3 className='bg-blue-200 font-bold text-xl py-2 pl-2'>test</h3>
            <h3 className='bg-white text-blue-700 underline cursor-pointer font-bold text-xl py-2 pl-2'>Detail Transaction: </h3>
            <Tables
              data={summary}
              header={headerSummary} />
          </div>
        </div>
      </Sidebar>
    </div>
  )
}

export default App
