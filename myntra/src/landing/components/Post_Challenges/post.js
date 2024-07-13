import React,{useState} from "react";
import {useEffect} from "react";
// import pic from "../../../images/summer.png";
import summer from "../../../images/summer.png";
import Post_Modal from "./post_modal";

const Post = () => {
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
    return(
        <>

<section
  className="relative bg-cover bg-center bg-no-repeat"
  style={{ backgroundImage: `url(${summer})`, opacity: 0.8  }}
>
  <div
    className="absolute inset-0 bg-gray-900/75 sm:bg-transparent sm:from-gray-900/95 sm:to-gray-900/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"
  ></div>

  <div
    className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8"
  >
    <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">

      <div className="mt-80 flex flex-wrap gap-4 text-center">
        <div
        onClick={toggleModal}
          className="block w-full rounded bg-rose-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto mt-4"
        >
          Add your post
          <Post_Modal open={open} setOpen={setOpen} onResponse={handleResponse} />
        </div>

        <a
          href="#"
          className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-rose-600 shadow hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto mt-4"
        >
          Learn More
        </a>
      </div>
    </div>
  </div>
</section>
{responseData && (
  <section>
    <h1 className="text-4xl text-pink-600"style={{ fontWeight: 'bold', margin: '20px 0' }}>My Posts</h1>
    <div className="flex flex-wrap justify-left gap-4">
      <div className="block w-1/2">
        <img
          alt=""
          src={`data:image/png;base64,${responseData.image}`}
          className="h-64 w-full object-cover sm:h-80 lg:h-96"
        />
        <h3 className="mt-4 text-lg font-bold text-gray-900 sm:text-xl">{responseData.theme}</h3>
      </div>
    </div>
  </section>
)}
        </>
    )
}
export default Post;