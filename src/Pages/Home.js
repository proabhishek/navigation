
import { useNavigate } from "react-router-dom"

const Home = () => {
      const navigate = useNavigate();

      return (
    
     <div>
    
        <h1>Home</h1>
        {/* Write one para about seet home */}
        <p>
            Sweet Home - May Home Sweet Home - May Home Sweet Home - May Home Sweet Home - May Home Sweet Home - May Home Sweet Home - May Home Sweet Home - May Home Sweet Home - May Home Sweet Home - May Home Sweet Home - May Home Sweet Home - May Home Sweet Home - May Home 
        </p>

        <button onClick={()=>navigate("contact")}> Contact Me </button>
    
     </div>
    
      )
    
} 

export default Home