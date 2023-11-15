import React from "react";
import "./App.css";
import Header from "./components/Header";
import Body from "./components/Body";
import {  Route, Routes } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";

// import { RouterProvider, createBrowserRouter } from 'react-router-dom'
// import Error from "./components/Error";


// const App = () => {

//     const appRouter = createBrowserRouter([
//         {
//             path: "/",
//             element: <Body />,
//             errorElement: <Error />
            
//         },
//         {
//             path: "/about",
//             element: <About />,
            
//         },
        
//         {
//             path: "/contact",
//             element: <Contact />
//         },

//     ])

//   return (
//     <div>
//         <Header />
//         <RouterProvider router={appRouter}/>
        
//     </div>
//   )
// }

// export default App;

const App = () => {
  return (
    <div className='app'>
      <Header />
       <Routes>
        <Route path='/' element={<Body />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='*' element={<Error/>} />
     </Routes>
    </div>
  );
};

export default App;
