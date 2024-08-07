import React from 'react'

export default function Tables({ data, header, query, handleSetQuery, handleCloseQuery }) {
    return (
        <div class="relative overflow-x-auto bg-white">
            <table class="w-full text-sm text-left rtl:text-right text-gray-500">
                <thead class="text-xs text-gray-700 uppercase bg-[#ABBCA9]">
                    <tr>
                        {header?.map((item, index) =>
                            <th key={index} scope="col" class="border border border-gray-600 px-6 py-3">
                                {item}
                            </th>
                        )}
                        <th scope="col" class="border border border-gray-600 px-6 py-3">
                            Actions
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {data?.map((item, index) =>
                        <tr class={`text-[10px] font-bold ${query && query.id === index ? 'bg-red-400 text-black' : 'bg-white text-gray-900'} border-b`}>
                            <th scope="row" class="border border border-gray-600 px-4 py-4 whitespace-nowrap">
                                {String(item.tgl)}
                            </th>
                            <td class="border border border-gray-600 px-4 py-4">
                                {item.StyleCode}
                            </td>
                            <td class="border border border-gray-600 px-4 py-4">
                                {item.totalSize}
                            </td>
                            <td class="border border border-gray-600 px-4 py-4">
                                {item.totalOutput}
                            </td>
                            <td class="border border border-gray-600 px-2 py-4">
                                {query && query.id === index
                                    ? <button onClick={() => handleCloseQuery({ ...item, id: index })} className={`bg-red-500 text-white px-2 py-1 rounded-full`}>
                                        close detail
                                    </button>
                                    : <button onClick={() => handleSetQuery({ ...item, id: index })} className={`bg-gray-400 text-black px-2 py-1 rounded-full`}>
                                        view detail
                                    </button>
                                }
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div >
    )
}
