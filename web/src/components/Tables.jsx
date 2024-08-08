import React from 'react'

export default function Tables({ action, data, header, query, handleSetQuery, handleCloseQuery }) {
    const detailSizeObj = data && data[0]?.detailSize || []
    const checkSize = detailSizeObj.filter(x => x.SizeName.includes('X'))
    console.log(checkSize, detailSizeObj);

    return (
        <div className="relative overflow-x-auto bg-white">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500">
                <thead className="text-xs text-gray-700 uppercase bg-[#ABBCA9]">
                    <tr>
                        {header?.map((item, index) =>
                            <th key={index} scope="col" className={`border border border-gray-600 
                                ${item !== 'detailSize' ? 'px-4 py-3' : ``}`}
                            >
                                {item === 'detailSize' && <h4 className='text-center py-2'>Size</h4>}
                                {item === 'detailSize'
                                    ? <div className={`text-center grid py-4 w-full ${checkSize.length > 0 ? 'grid-cols-6' : 'grid-cols-11'}`}>
                                        {
                                            detailSizeObj.map(x => x.SizeName)
                                                ?.map(x =>
                                                    <th scope="col" className="border border border-gray-600 px-4 py-3">
                                                        {x}
                                                    </th>
                                                )
                                        }
                                    </div>
                                    : item}
                            </th>
                        )}
                        {action &&
                            <th scope="col" className="border border border-gray-600 px-4 py-3">
                                Actions
                            </th>
                        }
                    </tr>
                </thead>
                <tbody>
                    {action
                        ? data?.map((item, index) =>
                            <tr className={`text-[10px] font-bold ${query && query.id === index ? 'bg-red-400 text-black' : 'bg-white text-gray-900'} border-b`}>
                                <th scope="row" className="border border border-gray-600 px-4 py-4 whitespace-nowrap">
                                    {String(item.tgl)}
                                </th>
                                <td className="border border border-gray-600 px-4 py-4">
                                    {item.StyleCode}
                                </td>
                                <td className="border border border-gray-600 px-4 py-4">
                                    {item.totalSize}
                                </td>
                                <td className="border border border-gray-600 px-4 py-4">
                                    {item.totalOutput}
                                </td>
                                <td className="border border border-gray-600 mx-auto px-2 py-4 text-xs">
                                    {query && query.id === index
                                        ? <button onClick={() => handleCloseQuery({ ...item, id: index })} className={`bg-red-500 text-white px-2 py-1 rounded-full`}>
                                            close detail
                                        </button>
                                        : <button onClick={() => handleSetQuery({ ...item, id: index })} className={`bg-gray-400 text-black px-2 py-1 rounded-full`}>
                                            view detail
                                        </button>
                                    }
                                </td>
                            </tr>)
                        : data?.map((item, index) =>
                            <tr className={`text-center text-[10px] font-bold ${query && query.id === index ? 'bg-red-400 text-black' : 'bg-white text-gray-900'} border-b`}>
                                <th scope="row" className="border border border-gray-600 px-4 py-4 whitespace-nowrap">
                                    {String(item.Operator)}
                                </th>
                                <th className="border border border-gray-600 w-full">
                                    <div className={`text-center grid py-4 w-full ${checkSize.length > 0 ? 'grid-cols-6' : 'grid-cols-11'}`}>
                                        {item.detailSize.map(x =>
                                            <th scope="col" className={`${x.totalOutput > 0 ? 'text-black' : 'text-red-600'} border border border-gray-600 px-4 py-3`}>
                                                {x.totalOutput}
                                            </th>
                                        )}
                                    </div>
                                </th>
                                <td className="border border border-gray-600 px-4 py-4">
                                    {item.totalQty}
                                </td>
                                <td className="border border border-gray-600 px-4 py-4">
                                    {item.Destination}
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div >
    )
}
