import React,{useState} from "react";
import {useEffect} from "react";
import {useContext} from "react";
import block from "../../../images/1strunner.png";
import block1 from "../../../images/winner.png";
import block2 from "../../../images/2ndrunner.png";

const Leaderboard = () => {
    return(
        <>
<div className="mx-auto max-w-3xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
<div className="grid grid-cols-1 gap-4 sm:grid-cols-3 sm:items-center md:gap-8">
            <div >
                <img className="h-12 w-30" src={block} alt="" style={{height: '120px', width: '3000px'}}/>
            </div>
        
            <div
            >
                <img className="h-12 w-300" src={block1} alt="" style={{height: '240px', width: '30000px'}}/>
            </div>
        
            <div>
                <img className="h-12 w-30" src={block2} alt="" style={{height: '120px', width: '3000px'}}/>
            </div>
        </div>
  
</div>
<div className="rounded-lg border border-black-200">
  <div className="overflow-x-auto rounded-t-lg">
    <table className="min-w-full divide-y-2 divide-black-200 bg-white text-sm">
      <thead className="ltr:text-left rtl:text-right">
        <tr>
          <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">User Name</th>
          <th className="border-l-2 border-black-300 whitespace-nowrap px-4 py-2 font-medium text-gray-900">Score</th>
        </tr>
      </thead>
      
      <tbody className="divide-y divide-black-200">
  <tr>
    <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">John Doe</td>
    <td className="border-l-2 border-black-300 whitespace-nowrap px-4 py-2 text-gray-700">85</td>
  </tr>

  <tr>
    <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Jane Doe</td>
    <td className="border-l-2 border-black-300 whitespace-nowrap px-4 py-2 text-gray-700">92</td>
  </tr>

  <tr>
    <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Gary Barlow</td>
    <td className="border-l-2 border-black-300 whitespace-nowrap px-4 py-2 text-gray-700">78</td>
  </tr>
  <tr>
    <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Lisa Ray</td>
    <td className="border-l-2 border-black-300 whitespace-nowrap px-4 py-2 text-gray-700">88</td>
  </tr>
  <tr>
    <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Tom Hanks</td>
    <td className="border-l-2 border-black-300 whitespace-nowrap px-4 py-2 text-gray-700">95</td>
  </tr>
</tbody>
    </table>
  </div>
</div></>
    )
}
export default Leaderboard;