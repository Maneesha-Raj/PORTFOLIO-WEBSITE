// import React from 'react'
import React from 'react';
import Gitlogo from '../assets/images/github-logo.png'
import Linkedinlogo from '../assets/images/linkedin-sign.png'
// import { FaGithub, FaDribbble, FaBehance, FaFlickr, FaBitbucket } from 'react-icons/fa'; // Icons for social media platforms
// import { SiThemeforest, SiSquarespace } from 'react-icons/si'; // Icons for other platforms

const Profile = () => {
  return (
    <div>

<div className="bg-white p-28">
  <h2 className="text-center text-3xl font-bold mb-8 border-b p-12">PROFILES</h2>

  <div className="max-w-2xl p-12  mx-auto grid grid-cols-2 md:grid-cols-4 gap-2 text-center">
    {/* First Row */}
    <div className="flex flex-col items-center ">
      <img src={Gitlogo} alt="Github" className="w-10 h-10 mb-2" />
      <p className="text-gray-600">Github</p>
    </div>

    {/* Vertical line between icons */}
    <div className="flex justify-center items-center">
      <div className="h-20 w-1 bg-gray-400"></div> {/* Height is now smaller to match icons */}
    </div>

    <div className="flex flex-col items-center">
      <img src={Linkedinlogo} alt="LinkedIn" className="w-10 h-10 mb-2  " />
      <p className="text-gray-600">LinkedIn</p>
    </div>
  </div>
</div>






      

    {/* <div className="bg-gray-100 py-8">
      <h2 className="text-center text-2xl font-bold mb-8">PROFILES</h2>
      
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
        {/* First Row */}
       
        {/* <div className="flex flex-col items-center">
          <img src={Gitlogo} alt="Github" className="w-10 h-10 mb-2" />
          <p className="text-gray-600">Github</p>
        </div>

        <div className="h-28 w-1 bg-gray-400"></div>

        <div className="flex flex-col items-center">
          <img src={Linkedinlogo} alt="LinkedIn" className="w-10 h-10 mb-2" />
          <p className="text-gray-600">LinkedIn</p>
        </div>  */}


         {/* <div className="flex flex-col items-center">
          <img src="/icons/themeforest.svg" alt="Themeforest" className="w-10 h-10 mb-2" />
          <p className="text-gray-600">Themeforest</p>
        </div>
        <div className="flex flex-col items-center">
          <img src="/icons/dribbble.svg" alt="Dribbble" className="w-10 h-10 mb-2" />
          <p className="text-gray-600">Dribbble</p>
        </div>
        <div className="flex flex-col items-center">
          <img src="/icons/behance.svg" alt="Behance" className="w-10 h-10 mb-2" />
          <p className="text-gray-600">Behance</p>
        </div> */}

        {/* Second Row */}
        {/* <div className="flex flex-col items-center">
          <img src="/icons/flickr.svg" alt="FlickR" className="w-10 h-10 mb-2" />
          <p className="text-gray-600">FlickR</p>
        </div>
        <div className="flex flex-col items-center">
          <p className="text-4xl text-gray-600 mb-2">😊</p>
          <p className="text-gray-600">SmungMung</p>
        </div>
        <div className="flex flex-col items-center">
          <img src="/icons/squarespace.svg" alt="SquareSpace" className="w-10 h-10 mb-2" />
          <p className="text-gray-600">SquareSpace</p>
        </div>
        <div className="flex flex-col items-center">
          <img src="/icons/bitbucket.svg" alt="BitBucket" className="w-10 h-10 mb-2" />
          <p className="text-gray-600">BitBucket</p>
        </div> */}
      </div>
    // </div>
 






    // </div>
  )
}

export default Profile
