import React from 'react'
import Card from './Card'
import { useEffect,useState } from 'react';
import { useSelector } from 'react-redux';

export default function Cardlist() {
  const [user, setUser] = useState([]);
  const {data}=useSelector((state)=>(
    {
      data:state.formReducer.formData
    }
  ))

  useEffect(()=>{
    fetch('https://dummyjson.com/users')
        .then(res => res.json())
        .then((data) => {
            console.log(data);
            setUser(data.users);
          
        })
        .catch((error) => {
            console.log(error);
        });
  },[])

  return (

    <>
      <div className="column col2 col-lg-5 col-md-5 col-sm-12 p-2" id="col2">
        <input type="text" placeholder="Filter Contacts"
          width='100%' margin-top='40px' margin-bottom=' 30px' height='35px' border='1px solid rgb(197, 192, 192)' />
        <div id="parentCard">
          {data.map((item) => <Card key={item.id} item={item} />)}
          {user && user.map((item) => <Card key={item.id} item={item} user={user} setUser={setUser} />)}
          
        </div>
      </div>
    </>
  )
}
