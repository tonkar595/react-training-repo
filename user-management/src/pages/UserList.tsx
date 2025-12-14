import { useEffect, useState } from "react";
import "./UserList.css";
import { useNavigate } from "react-router-dom";

interface User {
  id : number;
  name: string;
  username: string;
  email: string;
  phone: string | number;
  address :{
    street :string;
    suite :string;
    city :string;
    zipcode :string;
    geo : {
        lat :string;
        lng :string;
    }
  }
  website : string;
  company : {
    name : string;
    catchPhrase : string;
    bs : string;
  }
  
}



const UserList: React.FC = () => {
    const [users, setUsers] = useState<User[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const navigate = useNavigate();

const handleUserClick = (userId : number) => {
    navigate(`/user/${userId}`);
};


useEffect(() => {
    fetchUsers();
}, []);


const fetchUsers = async () =>{
    try{
        setLoading(true);
        setError(null);
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        if(!response.ok){
            throw new Error("Failed to fetch users");
            
        }

        const data = await response.json();
        console.log(data);
        
        setUsers(data);


    }catch(err){
        setError(err instanceof Error ? err.message : "Unknown error");
    }finally{
        setLoading(false);
    }
};
    


  return (
    <div className="card-container">
      <h1>User List</h1>
      {users.map((user) => (
        <div className="user-card" >
        <div className="card-header">
          {/* <div className="avatar">T</div> */}
          <h2>{user.name}</h2>
          <p className="username">{user.username}</p>
        </div>

        <div className="card-body">
          <div className="info-item">
            <span className="label">Email:</span>
            <span className="value">{user.email}</span>
          </div>

          <div className="info-item">
            <span className="label">Address: </span>
            <span className="value">{user.address.street} {user.address.suite}, {user.address.city} {user.address.zipcode}</span>
          </div>

          <div className="info-item">
            <span className="label">Phone:</span>
            <span className="value">{user.phone}</span>
          </div>

          <hr />

          <div className="view-details" onClick={() => handleUserClick(user.id)}>
            view more details...
          </div>

          
          {/* {!loading && error && users.length > 0&&(
            <div className="view-details" key={user.id} user={user} onClick={() => handleUserClick(user.id)}>
            view more details...
            </div>
          )} */}
        </div>

      </div>
      ))}
    </div>  
  );
};

export default UserList;



// <div>

//   <div className="card-container">
//     <ul>
//       <li>
//         <div>name : tonker</div>
//         <p>username : ton</p>
//         <p>email : ton@gmail.com</p>
//         <p>address : 204</p>
//         <p>street : none</p>
//         <p>city : chiang rai</p>
//         <p>zipcode: 57100</p>
//         <p>phone : 09xxxxxxxx</p>
//         <p>website : </p>
//         <p>company : </p>
//       </li>
//     </ul>
//   </div>
// </div>
