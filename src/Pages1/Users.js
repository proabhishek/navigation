import { useParams } from "react-router-dom";
let usersInfo = [
        {id: 1, name: "Abhishek", jobTitle: "Software Engineer", company: "Google", location: "California"},
        {id: 2, name: "Rahul", jobTitle: "Software Engineer", company: "Microsoft", location: "Washington"},
        {id: 3, name: "Rohit", jobTitle: "Software Engineer", company: "Facebook", location: "New York"},
        {id: 4, name: "Rajat", jobTitle: "Software Engineer", company: "Amazon", location: "Seattle"},
        {id: 5, name: "Raj", jobTitle: "Software Engineer", company: "Apple", location: "California"},

]

const Users = () => {

    // const params = useParams();

    // let userId = params.userId;
    const {userId} = useParams(); // 1
    

    let userData = usersInfo[userId - 1];

     

    return(
        <div>
            <h1>{userId}</h1>
              <h1>Name:  {userData.name}</h1> 
              <h3>Job Title:  {userData.jobTitle}</h3>
              <h3>Company:  {userData.company}</h3>
             <h3>Location:  {userData.location}</h3>

        </div>
    )
}

export default Users