import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from "react-router-dom"


import About from './components/About'
import Skills from './components/Skills'

import Footer from './components/Footer'
import Education from './components/Education'
import Projects from './components/Projects'
import Profile from './components/Profile'

import Indexpage from "./pages/Indexpage"
// import './App.css'

function App() {
  

  const router=createBrowserRouter(
    createRoutesFromElements(
      <>

          <Route>

                <Route path="/" element={<Indexpage />} /> 
                <Route path="/about" element={<About />} />
                <Route path="/education" element={<Education />} />
                <Route path="/Skills" element={<Skills/>} />
                <Route path="/pojects" element={<Projects />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/contact" element={<Footer />} /> 

          </Route>

          
                {/* <Route path="/" element={<Indexpage />} />
                <Route path="/sign-up" element={<Signuppage />} />
                
                <Route path="/products" element={<Productlistpage />} />
                <Route path="/all-products" element={<ProductsPage/>} />
                <Route path="/add-product" element={<Addproductpage />} />
                <Route path="/update-product/:id" element={<Editproductpage />} />
                <Route path="/view-product/:id" element={<Addreviewpage />} loader={productLoader} />
                <Route path="/product-reviews/:id" element={<Viewreviewpage />} loader={productLoader} />
                <Route path="/review-display/:id" element={<ReviewDisplayPage/>} loader={prodLoader} />
                <Route path="/user-home" element={<Userprofilepage/>} />
                <Route path="/admin-home" element={<Adminhomepage />} />
                <Route path="/user-home/reviewed-products" element={<UserReviewsPage/>} /> */}
          
      </>
    )
  )




  return (
    <>
         <RouterProvider router={router} />
    </>
  )
}

export default App
