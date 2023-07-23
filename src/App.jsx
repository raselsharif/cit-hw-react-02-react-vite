
import './App.css'
import Copyright from './assets/layouts/Copyright'
import Footer from './assets/layouts/Footer'
import Nav from './assets/layouts/Nav'
import RootLayout from './assets/layouts/RootLayout'
import Banner from './assets/sections/Banner'
import Blog from './assets/sections/Blog'
import Branches from './assets/sections/Branches'
import Company from './assets/sections/Company'
import Gallery from './assets/sections/Gallery'
import Map from './assets/sections/Map'
import Service from './assets/sections/Service'
import Sponsors from './assets/sections/Sponsors'
import Supplier from './assets/sections/Supplier'

import {
  createRoutesFromElements,
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route element={<RootLayout />}>
          <Route path='/' element={<Banner />} />
          <Route path='/Gallery' element={<Gallery />} />
          <Route path='/Blog' element={<Blog />} />
          <Route path='/Company' element={<Company />} />
          <Route path='/Map' element={<Map />} />
          <Route path='/Service' element={<Service />} />
        </Route>
      </>
    )
  );

  return (
    <>
      <RouterProvider
        router={router}
      />
      {/* <Nav />
      <Banner />
      <Supplier />
      <Gallery />
      <Service />
      <Company />
      <Sponsors />
      <Blog />
      <Map/>
      <Branches />
      <Footer />
      <Copyright /> */}
    </>
  )
}

export default App
