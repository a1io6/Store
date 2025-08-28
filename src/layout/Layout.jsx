// import React from 'react'
// import { Outlet } from 'react-router-dom'
// import Header from '../header/Header'
// import Banner from '../banner/Banner'
// import Footer from '../footer/Footer'
// function Layout() {
//   return (
//     <div>
//       <Header/>
//       <Banner/>
//       <Outlet/>
//       <Footer/>
     
//     </div>
//   )
// }

// export default Layout
import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../header/Header';
import Banner from '../banner/Banner';
import Footer from '../footer/Footer';

function Layout() {
  return (
    <>
      <Header/>
      <Banner/>
      <Outlet/>
      <Footer/>
    </>
  );
}

export default Layout;
