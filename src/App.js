import Home from "./Pages/Home";
import About from "./Pages/About";
import Navbar from "./Pages/Navbar";
import Contact from "./Pages/Contact";
import Error from "./Pages/Error";

import {Routes, Route} from "react-router-dom";


const App = () => {

    return (
        <div>
            <Navbar />
             <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />

                <Route path="*" element={<Error />} />

             </Routes>
        </div>
    );
}

export default App;