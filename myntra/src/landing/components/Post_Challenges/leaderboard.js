import React,{useState} from "react";
import {useEffect} from "react";
import {useContext} from "react";
const Leaderboard = () => {
    return(
        <>
<div className="mx-auto max-w-3xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
<div className="grid grid-cols-1 gap-4 sm:grid-cols-3 sm:items-center md:gap-8">
            <div className="rounded-2xl border border-gray-200 p-6 shadow-sm sm:px-8 lg:p-12">
                1st runnerup
            </div>
        
            <div
                className="rounded-2xl border border-indigo-600 p-8 shadow-sm ring-1 ring-indigo-600 sm:order-2 sm:px-10 lg:p-14"
            >
                Winner
            </div>
        
            <div className="rounded-2xl border border-gray-200 p-6 shadow-sm sm:order-3 sm:px-8 lg:p-12">
                2nd runnerup
            </div>
        </div>
  
</div>
<div className="rounded-lg border border-gray-200">
  <div className="overflow-x-auto rounded-t-lg">
    <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
      <thead className="ltr:text-left rtl:text-right">
        <tr>
          <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">User Name</th>
          <th className="border-l-2 border-gray-300 whitespace-nowrap px-4 py-2 font-medium text-gray-900">Score</th>
        </tr>
      </thead>
      
      <tbody className="divide-y divide-gray-200">
  <tr>
    <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">John Doe</td>
    <td className="border-l-2 border-gray-300 whitespace-nowrap px-4 py-2 text-gray-700">85</td>
  </tr>

  <tr>
    <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Jane Doe</td>
    <td className="border-l-2 border-gray-300 whitespace-nowrap px-4 py-2 text-gray-700">92</td>
  </tr>

  <tr>
    <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Gary Barlow</td>
    <td className="border-l-2 border-gray-300 whitespace-nowrap px-4 py-2 text-gray-700">78</td>
  </tr>
  <tr>
    <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Lisa Ray</td>
    <td className="border-l-2 border-gray-300 whitespace-nowrap px-4 py-2 text-gray-700">88</td>
  </tr>
  <tr>
    <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Tom Hanks</td>
    <td className="border-l-2 border-gray-300 whitespace-nowrap px-4 py-2 text-gray-700">95</td>
  </tr>
</tbody>
    </table>
  </div>
</div></>
    )
}
export default Leaderboard;