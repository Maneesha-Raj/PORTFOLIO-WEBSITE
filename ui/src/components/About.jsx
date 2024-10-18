import React from 'react'
import profile from '../assets/images/profile.jpg'

const About = () => {
  return (
    <div className='bg-purple-700 p-10'>
  
    <section className="bg-gray-800 py-16 mx-28 mb-28 h-full  rounded-md drop-shadow-2xl z-40 border-2 border-white object-cover">
      <div className="container mx-auto flex flex-col md:flex-row items-center px-4 ">
        <div className="w-full md:w-1/2 mx-28  ">
          <h2 className="text-white text-2xl font-semibold mb-4">ABOUT ME</h2>
          <p className="text-white mb-4 ">
          Hi, I'm Maneesha, a passionate web developer with a love for crafting visually appealing 
          and highly functional websites and web applications. With a keen eye for design and a strong 
          technical background, I strive to deliver intuitive user experiences and responsive designs that
           look great on any device. My journey in web development has been fueled by curiosity, continuous
            learning, and the desire to push the boundaries of what’s possible in the digital space.
          </p>
          <br />

            {/* Contact Details */}
          <div className="flex gap-8 justify-between text-white text-md border-t border-gray-300 pt-6">
            <div>
              <p><strong>Phone:</strong> +91 8606639105</p>
            </div>
            <div>
              <p><strong>Email:</strong> maneesharaj25@gmail.com</p>
            </div>
            <div>
              <p><strong>Website:</strong><br /> https://portfolio-website-64dc.vercel.app</p>
            </div>
          </div>
          {/* </div> */}

          {/* gradient-to-b from-purple-700 from-10%  to-white to-90% */}

          
        </div>

        


        <div className="w-full md:w-1/2 mt-8 md:mt-0 flex justify-center">
          <img
            src={profile} // Replace with actual image URL
            alt="profile"
            className="w-6/12 h-fit drop-shadow-2xl"
          />
        </div>
      </div>
    </section>
 

    </div>
  )
}

export default About
