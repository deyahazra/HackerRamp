import React,{useState} from "react";
import "./yoga.css"
import { useRef } from "react";
import post_perfect from "../../../images/post_perfect.png"
import heading from "../../../images/heading.png"
import { useNavigate } from 'react-router-dom';
import { useHttpClient } from "../../../shared/components/hooks/http-hook";
import { AuthContext } from '../../../shared/context/auth-context';
import { useContext } from "react";
import { useEffect } from "react";
import summer from "../../../images/summer.png"
import vintage from "../../../images/vintage.png"
import ootd from "../../../images/ootd.png"
import { Link } from "react-router-dom";
import LoadingSpinner from "../../../shared/components/UIElements/LoadingSpinner";

const Post_Perfect = () => {
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const auth = useContext(AuthContext);
  const val = localStorage.getItem('refresh');
  const [refresh2, setRefresh2] = useState(0);
  const [bodypart, setBodypart] = useState('');
  const [reason, setReason] = useState('');
  const [challengeType, setChallengeType] = useState('ongoing');
  const navigate = useNavigate();
  const [rec, setRec] = useState([]);
  const [openModal, setOpenModal] = useState(false)
    const cancelButtonRef = useRef(null)
    const handleApi = async () => {
      try {
        const data = {
          'first': bodypart,
          'second': reason,
      };
      console.log(typeof(bodypart));
      console.log(data);

          const response=await sendRequest(
              `https://med-ai-api.onrender.com/yoga`,
              'POST',
              JSON.stringify(data),
              {
                  'Content-Type': 'application/json',
              }
              );
              setRefresh2(refresh2+1);
              localStorage.setItem('refresh2', refresh2);
              console.log(response);
              setOpenModal(false);
              } catch (err) {
                  console.log(err);
                  }
          };
  

    const handleYoga = (yogaName) => {
      navigate('/yoga_cam', { state: { yogaName } });
    }
    useEffect(() => {
      const fetchRec = async () => {
        try {
          const responseData = await sendRequest(
            `https://med-ai-api.onrender.com/get_yoga_recommendations`,
            'GET',
            null,
            {
              'Content-Type': 'application/json',
            }
          );
          setRec(responseData);
          console.log(responseData);
        } 
        catch (err) {
          console.log(err);
        }
      };
      fetchRec();
    }
    , [refresh2]);
    console.log(refresh2);
    if (rec.length > 0) {
      console.log(rec);
  }
    // const randomRec = [...rec].sort(() => 0.5 - Math.random()).slice(0, 3);
    return (
        <>
      <section className="overflow-hidden bg-orange-200 opacity-80 sm:grid sm:grid-cols-2 sm:items-center p-16">
        <div className="p-8 md:p-12 lg:px-16 lg:py-24">
          <div className="mx-auto max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
            <h1 className="text-2xl font-bold text-pink-600 md:text-5xl">
              Post Perfect: Where Style Meets Story
            </h1>
            <p className="hidden text-gray-500 md:mt-4 md:block">
              Style a summer festival look" or "Recreate a celebrity outfit" to earn "Super Coins.". You can even have a fashion duel with your squad.
              Post your creations, vote on others' outfits,
              and climb the leaderboard.
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
          src={post_perfect}
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
            <Link to="/challenges">
            <div  className="group relative block bg-black">
            <img
              alt=""
              src={summer}
              className="absolute inset-0 h-full w-full object-content opacity-75 transition-opacity group-hover:opacity-50"
            />
            
            <div className="relative p-4 sm:p-6 lg:p-8">
              <p className="text-sm font-medium uppercase tracking-widest text-pink-500">Challenge 1</p>

              <p className="text-xl font-bold text-white sm:text-2xl">Summer Special</p>

              <div className="mt-32 sm:mt-48 lg:mt-64">
                <div
                  className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
                >
                  <p className="text-sm text-white">
                  Dive into the vibrant vibes of summer! Show off your best summer outfits and share your sun-soaked style with the community. Whether it's beachwear, casual chic, or festival fashion, let your summer spirit shine through your photos. Join the Summer Splash Challenge now and inspire others with your sizzling summer looks!
                  </p>
                </div>
              </div>
            </div>
            
          </div>
          </Link>
          <div className="group relative block bg-black">
          <img
            alt=""
            src={vintage}
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
                Step back in time with style! Embrace the charm of yesteryears by dressing in your favorite vintage outfits and sharing your classic looks. From retro glam to old-school cool, let your photos capture the essence of bygone eras. Join the Vintage Vibes Challenge and celebrate timeless fashion with the community!
                </p>
              </div>
            </div>
          </div>
        </div>
          <div className="group relative block bg-black">
        <img
          alt=""
          src={ootd}
          className="absolute inset-0 h-full w-full object-content opacity-75 transition-opacity group-hover:opacity-50"
        />

        <div className="relative p-4 sm:p-6 lg:p-8">
          <p className="text-sm font-medium uppercase tracking-widest text-pink-500">Challenge 3</p>

          <p className="text-xl font-bold text-white sm:text-2xl">Daily</p>

          <div className="mt-32 sm:mt-48 lg:mt-64">
            <div
              className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
            >
              <p className="text-sm text-white">
              Showcase your daily style! Share your "Outfit of the Day" and inspire others with your unique fashion sense. Whether it's casual, chic, or bold, let your everyday looks make a statement. Join the OOTD Challenge and become a trendsetter in our vibrant community!
              </p>
            </div>
          </div>
        </div>
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
export default Post_Perfect;