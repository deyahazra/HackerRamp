import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../pages/home.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faHandshake } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faMessage } from '@fortawesome/free-solid-svg-icons'
import website from "../../../images/websiteee.jpg"
import { ArrowPathIcon, CloudArrowUpIcon, FingerPrintIcon, LockClosedIcon ,ServerIcon} from '@heroicons/react/24/outline'

export default function About_us() {
    return(
        <div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <svg
          className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="e813992c-7d03-4cc4-a2bd-151760b470a0"
              width={200}
              height={200}
              x="50%"
              y={-1}
              patternUnits="userSpaceOnUse"
            >
              <path d="M100 200V.5M.5 .5H200" fill="none" />
            </pattern>
          </defs>
          <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
            <path
              d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
              strokeWidth={0}
            />
          </svg>
          <rect width="100%" height="100%" strokeWidth={0} fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)" />
        </svg>
      </div>
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">About Us</h1>
              <p className="mt-6 text-xl leading-8 text-gray-700">
              Welcome to Myntra Style Quest, your ultimate destination for fashion curated especially for Gen Z! At Myntra Style Quest, we believe fashion is not just about clothing—it's about creating a community, sharing experiences, and expressing individuality in the most stylish way.
              </p>
            </div>
          </div>
        </div>
        <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
          <img
            className="w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
            src={website}
            alt=""
          />
        </div>
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
              <p>
              Here's what sets Myntra Style Quest apart:
              </p>
              <ul role="list" className="mt-8 space-y-8 text-gray-600">
                
                <li className="flex gap-x-3">
                <FontAwesomeIcon icon={faHandshake} className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true"/>
                  <span>
                    <strong className="font-semibold text-gray-900">Social Shopping Integration</strong>Stay connected with your friends while you shop! With our social shopping features, you can add friends, see what items they have wishlisted, and get notified about their latest fashion picks. Share your style, get inspired, and make shopping a fun, collaborative experience.
                  </span>
                </li>
                <li className="flex gap-x-3">
                <FontAwesomeIcon icon={faUser} className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true"/>
                  <span>
                    <strong className="font-semibold text-gray-900">Engaging Challenges</strong> We keep the excitement alive with a range of interactive challenges designed to enhance your engagement. Participate in fashion quizzes to test your style knowledge, post your special looks, and join trending hashtag challenges to showcase your unique flair. Compete, share, and win—there's always something new to try!
                  </span>
                </li>
                <li className="flex gap-x-3">
                <FontAwesomeIcon icon={faMessage} className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true"/>
                  <span>
                    <strong className="font-semibold text-gray-900">Fashion Community</strong> Myntra Style Quest is more than just a shopping platform; it's a vibrant community where fashion enthusiasts come together. Follow your favorite fashion icons, discover new trends, and be a part of a dynamic group that celebrates individuality and creativity.
                  </span>
                </li>
              </ul>
              <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">Join us on Myntra Style Quest and be a part of a fashion revolution that's all about you. Discover, engage, and express your style like never before. Your fashion journey starts here!</h2>
              
            </div>
          </div>
        </div>
      </div>
    </div>
    )
}
