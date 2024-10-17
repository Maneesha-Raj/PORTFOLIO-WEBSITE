import React from 'react'

const Projects = () => {


const projects = [
    {
      pname: 'Review App',
      institute: 'Kerala Blockchain Academy',
      devtool: 'MERN Stack',
      description: 'Developed a web application to allow users to give reviews and ratings for products, enhancing user engagement and feedback collection.'
    },
    {
      pname: 'Trello Clone Dapp',
      institute: 'Kerala Blockchain Academy',
      devtool: 'Blockchain',
      description: 'Developed a decentralized application (DApp) for managing projects and allocating team members, achieving improved transparency and efficiency in project management.'
    }
    // Add more projects as required
  ];



  return (
    <div>
 
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold mb-4 text-center border-b py-10">PROJECTS</h2>
        <div className="flex flex-col">
          {projects.map((project, index) => (
            <div key={index} className="mb-8">
              <h3 className="text-xl font-semibold">{project.pname}</h3>
              <p className="text-gray-700">{project.institute} | {project.devtool}</p>
              <p className="text-gray-600 mt-2">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  





    </div>

  )
}

export default Projects
