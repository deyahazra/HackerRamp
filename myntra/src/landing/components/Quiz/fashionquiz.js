import React,{useState} from "react";
import "../Post_Challenges/post.css"
import { useRef } from "react";
import quiz from "../../../images/quizbg.png"
import heading from "../../../images/heading.png"
import { useNavigate } from 'react-router-dom';
import { useHttpClient } from "../../../shared/components/hooks/http-hook";
import { AuthContext } from '../../../shared/context/auth-context';
import { useContext } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import brand from "../../../images/brand.png"
import asthetic from "../../../images/asthetics.png"
import LoadingSpinner from "../../../shared/components/UIElements/LoadingSpinner";

const Fashion_Quiz = () => {
  const [challengeType, setChallengeType] = useState('ongoing');

    // const randomRec = [...rec].sort(() => 0.5 - Math.random()).slice(0, 3);
    return (
        <>
      <section className="overflow-hidden bg-orange-200 opacity-80 sm:grid sm:grid-cols-2 sm:items-center p-16">
        <div className="p-8 md:p-12 lg:px-16 lg:py-24">
          <div className="mx-auto max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
            <h1 className="text-2xl font-bold text-pink-600 md:text-5xl">
            Fashion IQ: Test Your Style Savvy
            </h1>
            <p className="hidden text-gray-500 md:mt-4 md:block">
            Step up your style game with our fashion quizzes! Challenge your fashion knowledge, discover new trends, and have fun while learning. Join our community and see how well you know the world of fashion
            </p>
            <div className="mt-4 md:mt-8">
              <a
                href="#list"
                className="inline-block rounded bg-pink-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-orange-700 focus:outline-none focus:ring focus:ring-yellow-400"
              >
                Get Started Today
              </a>
            </div>
          </div>
        </div>
        <img
          alt="Post"
          src={quiz}
          className="h-[200%] w-[200%] object-cover sm:h-[calc(100%_-_2rem)] sm:self-end sm:rounded-ss-[30px] md:h-[calc(100%_-_4rem)] md:rounded-ss-[60px]"
        />
      </section>
      <section className='sect2' id="list">
        <img src={heading} className="heading mx-auto w-[40%] h-[40]"/>
        <div>
          <button
            className="ml-10 mr-5 bg-pink-600 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => setChallengeType('ongoing')}
          >
            Ongoing Challenges
          </button>
          <button
            className="bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => setChallengeType('past')}
          >
            Past Challenges
          </button>
        </div>
        {challengeType === 'ongoing' ? (
          <div  className="card list mx-auto mt-10 grid max-w-lg grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            <Link to="/quiz-set">
            <div  className="group relative block bg-black">
            <img
              alt=""
              src={brand}
              className="absolute inset-0 h-full w-full object-content opacity-75 transition-opacity group-hover:opacity-50"
            />
            
            <div className="relative p-4 sm:p-6 lg:p-8">
              <p className="text-sm font-medium uppercase tracking-widest text-pink-500">Challenge 1</p>

              <p className="text-xl font-bold text-white sm:text-2xl">Brand</p>

              <div className="mt-32 sm:mt-48 lg:mt-64">
                <div
                  className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
                >
                  <p className="text-sm text-white">
                  Think you know your fashion brands? Test your knowledge with our Guess the Brand Quiz! Identify logos, taglines, and signature styles from top fashion labels. Prove your brand expertise and see if you can ace the challenge!
                  </p>
                </div>
              </div>
            </div>
            
          </div>
          </Link>
          <div className="group relative block bg-black">
            <Link to="/quiz-set2">
          <img
            alt=""
            src={asthetic}
            className="absolute inset-0 h-full w-full object-content opacity-75 transition-opacity group-hover:opacity-50"
          />

          <div className="relative p-4 sm:p-6 lg:p-8">
            <p className="text-sm font-medium uppercase tracking-widest text-pink-500">Challenge 2</p>

            <p className="text-xl font-bold text-white sm:text-2xl">July Speacial</p>

            <div className="mt-32 sm:mt-48 lg:mt-64">
              <div
                className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
              >
                <p className="text-sm text-white">
                How well do you know your fashion aesthetics? Take our Know Your Aesthetics Quiz to discover and define your unique style. Explore different fashion trends and see which ones resonate with you. Test your aesthetic knowledge and refine your fashion sense!
                </p>
              </div>
            </div>
          </div>
          </Link>
        </div>
          </div>
        ) : (
          <div className="card list mx-auto mt-10 grid max-w-lg grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                    <a href="#" className="group relative block bg-black">
          <img
            alt=""
            src="https://images.unsplash.com/photo-1603871165848-0aa92c869fa1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=772&q=80"
            className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
          />

          <div className="relative p-4 sm:p-6 lg:p-8">
            <p className="text-sm font-medium uppercase tracking-widest text-pink-500">Developer</p>

            <p className="text-xl font-bold text-white sm:text-2xl">Tony Wayne</p>

            <div className="mt-32 sm:mt-48 lg:mt-64">
              <div
                className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
              >
                <p className="text-sm text-white">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis perferendis hic asperiores
                  quibusdam quidem voluptates doloremque reiciendis nostrum harum. Repudiandae?
                </p>
              </div>
            </div>
          </div>
        </a>
          </div>
        )}
      </section>

</>
    )
}
export default Fashion_Quiz;