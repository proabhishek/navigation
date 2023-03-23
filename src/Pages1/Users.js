// import { useParams } from "react-router-dom";
import { useSearchParams } from "react-router-dom"
let usersInfo = [
        {id: 1, name: "Abhishek", jobTitle: "Software Engineer", company: "Google", location: "California"},
        {id: 2, name: "Rahul", jobTitle: "Software Engineer", company: "Microsoft", location: "Washington"},
        {id: 3, name: "Rohit", jobTitle: "Software Engineer", company: "Facebook", location: "Washington"},
        {id: 4, name: "Rajat", jobTitle: "Software Engineer", company: "Amazon", location: "California"},
        {id: 5, name: "Raj", jobTitle: "Software Engineer", company: "Apple", location: "California"},

]

const Users = () => {
       
    const [searchParams, setSearchParams] = useSearchParams();

    const entered_location = searchParams.get("location"); // California
    console.log(entered_location)

    const filteredUsers =   entered_location== null? usersInfo : usersInfo.filter((user) => user.location === entered_location);

     

    return(
        <div>
                <button onClick={()=>setSearchParams({})}>All Users</button> 
                <button onClick={()=>setSearchParams({location: "California"})}>California</button>
                <button onClick={()=>setSearchParams({location: "Washington"})}>Washington</button>

         <div className="users"> 
              {
                    filteredUsers.map((user, index) => {
                        return(
                            <div key={index}>
                                <h1>{user.name}</h1>
                                <h3>{user.jobTitle}</h3>
                                <h3>{user.company}</h3>
                                <h3>{user.location}</h3>
                            </div>
                        )
                    })
              }

         </div>

         </div>
    )
}

export default Users




    // const params = useParams();

    // let userId = params.userId;
    // const {userId} = useParams(); // 1
    

    // let userData = usersInfo[userId - 1];


{/* <div>
<h1>{userId}</h1>
  <h1>Name:  {userData.name}</h1> 
  <h3>Job Title:  {userData.jobTitle}</h3>
  <h3>Company:  {userData.company}</h3>
 <h3>Location:  {userData.location}</h3>

</div> */}