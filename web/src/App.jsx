import './App.css'
import Tabs from './components/Tabs'
import Tables from './components/Tables'
import Sidebar from './components/Sidebar'
import { GetSummary } from './api/getSummary'
import SearchInput from './components/SearchInput'
import { useState, useEffect, useCallback } from 'react'
import { GetDetailTransaction } from './api/getDetailTransaction'

function App() {
  const [query, setQuery] = useState(true)
  const [summary, setSummary] = useState([])
  const [headerSummary, setHeaderSummary] = useState([])
  const [detail, setDetail] = useState([])
  const [headerDetail, setHeaderDetail] = useState([])

  const fetchDataSummary = async () => {
    const data = await GetSummary()
    setSummary(data)
    setHeaderSummary(Object.keys(data[0]))
  }

  const handleSetQuery = useCallback(async (data) => {
    setQuery(data)
    const detail = await GetDetailTransaction({ ...data, date: data.tgl })
    setDetail(detail)
    setHeaderDetail(Object.keys(detail[0]))
  }, [])

  const handleCloseQuery = useCallback(() => {
    setQuery(null)
    setDetail([])
    setHeaderDetail([])
  }, [])

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
          <div className="w-1/2">
            <SearchInput center={true} />
          </div>
        </div>
        <div className='mx-6 mt-8'>
          <div className='w-2/3'>
            <h3 className='bg-white font-bold text-xl py-2 pl-2 border border-[1px] border-gray-600'>
              Summary
            </h3>
            <Tables
              action={true}
              query={query}
              data={summary}
              header={headerSummary}
              handleSetQuery={handleSetQuery}
              handleCloseQuery={handleCloseQuery}
            />
          </div>
          <div className='w-full my-8 border border-[1px] border-gray-600'>
            <h3 className='bg-blue-200 font-bold text-xl py-2 pl-2'>
              {query?.StyleCode} # {query?.tgl}
            </h3>
            <h3 className='bg-white text-blue-700 underline cursor-pointer font-bold text-xl py-2 pl-2'>
              Detail Transaction:
            </h3>
            <Tables
              data={detail}
              header={headerDetail}
            />
          </div>
        </div>
      </Sidebar>
    </div>
  )
}

export default App
