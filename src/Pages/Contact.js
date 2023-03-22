
import {useNavigate} from "react-router-dom"

const Contact = () => {
    
    const navigate = useNavigate();

    return (
  
   <div>
  
      <h1>Contact</h1>
      {/* Write one para about seet home */}
      <p>
          Sweet Home - May Home Sweet Home - May Home Sweet Home - May Home Sweet Home - May Home Sweet Home - May Home Sweet Home - May Home Sweet Home - May Home Sweet Home - May Home Sweet Home - May Home Sweet Home - May Home Sweet Home - May Home Sweet Home - May Home 
          
      </p>
      <button onClick={()=>navigate(-2)}>Back Button</button>

       
  
   </div>
  
    )
  
} 

export default Contact