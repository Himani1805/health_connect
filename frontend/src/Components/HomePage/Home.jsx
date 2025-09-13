import React from 'react'
import Banner from './Banner';
import Services from './Services';
import About from './About';
import PopularDepartments from './PopularDepartments';
import Offer from './Offer'
// import Doctors from './Doctors'
import Contact from './Contact'
import DoctorHome from './DoctorHome';

const Home = () => {
  return (
   <>
    <Banner />
    <Services />
    <About />
    <PopularDepartments isHomePage={true} />
    <Offer />
    <DoctorHome />
    <Contact />
   </>
  )
}

export default Home;
