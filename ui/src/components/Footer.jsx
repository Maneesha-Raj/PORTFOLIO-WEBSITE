import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaGlobe } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className=" bg-gray-800 items-center justify-center py-20">
      

        {/* Contact Information Section */}
        <h2 className="text-2xl font-semibold text-white mb-6 text-center ">Contact Me</h2>
        <div className="text-white flex  gap-32 p-8 justify-center">
          
          
          <div className="mb-2 flex gap-4">
            <strong>Phone:</strong> 
            <a href="tel:+918606639105" aria-label="Phone">
              <FaPhoneAlt size={24} />
            </a>
          </div>
          <div className="mb-2 flex gap-4">
            <strong>Email:</strong> <a href="mailto:maneesharaj25@gmail.com" aria-label="Email">
              <FaEnvelope size={24} />
            </a>
          </div>
          <div className="mb-4 flex gap-4">
            <strong>Website:</strong>   <a href="https://portfolio-website-64dc.vercel.app" target="_blank" rel="noopener noreferrer" aria-label="Website">
              <FaGlobe size={24} />
            </a>
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
       

      {/* Footer Copyright Section */}
      <div className="mt-16 text-center text-gray-500 text-sm">
        © Copyright Maneesha Raj
      </div>
    </div>
  );
};

export default Footer;

















// ----------------------------------------------------------------------------------------------------------------

