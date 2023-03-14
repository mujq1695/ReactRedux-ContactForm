import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useQuery } from "react-query";
import axios from 'axios'

const Details = () => {
  const [data, setData] = useState();
  const [user, setUser] = useState();
 
  const param = useParams();
  console.log("param: ",param.userId)

  const{isLoading,isFetching,isError,error,refetch}=useQuery('user-data',async()=>{
    return  await axios.get('https://dummyjson.com/users').then((res)=>{
      setData("resss",res.data.users)
      let newUser=res.data.users.filter((item)=>{return item.id==param.userId})
      console.log("newUser::: ", newUser)
      setUser(newUser);
    })
  })
  if(isError){

    return <h2>{error.message}</h2>
  }

  if(isLoading || isFetching){
    return <h2>Loading...</h2>
  }


  return (
    <div>
      <div style={{ backgroundColor: "beige",padding:"10px", width:"550px", margin:"auto", marginTop:"40px"}}>
      <h4 style={{padding:"10px"}}>BIO Data of <b style={{color:'blue'}}>{`${user && user[0].firstName} ${user && user[0].lastName}:`}</b></h4>

<table>
<tbody>
  <tr>
    <th>User ID</th>
    <th>Email</th>
  </tr>
  <tr>
    <td>{user&&user[0].id}</td>
    <td>{user&&user[0].email}</td>
  </tr>
  
  <tr>
    <th>First Name</th>
    <th>Last Name</th>
  </tr>
  <tr>
    <td>{user&&user[0].firstName}</td>
    <td>{user&&user[0].lastName}</td>
  </tr>
  <tr>
    <th>User Name</th>
    <th>Phone Number</th>
  </tr>
  <tr>
    <td>{user&&user[0].username}</td>
    <td>{user&&user[0].phone}</td>
  </tr>
  <tr>
    <th>Height</th>
    <th>Weight</th>
  </tr>
  <tr>
    <td>{user&&user[0].height}</td>
    <td>{user&&user[0].weight}</td>
  </tr>
  <tr>
    <th>Gender</th>
    <th>Blood Group</th>
  </tr>
  <tr>
    <td>{user&&user[0].gender}</td>
    <td>{user&&user[0].bloodGroup}</td>
  </tr>
  <tr>
    <th>DOB</th>
    <th>University Name</th>
  </tr>
  <tr>
    <td>{user&&user[0].birthDate}</td>
    <td>{user&&user[0].university}</td>
  </tr>
  </tbody>
</table>

       
      </div>
    </div>
  );
};

export default Details;
