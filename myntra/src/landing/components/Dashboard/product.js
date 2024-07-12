import React,{useState} from "react";
import {useContext} from "react";
import {useEffect} from "react";
import { useHttpClient } from "../../../shared/components/hooks/http-hook";
import { AuthContext } from '../../../shared/context/auth-context';
import LoadingSpinner from "../../../shared/components/UIElements/LoadingSpinner";
import pro1 from "../../../images/productimg1.jpg"
import pro2 from "../../../images/productimg2.jpg"
import pro3 from "../../../images/productimg3.jpg"
import pro4 from "../../../images/productimg4.jpg"
import { StarIcon } from '@heroicons/react/20/solid'
import Swal from 'sweetalert2';
const product = {
    name: 'Nike | Unisex Street Style Bi-color Logo Sneakers',
    price: '$298 USD',
    href: '#',
    breadcrumbs: [
      { id: 1, name: 'Men', href: '#' },
      { id: 2, name: 'Shoes', href: '#' },
    ],
    images: [
      {
        src: pro1,
        alt: 'Two each of gray, white, and black shirts laying flat.',
      },
      {
        src: pro2,
        alt: 'Model wearing plain black basic tee.',
      },
      {
        src: pro3,
        alt: 'Model wearing plain gray basic tee.',
      },
      {
        src: pro4,
        alt: 'Model wearing plain white basic tee.',
      },
    ],
    colors: [
      { name: 'White', class: 'bg-white', selectedClass: 'ring-gray-400' },
      { name: 'Gray', class: 'bg-gray-200', selectedClass: 'ring-gray-400' },
      { name: 'Black', class: 'bg-gray-900', selectedClass: 'ring-gray-900' },
    ],
    sizes: [
      { name: 'XXS', inStock: false },
      { name: 'XS', inStock: true },
      { name: 'S', inStock: true },
      { name: 'M', inStock: true },
      { name: 'L', inStock: true },
      { name: 'XL', inStock: true },
      { name: '2XL', inStock: true },
      { name: '3XL', inStock: true },
    ],
    description:
      'DUNK Sneakers from Nike, Street Style, Unisex, Street Style, Logo, Bi-color, 2019-20FW',
    highlights: [
      'Model: DUNK Sneakers',
      'Style: Street Style',
      'Design Features: Street Style, Logo, Bi-color',
      'Collection: 2019-20 Fall/Winter (FW)',
    ],
    details:
      "The DUNK Sneakers from Nike, part of the 2019-20 Fall/Winter collection, are a versatile addition to any streetwear wardrobe. Designed with a unisex appeal, these sneakers embody the essence of street style with their bold bi-color design and prominent logo detailing. Perfect for those who want to make a statement, the DUNK Sneakers seamlessly blend fashion and functionality, offering both comfort and a distinctive look. Whether you're hitting the streets or making a fashion-forward appearance, these sneakers are the ideal choice for showcasing your style.",
  }

  const reviews = { href: '#', average: 4, totalCount: 117 }
  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }
  
  
  export default function Product() {
    const { isLoading, error, sendRequest, clearError } = useHttpClient();
    const auth = useContext(AuthContext);
    const handleAdd = async() => {
        console.log(auth.userId)
        const jsonData = JSON.stringify({
            userId: auth.userId,
            productName: product.name,
            productPrice: product.price,
        });
        console.log(jsonData);
        try{
            const responseData = await sendRequest(
                "https://myntrabackend-ip82.onrender.com/api/auth/add-to-wishlist",
                "POST",
                jsonData,
                {
                    "Content-Type": "application/json"
                }
            )
            console.log(responseData);
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Added to your wishlist! 🥳🎇❤️",
              showConfirmButton: false,
              timer: 1500
            });
        }
        catch(err) {
            console.log(err);
        }
}
    const [selectedColor, setSelectedColor] = useState(product.colors[0])
    const [selectedSize, setSelectedSize] = useState(product.sizes[2])
  
    return (
      <div className="bg-white">
        <div className="pt-6">
          <nav aria-label="Breadcrumb">
            <ol role="list" className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
              {product.breadcrumbs.map((breadcrumb) => (
                <li key={breadcrumb.id}>
                  <div className="flex items-center">
                    <a href={breadcrumb.href} className="mr-2 text-sm font-medium text-gray-900">
                      {breadcrumb.name}
                    </a>
                    <svg
                      fill="currentColor"
                      width={16}
                      height={20}
                      viewBox="0 0 16 20"
                      aria-hidden="true"
                      className="h-5 w-4 text-gray-300"
                    >
                      <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                    </svg>
                  </div>
                </li>
              ))}
              <li className="text-sm">
                <a href={product.href} aria-current="page" className="font-medium text-gray-500 hover:text-gray-600">
                  {product.name}
                </a>
              </li>
            </ol>
          </nav>
  
          {/* Image gallery */}
          <div className="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
            <div className="aspect-h-4 aspect-w-3 hidden overflow-hidden rounded-lg lg:block">
              <img
                alt={product.images[0].alt}
                src={product.images[0].src}
                className="h-full w-full object-cover object-center"
              />
            </div>
            <div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
              <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
                <img
                  alt={product.images[1].alt}
                  src={product.images[1].src}
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
                <img
                  alt={product.images[2].alt}
                  src={product.images[2].src}
                  className="h-full w-full object-cover object-center"
                />
              </div>
            </div>
            <div className="aspect-h-5 aspect-w-4 lg:aspect-h-4 lg:aspect-w-3 sm:overflow-hidden sm:rounded-lg">
              <img
                alt={product.images[3].alt}
                src={product.images[3].src}
                className="h-full w-full object-cover object-center"
              />
            </div>
          </div>
  
          {/* Product info */}
          <div className="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16">
            <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
              <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">{product.name}</h1>
            </div>
  
            {/* Options */}
            <div className="mt-4 lg:row-span-3 lg:mt-0">
              <h2 className="sr-only">Product information</h2>
              <p className="text-3xl tracking-tight text-gray-900">{product.price}</p>
  
              Reviews
              <div className="mt-6">
                <h3 className="sr-only">Reviews</h3>
                <div className="flex items-center">
                  <div className="flex items-center">
                    {[0, 1, 2, 3, 4].map((rating) => (
                      <StarIcon
                        key={rating}
                        aria-hidden="true"
                        className={classNames(
                          reviews.average > rating ? 'text-gray-900' : 'text-gray-200',
                          'h-5 w-5 flex-shrink-0',
                        )}
                      />
                    ))}
                  </div>
                  <p className="sr-only">{reviews.average} out of 5 stars</p>
                  <a href={reviews.href} className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500">
                    {reviews.totalCount} reviews
                  </a>
                </div>
              </div>
  
              <form className="mt-10">
                {/* Colors */}
                
  
                <div className="flex justify-center space-x-4">
                  <div
                    className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-pink-600 px-8 py-3 text-base font-medium text-white hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  >
                    Add to Bag
                  </div>
                  <div
                    onClick={handleAdd} // You might want to use a different handler or modify it for this button
                    className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-gray-400 px-8 py-3 text-base font-medium text-white hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  >
                    Add to Wishlist
                  </div>
                </div>
              </form>
            </div>
  
            <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
              {/* Description and details */}
              <div>
                <h3 className="sr-only">Description</h3>
  
                <div className="space-y-6">
                  <p className="text-base text-gray-900">{product.description}</p>
                </div>
              </div>
  
              <div className="mt-10">
                <h3 className="text-sm font-medium text-gray-900">Highlights</h3>
  
                <div className="mt-4">
                  <ul role="list" className="list-disc space-y-2 pl-4 text-sm">
                    {product.highlights.map((highlight) => (
                      <li key={highlight} className="text-gray-400">
                        <span className="text-gray-600">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
  
              <div className="mt-10">
                <h2 className="text-sm font-medium text-gray-900">Details</h2>
  
                <div className="mt-4 space-y-6">
                  <p className="text-sm text-gray-600">{product.details}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
