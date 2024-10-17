import React from 'react'

const Education = () => {
  return (
    // <div>


 
      
    <div className="bg-gray-100  h-full px-48 py-24">
      <h2 className="text-center text-3xl font-bold mb-8 border-b p-10">EDUCATION</h2>
      
      <br />
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* First Entry */}
        <div className="text-center md:text-left">
          <p className="font-semibold">2024 </p>
          <p className="text-lg font-bold mb-2 ">P G Diploma in Blockchain</p>
          {/* <p><span className='text-6xl text-purple-700'>.</span></p> */}
          <hr />
         
          <br />
          <p className="text-purple-500 mb-4">KERALA BLOCKCHAIN ACADEMY</p>
          {/* <p className="text-gray-600">
            North Carolina, USA
          </p>
          <p className="text-gray-500 mt-2">
            Duis aute irure dolor in reprehenderit in vol patate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occana inna tecat cupidatat non proident.
          </p> */}
        </div>

        {/* Second Entry */}
        <div className="text-center md:text-left">
          <p className="font-semibold">2017 - 2020</p>
          <p className="text-lg font-bold mb-2">Master of Computer Applications</p>
          <hr />
          <br />
          <p className="text-purple-500 mb-4">COCHIN UNIVERSITY OF SCIENCE AND TECHNOLOGY</p>
          {/* <p className="text-gray-600">
            North Carolina, USA
          </p>
          <p className="text-gray-500 mt-2">
            Duis aute irure dolor in reprehenderit in vol patate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occana inna tecat cupidatat non proident.
          </p> */}
        </div>

        {/* Third Entry */}
        <div className="text-center md:text-left">
          <p className="font-semibold">2014 - 2017</p>
          <p className="text-lg font-bold mb-2">Bachelor of Computer Science</p>
          <hr />
          <br />
          <p className="text-purple-500 mb-4">M G UNIVERSITY</p>
          {/* <p className="text-gray-600">
            Bolton, United Kingdom
          </p>
          <p className="text-gray-500 mt-2">
            Duis aute irure dolor in reprehenderit in vol patate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occana inna tecat cupidatat non proident.
          </p> */}
        </div>
      </div>
    </div>
 




    // </div>
  )
}

export default Education
