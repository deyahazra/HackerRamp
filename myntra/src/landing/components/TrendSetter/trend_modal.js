'use client'

import { useState } from 'react'
import { Dialog, DialogPanel, DialogTitle } from '@headlessui/react'
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline'
import { useHttpClient } from "../../../shared/components/hooks/http-hook";
import{useContext} from 'react';
import { AuthContext } from '../../../shared/context/auth-context';
import Swal from 'sweetalert2';
export default function Trend_Modal(props) {
    const { isLoading, error, sendRequest, clearError } = useHttpClient();
    const [hashtags, setHashtags] = useState(" ");
    const [selectedFile, setSelectedFile] = useState(null);
    const auth = useContext(AuthContext);
    const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
      };
      const handleHashtags = (event) => {
        setHashtags(event.target.value);
        };
      console.log(selectedFile);
    
    const handleAdd = async() => {
        // const jsonData = JSON.stringify({
        //     userId: auth.userId,
        //     theme:"Summer Splash",
        //     imageBlob: selectedFile
        // });
        const formData = new FormData();
          formData.append('userId', auth.userId);
          formData.append('theme', hashtags);
            formData.append('imageBlob', selectedFile);
        // console.log(jsonData);
        try{
            const response = await sendRequest(
                `https://myntrabackend-ip82.onrender.com/api/auth/add-post`,
                'POST',
                formData,
                
            );
            props.onResponse(response)
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Post Submitted successfully!",
              showConfirmButton: false,
              timer: 1500
            });
            // console.log(response);
            
        }
        catch(err){
            console.log(err);
        }
        props.setOpen(false);   
    }

//   const [open, setOpen] = useState(true)

  return (
    <Dialog open={props.open} onClose={props.setOpen} className="relative z-10">
      <Dialog.Backdrop
        transition
        className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
      />

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <Dialog.Panel
            transition
            className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-lg data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
          >
            <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
              <div className="sm:flex sm:items-start">
                
                <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left w-full">
                  <Dialog.Title as="h3" className="text-base font-semibold leading-6 text-gray-900">
                    Add Your Post
                  </Dialog.Title>
                <label for="Hashtags" class="block text-sm font-medium text-gray-700"> Hashtags </label>

                <textarea
                    onChange = {handleHashtags}
                    value={hashtags}
                    id="Hashtags"
                    class="mt-2 w-full rounded-lg border-gray-200 align-top shadow-sm sm:text-sm"
                    rows="4"
                    placeholder="Enter your hashtags..."
                ></textarea>
                {/* </div> */}
                  <div className="mt-2">
                    <label
                        for="UserEmail"
                        class="block w-full overflow-hidden rounded-md border border-gray-200 px-3 py-2 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
                        >
                        <span class="text-xs font-medium text-gray-700"> Upload your image </span>

                        <div className="mb-3 w-96">
                        <label
                            htmlFor="formFile"
                            className="mb-2 inline-block text-neutral-700 dark:text-neutral-200"
                        >
                            Click choose File
                        </label>
                        <input
                            onChange={handleFileChange}
                            className="relative m-0 block w-full min-w-0 flex-auto rounded border border-solid border-neutral-300 bg-clip-padding px-3 py-[0.32rem] text-base font-normal text-neutral-700 transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-neutral-100 file:px-3 file:py-[0.32rem] file:text-neutral-700 file:transition file:duration-150 file:ease-in-out file:[border-inline-end-width:1px] file:[margin-inline-end:0.75rem] hover:file:bg-neutral-200 focus:border-primary focus:text-neutral-700 focus:shadow-te-primary focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:file:bg-neutral-700 dark:file:text-neutral-100 dark:focus:border-primary"
                            type="file"
                            id="formFile"
                        />
                    </div>
                        </label>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
              <div
                onClick={handleAdd}
                className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
              >
                Add
              </div>
              <button
                type="button"
                data-autofocus
                onClick={() => props.setOpen(false)}
                className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
              >
                Cancel
              </button>
            </div>
          </Dialog.Panel>
        </div>
      </div>
    </Dialog>
  )
}
