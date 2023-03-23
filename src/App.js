// import Home from "./Pages/Home";
// import About from "./Pages/About";
// import Navbar from "./Pages/Navbar";
// import Contact from "./Pages/Contact";
import Error from "./Pages/Error";
// import Product from "./Pages/Products";
// import Apple from "./Pages/Apple";
// import Samsung from "./Pages/Samsung";
// import Nokia from "./Pages/Nokia";

import Users from "./Pages1/Users";

import LinkedIn from "./Pages1/LinkedIn";

import {Routes, Route} from "react-router-dom";


const App = () => {

    return (
        <div>
           
             <Routes>
                

             <Route path="/users" element={<Users />} /> 

                 {/* <Route path="linkedin/:userName" element={<LinkedIn />} /> */}

                    {/* <Route path="users/:userId" element={<Users />} /> */}


                 {/* <Route path="linkedin/abhishek" element={<LinkedIn />} />
                 <Route path="linkedin/anubhav" element={<LinkedIn />} />
                 <Route path="linkedin/pankaj" element={<LinkedIn />} />
                 <Route path="linkedin/mohan" element={<LinkedIn />} /> */}


 

                <Route path="*" element={<Error />} />

             </Routes>
        </div>
    );
}

export default App;



 {/* <Navbar /> */}

// {/* <Route path="/" element={<Home />} />
//                 <Route path="/about" element={<About />} />
//                 <Route path="/contact" element={<Contact />} /> */}

//                 <Route path="/china" element={<Nokia />} />

//                 <Route path="/product" element={<Product />}>

//                    <Route index element={<Apple />} /> 
//                    {/* /product/apple */}
//                    <Route path="samsung" element={<Samsung />} />
//                      {/* /product/samsung */}
//                      <Route path="nokia" element={<Nokia />} />


//                 {/* <Route path="/product" element={<Samsung />} /> */}

//                 </Route>

