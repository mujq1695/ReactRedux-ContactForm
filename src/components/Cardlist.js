import React from 'react'
import Card from './Card'
import { useEffect,useState } from 'react';
import { useSelector } from 'react-redux';
import {useQuery} from 'react-query'
import axios from 'axios'

export default function Cardlist() {
  const [user, setUser] = useState();
  
  const {result}=useSelector((state)=>(
    {
      result:state.formReducer.formData
    }
  ))

  // fetching data using react query  Hook without useEffect
  
  const {isLoading,data}=useQuery('user-data',async ()=>{
   const data = await axios.get('https://dummyjson.com/users');
    setUser(data.data.users);
   
  })
  console.log('"data"',user);

  // fetching data using useEffect Hook without react query

  // useEffect(()=>{
  //   fetch('https://dummyjson.com/users')
  //       .then(res => res.json())
  //       .then((res) => {
            
  //           setUser(res.users);
            
          
  //       })
  //       .catch((error) => {
  //           console.log(error);
  //       });
  // },[])

  if(isLoading){

    return <h2>Loading...</h2>
  }

  return (

    <>
      <div className="column col2 col-lg-5 col-md-5 col-sm-12 p-2" id="col2">
        <input type="text" placeholder="Filter Contacts"
          width='100%' margin-top='40px' margin-bottom=' 30px' height='35px' border='1px solid rgb(197, 192, 192)' />
        <div id="parentCard">
          {result.map((item) => <Card key={item.id} item={item} />)}
          {user&&user.map((item) => <Card key={item.id} item={item} user={user} setUser={setUser} />)}
          
        </div>
      </div>
    </>
  )
}
