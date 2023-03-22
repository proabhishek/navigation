
import { useNavigate } from "react-router-dom"



const About = () => {
      const navigate = useNavigate();
    return (
  
   <div>
  
      <h1>About</h1>
      <p>Hey Its me, do  Hey Its me, do Hey Its me, do Hey Its me, do Hey Its me, do Hey Its me, do Hey Its me, do Hey Its me, do Hey Its me, doHey Its me, doHey Its me, doHey Its me, doHey Its me, doHey Its me, doHey Its me, doHey Its me, doHey Its me, do</p>
        
      <button onClick={()=>navigate("/contact")}> Contact Me </button>
   </div>
  
    )
  
} 

export default About