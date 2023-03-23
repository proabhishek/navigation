
import { useParams } from "react-router-dom"

const LinkedIn = () => {
    const params = useParams();

    let userName = params.userName;

    return (
        <div>
             
            <h1>{userName}</h1>
            <h3>Job Title</h3>
            <h3>Company</h3>
            <h3>Location</h3>

        </div>
    )
}

export default LinkedIn