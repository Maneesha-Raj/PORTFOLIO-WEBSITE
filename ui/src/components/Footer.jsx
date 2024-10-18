import React from 'react';

const Footer = () => {
  return (
    <div className=" bg-gray-800 items-center justify-center py-20">
      {/* <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8"> */}

        {/* Contact Form Section */}
        {/* <div className="bg-white p-8 shadow-lg rounded-lg"> */}
          {/* <h2 className="text-2xl font-semibold text-gray-900 mb-6">Contact Me</h2> */}

           {/* <form>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
              <div>
                <input
                  type="text"
                  placeholder="Name*"
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 outline-none"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Email*"
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 outline-none"
                />
              </div>
            </div>

            
            <div className="mb-4">
              <input
                type="text"
                placeholder="Subject"
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 outline-none"
              />
            </div>

           
            <div className="mb-6">
              <textarea
                placeholder="Message"
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 outline-none h-32 resize-none"
              ></textarea>
            </div>

            
            <div className="flex justify-center">
              <button className="bg-purple-500 text-white px-6 py-3 rounded-md hover:bg-purple-600 transition-colors">
                Submit
              </button>
            </div>
          </form>
        */}
        {/* </div>  */}

        {/* Contact Information Section */}
        <h2 className="text-2xl font-semibold text-white mb-6 text-center ">Contact Me</h2>
        <div className="text-white flex  gap-32 p-8 justify-center">
          {/* <h3 className="text-2xl font-semibold mb-4">Maneesha Raj</h3> */}
          {/* <p className="text-gray-600 mb-2">Full-stack Developer</p> */}
          
          <div className="mb-2">
            <strong>Phone:</strong> +91 8606639105
          </div>
          <div className="mb-2">
            <strong>Email:</strong> maneesharaj25@gmail.com
          </div>
          <div className="mb-4">
            <strong>Website:</strong>  https://portfolio-website-64dc.vercel.app
          </div>

          {/* Social Icons */}
          <div className="flex space-x-4 text-gray-500 mt-6">
            <a href="#" className="hover:text-gray-900">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="hover:text-gray-900">
              <i className="fab fa-dribbble"></i>
            </a>
            <a href="#" className="hover:text-gray-900">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="hover:text-gray-900">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="#" className="hover:text-gray-900">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      {/* </div>  

      {/* Footer Copyright Section */}
      <div className="mt-16 text-center text-gray-500 text-sm">
        © Copyright Maneesha Raj
      </div>
    </div>
  );
};

export default Footer;

















// ----------------------------------------------------------------------------------------------------------------


// import React from 'react'

// const Footer = () => {
//   return (
//     <div>
      

  
//     <footer className="bg-gray-800 py-8 text-white text-center">
//       <h2 className="text-2xl font-semibold mb-4">Contact Me</h2>
//       <p className="mb-4">Feel free to reach out for any project or just to say hi!</p>
//       <div className="flex justify-center space-x-4">
//         <input
//           type="text"
//           placeholder="Your Name"
//           className="px-4 py-2 rounded-md bg-gray-600 text-white"
//         />
//         <input
//           type="email"
//           placeholder="Your Email"
//           className="px-4 py-2 rounded-md bg-gray-600 text-white"
//         />
//         <button className="px-4 py-2 bg-indigo-600 rounded-md">
//           Send
//         </button>
//       </div>
//     </footer>
  



//     </div>
//   )
// }

// export default Footer
