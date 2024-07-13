import React,{useState} from "react";
import "./post.css"
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { useHttpClient } from "../../../shared/components/hooks/http-hook";
import { AuthContext } from '../../../shared/context/auth-context';
import { useContext } from "react";
import { useEffect } from "react";
import coins from "../../../images/coins.gif"
import Post from "./post";
import Vote from "./vote";
import  Leaderboard  from "./leaderboard";
import LoadingSpinner from "../../../shared/components/UIElements/LoadingSpinner";
const Challenges = () => {
  const auth = useContext(AuthContext);
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const [data,setData]=useState([]);
  useEffect(() => {
    const fetchScore = async () => {
      // console.log(auth.userId);
      try {
        const responseData = await sendRequest(
          `https://myntrabackend-ip82.onrender.com/api/auth/get-score`,
          'GET',
          null,
          {
            'Content-Type': 'application/json',
            Authorization: ` ${auth.userId}`
          }
        );
        setData(responseData.score);
        console.log(responseData.score);
      } 
      catch (err) {
        console.log(err);
      }
    };
    fetchScore();
  }
  ,[data]);

    const [activeTab, setActiveTab] = useState('Leaderboard');
    return(
        <>
            <div class="mr-10 mt-10 flex justify-end">
              <span
                class="inline-flex items-center justify-center rounded-full bg-yellow-300 px-2.5 py-0.5 text-purple-700"
              >
                <img src={coins} style={{ width: '1rem', height: '1rem' }} />
            
                <p class="whitespace-nowrap text-sm">{data}</p>
              </span>
            </div>
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
        {activeTab === 'Post' && <div className="ml-20 mr-20 mt-10 mb-10"><Post/></div>}
        {activeTab === 'Vote' && <div className="ml-20 mr-20 mt-10"><Vote/></div>}
        {activeTab === 'Leaderboard' && <div className="ml-20 mr-20 mt-10"><Leaderboard/></div>}
      </div>
        </>
    )
}
export default Challenges;