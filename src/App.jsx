
import './App.css'
import Copyright from './assets/layouts/Copyright'
import Footer from './assets/layouts/Footer'
import Nav from './assets/layouts/Nav'
import Banner from './assets/sections/Banner'
import Blog from './assets/sections/Blog'
import Branches from './assets/sections/Branches'
import Company from './assets/sections/Company'
import Gallery from './assets/sections/Gallery'
import Service from './assets/sections/Service'
import Sponsors from './assets/sections/Sponsors'
import Supplier from './assets/sections/Supplier'

function App() {


  return (
    <>
     <Nav/>
     <Banner/>
     <Supplier/>
     <Gallery/>
     <Service/>
     <Company/>
     <Sponsors/>
     <Blog/>
     {/* <Map/> */}
     <Branches/>
     <Footer/>
     <Copyright/>
    </>
  )
}

export default App
