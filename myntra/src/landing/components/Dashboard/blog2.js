import React,{useState} from "react";
import {useContext} from "react";
import {useEffect} from "react";
import { Link } from "react-router-dom";
import "./dashboard.css"
import { useHttpClient } from "../../../shared/components/hooks/http-hook";
import { AuthContext } from '../../../shared/context/auth-context';
import LoadingSpinner from "../../../shared/components/UIElements/LoadingSpinner";
const Blog2 = () => {
  const [blog, setBlog] = useState([]);
  const auth = useContext(AuthContext);
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
    return(
      
        <div className="bg-white bg-opacity-10 py-24 sm:py-10">
          {/* {!isLoading && <LoadingSpinner asOverlay text="Fetching Your Dashboard..."/>} */}
          <section>
  <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
    <header className="text-center">
      <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">New Collection</h2>

      <p className="mx-auto mt-4 max-w-md text-gray-500">
      🌟 Stay Trendy! 🌟

The latest trends have just dropped, and they’re calling your name! 🔥✨ Don't miss out on the hottest styles of the season – tap to view now and update your wardrobe with the freshest looks! 👗👠  
      </p>
    </header>

    <ul className="mt-8 grid grid-cols-1 gap-4 lg:grid-cols-3">
      <li>
        <Link to="/product">
        <div className="group relative block">
          <img
            src="https://images.unsplash.com/photo-1618898909019-010e4e234c55?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
            alt=""
            className="aspect-square w-full object-cover transition duration-500 group-hover:opacity-90"
          />

          <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
            <h3 className="text-xl font-medium text-white">Casual Trainers</h3>

            <span
              className="mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white"
            >
              Shop Now
            </span>
          </div>
        </div>
        </Link>
      </li>

      <li>
      <Link to="/product">
        <div className="group relative block">
          <img
            src="https://images.unsplash.com/photo-1624623278313-a930126a11c3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
            alt=""
            className="aspect-square w-full object-cover transition duration-500 group-hover:opacity-90"
          />

          <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
            <h3 className="text-xl font-medium text-white">Winter Jumpers</h3>

            <span
              className="mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white"
            >
              Shop Now
            </span>
          </div>
        </div>
        </Link>
      </li>

      <li className="lg:col-span-2 lg:col-start-2 lg:row-span-2 lg:row-start-1">
        <Link to="/product">
        <div className="group relative block">
          <img
            src="https://images.unsplash.com/photo-1593795899768-947c4929449d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2672&q=80"
            alt=""
            className="aspect-square w-full object-cover transition duration-500 group-hover:opacity-90"
          />

          <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
            <h3 className="text-xl font-medium text-white">Skinny Jeans Blue</h3>

            <span
              className="mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white"
            >
              Shop Now
            </span>
          </div>
        </div>
        </Link>
      </li>
    </ul>
  </div>
</section>
    </div>
    )
}
export default Blog2;