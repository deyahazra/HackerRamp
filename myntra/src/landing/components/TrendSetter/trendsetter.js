import React from "react";
import "./pregnency.css"
import hashtags from "../../../images/hashtags.png"
import trendsetter from "../../../images/trendsetter.png"
import Trend_Modal from "./trend_modal";
import { useState } from "react";
import { useHttpClient } from "../../../shared/components/hooks/http-hook";
import { AuthContext } from '../../../shared/context/auth-context';
import { useContext } from "react";
import { useEffect } from "react";
import LoadingSpinner from "../../../shared/components/UIElements/LoadingSpinner";
const Trendsetter=()=>{
    const auth = useContext(AuthContext);
    const [open, setOpen] = useState(false);
    const [responseData, setResponseData] = useState(null); // State to hold response data
    const toggleModal = () => {
      setOpen(!open);
    }
    const handleResponse = (data) => {
      console.log('Received data from Post_Modal:', data);
      setResponseData(data); // Update state with the received response data
    };
    console.log(responseData);
    const [data, setData] = useState([]);
    const { isLoading, error, sendRequest, clearError } = useHttpClient();
    return(
        <>
        <section>
  <div className="mx-auto max-w-screen-2xl px-4 py-8 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
      <div className="bg-pink-600 p-8 md:p-12 lg:px-16 lg:py-24">
        <div className="mt-18 mx-auto max-w-xl text-center">
          <h2 className="text-2xl font-bold text-white md:text-3xl">
            #Trendsetter: Make a statement.
          </h2>
        
          <p className="hidden text-white/90 sm:mt-4 sm:block">
            Discover the newest fashion trends and showcase your unique style. Post your trendiest pics with lastest hashtags and inspire the world
          </p>
        
          <div className="mt-8 md:mt-8">
            <div
            onClick={toggleModal}
              className="inline-block rounded border border-white bg-white px-12 py-3 text-sm font-medium text-blue-500 transition hover:bg-transparent hover:text-white focus:outline-none focus:ring focus:ring-yellow-400"
            >
              <Trend_Modal open={open} setOpen={setOpen} onResponse={handleResponse} />
              Get Started Today
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 md:grid-cols-1 lg:grid-cols-2">
        <img
          alt=""
          src={hashtags}
          className="h-40 w-full object-cover sm:h-56 md:h-full"
        />

        <img
          alt=""
          src={trendsetter}
          className="h-40 w-full object-cover sm:h-56 md:h-full"
        />
      </div>
    </div>
  </div>
</section>
<section className="bg-white">
  <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 md:py-16 lg:px-8">
    <div className="mx-auto max-w-3xl text-center">
      <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Today's Top 3 #hashtags</h2>

      <p className="mt-4 text-gray-500 sm:text-xl">
        Start inspiring and get inspired with the latest hashtags. Share your unique style and make a statement.
      </p>
    </div>

    <div className="mt-8 sm:mt-12">
      <dl className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        <div className="flex flex-col rounded-lg bg-orange-100 px-4 py-8 text-center">

          <dd className="mt-2 text-4xl font-extrabold text-pink-600 md:text-4xl">#SummerVibes</dd>
        </div>

        <div className="flex flex-col rounded-lg bg-orange-100 px-4 py-8 text-center">
          <dd className="mt-2 text-4xl font-extrabold text-pink-600 md:text-4xl">#TravelGoals</dd>
          </div>

          <div className="flex flex-col rounded-lg bg-orange-100 px-4 py-8 text-center">
          <dd className="mt-2 text-4xl font-extrabold text-pink-600 md:text-4xl">#Offshoulder</dd>
          </div>
      </dl>
    </div>
  </div>
</section>
{responseData && (
  <section className="ml-10">
    My posts
    <div className="flex flex-wrap justify-left gap-4">
      <div className="block w-1/2">
        <img
          alt=""
          src={`data:image/png;base64,${responseData.image}`}
          className="h-64 w-full object-cover sm:h-80 lg:h-96"
        />
        <h3 className="mt-4 mb-10 text-lg font-bold bg-pink-100 text-gray-900 sm:text-xl rounded-lg py-6">{responseData.theme}</h3>
      </div>
    </div>
  </section>
)}
        </>
    )
}
export default Trendsetter;