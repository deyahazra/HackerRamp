import { ClassNames } from "@emotion/react";
import React,{useState} from "react";
import {useContext} from "react";
import {useEffect} from "react";
import { Link } from "react-router-dom";
import { useHttpClient } from "../../../shared/components/hooks/http-hook";
import { AuthContext } from '../../../shared/context/auth-context';
import LoadingSpinner from "../../../shared/components/UIElements/LoadingSpinner";
const Notifications = () => {
  const auth = useContext(AuthContext);
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const [data,setData]=useState([]);
  useEffect(() => {
    const fetchNoti = async () => {
      console.log(auth.userId);
      try {
        const responseData = await sendRequest(
          `https://myntrabackend-ip82.onrender.com/api/auth/get-notifications`,
          'GET',
          null,
          {
            'Content-Type': 'application/json',
            Authorization: ` ${auth.userId}`
          }
        );
        setData(responseData.notifications);
        console.log(responseData.notifications);
      } 
      catch (err) {
        console.log(err);
      }
    };
    fetchNoti();
  }
  ,[]);
    return (
      <div className="ml-5 mr-5 mt-5">
        {isLoading && <LoadingSpinner asOverlay text="Fetching Your Notifications..."/>}
        <header className="bg-pink-100">
  <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
    <div className="sm:flex sm:items-center sm:justify-between">
      <div className="text-center sm:text-left">
        <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">Notifications</h1>

        <p className="mt-1.5 text-sm text-gray-500">Check out your notifications 🎉</p>
      </div>
      </div>
  </div>
</header>
          {data.map((noti) => (
            <div key={noti.id} className="mt-10 divide-y divide-gray-100 rounded-xl border border-gray-100 bg-pink-100">
              <details className="group p-6 [&_summary::-webkit-details-marker]:hidden" open>
                <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-gray-900">
                  <h2 className="text-lg font-medium">🎉 Bestie Alert! 🎉 Your Bestie added a product in her wishlist</h2>
                </summary>

                <p className="mt-4 leading-relaxed text-gray-700">
                  <article className="rounded-xl bg-orange-200 p-4 ring ring-pink-200 sm:p-6 lg:p-8">
                    <div className="flex items-start sm:gap-8">
                      <div>
                        <strong className="rounded border border-indigo-500 bg-indigo-500 px-3 py-1.5 text-[10px] font-medium text-white">
                          New Update
                        </strong>

                        <h3 className="mt-4 text-lg font-medium sm:text-xl">
                          <Link to="/product">
                          <div className="hover:underline"> {noti.productName}</div>
                          </Link>
                        </h3>

                        <p className="mt-1 text-sm text-gray-700">
                          Guess what? Your bestie <strong>{noti.name}</strong> just added a brand-new must-have to their wishlist! 🛍️✨ Don't miss out on the latest trend they’re eyeing – check it out now and stay ahead of the style game! 💃🕺
                        </p>

                        <div className="mt-4 sm:flex sm:items-center sm:gap-2">
                          <div className="flex items-center gap-1 text-gray-500">
                            #NewWishlistCrush #BestieGoals #ShoppingSpree
                          </div>
                        </div>
                      </div>
                    </div>
                  </article>
                </p>
              </details>
            </div>
          ))}
      </div>
    );
}
export default Notifications;