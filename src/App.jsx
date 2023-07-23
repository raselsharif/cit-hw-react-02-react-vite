
import './App.css'
import './Responsive.css'
import RootLayout from './assets/layouts/RootLayout'
import Banner from './assets/sections/Banner'
import Blog from './assets/sections/Blog'
import Company from './assets/sections/Company'
import Gallery from './assets/sections/Gallery'
import Map from './assets/sections/Map'
import Service from './assets/sections/Service'

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
          <Route path='/gallery' element={<Gallery />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/company' element={<Company />} />
          <Route path='/map' element={<Map />} />
          <Route path='/service' element={<Service />} />
        </Route>
      </>
    )
  );

  return (
    <>
      <RouterProvider
        router={router}
      />
    </>
  )
}

export default App
