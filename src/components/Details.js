import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const Details = () => {
  const [data, setData] = useState([]);
  const [user, setUser] = useState([]);
  const param = useParams();
  console.log("param: ",param.userId)

  useEffect(() => {
    fetch("https://dummyjson.com/users")
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setData(res.users);
        let newUser = res.users.filter((item) => item.id == param.userId );
        console.log("newUser: ",newUser);
        setUser(newUser);
        console.log("user",user)
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <div style={{ backgroundColor: "beige",padding:"10px", width:"550px", margin:"auto", marginTop:"40px"}}>
      <h4 style={{padding:"10px"}}>BIO Data of <b style={{color:'blue'}}>{`${user[0].firstName} ${user[0].lastName}:`}</b></h4>

<table>
<tbody>
  <tr>
    <th>User ID</th>
    <th>Email</th>
  </tr>
  <tr>
    <td>{user[0].id}</td>
    <td>{user[0].email}</td>
  </tr>
  
  <tr>
    <th>First Name</th>
    <th>Last Name</th>
  </tr>
  <tr>
    <td>{user[0].firstName}</td>
    <td>{user[0].lastName}</td>
  </tr>
  <tr>
    <th>User Name</th>
    <th>Phone Number</th>
  </tr>
  <tr>
    <td>{user[0].username}</td>
    <td>{user[0].phone}</td>
  </tr>
  <tr>
    <th>Height</th>
    <th>Weight</th>
  </tr>
  <tr>
    <td>{user[0].height}</td>
    <td>{user[0].weight}</td>
  </tr>
  <tr>
    <th>Gender</th>
    <th>Blood Group</th>
  </tr>
  <tr>
    <td>{user[0].gender}</td>
    <td>{user[0].bloodGroup}</td>
  </tr>
  <tr>
    <th>DOB</th>
    <th>University Name</th>
  </tr>
  <tr>
    <td>{user[0].birthDate}</td>
    <td>{user[0].university}</td>
  </tr>
  </tbody>
</table>

       
      </div>
    </div>
  );
};

export default Details;
