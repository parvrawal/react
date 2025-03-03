
import { createRoot } from 'react-dom/client'
import './index.css'

import {Routes, BrowserRouter, Route } from "react-router"
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import User from './components/User/User.jsx'
// import Github, {githubInfoLoader} from './components/Github/Github.jsx'
import Github from './components/Github/Github.jsx'

// const router = createBrowserRouter(

//   createRoutesFromElements(
//     <Route path="/" element={<Layout/>}>

//     </Route>
//   )
// )

createRoot(document.getElementById("root")).render(
  // <StrictMode>
  //   <RouterProvider router={router} />
  // </StrictMode>,
  <BrowserRouter>
    <Routes>
       <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='user/' element={<User />} >
        <Route path=':userid' element={<User />} />
        </Route>
        <Route
        // loader={githubInfoLoader}
         path='github'
          element={<Github />} />
        <Route path='*' element={<div>Not Found</div>} />
       </Route>

    </Routes>
  </BrowserRouter>
);
