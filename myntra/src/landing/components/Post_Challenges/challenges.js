import React,{useState} from "react";
import "./yoga.css"
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { useHttpClient } from "../../../shared/components/hooks/http-hook";
import { AuthContext } from '../../../shared/context/auth-context';
import { useContext } from "react";
import { useEffect } from "react";
const Challenges = () => {
    const [activeTab, setActiveTab] = useState('Leaderboard');
    return(
        <>
        <div className="mt-10 ml-20 mr-20">
        <div className="sm:hidden">
          <label htmlFor="Tab" className="sr-only">Tab</label>
          <select
            id="Tab"
            className="w-full rounded-md border-gray-200"
            value={activeTab}
            onChange={(e) => setActiveTab(e.target.value)}
          >
            <option value="Post">Post</option>
            <option value="Vote">Vote</option>
            <option value="Leaderboard">Leaderboard</option>
          </select>
        </div>

        <div className="hidden sm:block">
          <div className="border-b border-gray-200">
            <nav className="-mb-px flex gap-10">
              <div
                className={`shrink-0 border border-transparent p-3 text-lg font-medium ${activeTab === 'Post' ? 'text-sky-600 border-b-2 border-sky-600 shrink-0 rounded-t-lg border border-gray-300 border-b-white p-3 text-lg font-medium' : 'text-gray-500 hover:text-gray-700'}`}
                onClick={() => setActiveTab('Post')}
              >
                Post
              </div>

              <div
                className={`shrink-0 border border-transparent p-3 text-lg font-medium ${activeTab === 'Vote' ? 'text-sky-600 border-b-2 border-sky-600 shrink-0 rounded-t-lg border border-gray-300 border-b-white p-3 text-lg font-medium' : 'text-gray-500 hover:text-gray-700'}`}
                onClick={() => setActiveTab('Vote')}
              >
                Vote
              </div>

              <div
                className={`shrink-0 border border-transparent p-3 text-lg font-medium ${activeTab === 'Leaderboard' ? 'text-sky-600 border-b-2 border-sky-600 shrink-0 rounded-t-lg border border-gray-300 border-b-white p-3 text-lg font-medium' : 'text-gray-500 hover:text-gray-700'}`}
                onClick={() => setActiveTab('Leaderboard')}
              >
                Leaderboard
              </div>
            </nav>
          </div>
        </div>
      </div>

      {/* Conditional Rendering of Content Based on Active Tab */}
      <div>
        {activeTab === 'Post' && <div>Post Content Here</div>}
        {activeTab === 'Vote' && <div>Vote Content Here</div>}
        {activeTab === 'Leaderboard' && <div>Leaderboard Content Here</div>}
      </div>
        </>
    )
}
export default Challenges;