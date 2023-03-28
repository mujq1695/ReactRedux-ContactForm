import React from "react";
import avatar1 from "../assets/avatar1.png";
import email from "../assets/email.png";
import phone from "../assets/phone.png";
import { useNavigate } from "react-router-dom";
import { useMutation, useQueryClient } from "react-query";
import axios from "axios";

const Card = ({ item, user, setUser }) => {
  let queryClient = useQueryClient();

  let mutation = useMutation({
    mutationFn: () => {
      axios
        .delete(`http://localhost:3000/deleteUser/${item.id}`)
        .then((res) => {
          console.log(res);
        });
    },
    onSuccess: () => {
      queryClient.invalidateQueries("user-data");
    },
  });

  const navigate = useNavigate();

  // function isDeleted(){
  //     fetch(`https://dummyjson.com/users/${item.id}`, {
  //         method: 'DELETE',
  //     })
  //         .then(res => res.json())
  //         .then(res => {
  //             if (res.isDeleted === true) {
  //                 let newUsers = user.filter((res) => res.id !== item.id)
  //                 setUser([...newUsers])
  //             }

  //         });
  // }
  function onDelete() {
    mutation.mutate(item.id);
  }

  function onDetails() {
    navigate(`/Details/${item.id}`);
  }

  return (
    <div className="card">
      <section className="section-left">
        <h5 className="card-title" color="rgb(20, 69, 206)">
          {item.name ?? item.firstName}
        </h5>
        <section className="email" display="flex" align-items="center">
          <img
            src={email}
            alt="email"
            width="15px"
            height="15px"
            margin="0px"
          />
          <p>{item.iemail ?? item.email}</p>
        </section>
        <section className="phone" display="flex" align-items=" center">
          <img src={phone} alt="phone" width=" 15px" height=" 15px" />
          <p>{item.iphone ?? item.phone}</p>
        </section>
        <section className="btn " padding="0px">
          <button type="button" className="btn btn-dark" color="white">
            Edit
          </button>
          <button
            type="button"
            style={{ marginLeft: "6px" }}
            onClick={onDelete}
            className="btn btn-danger"
          >
            Delete
          </button>
          <button
            type="button"
            style={{ marginLeft: "6px", color: "white" }}
            onClick={onDetails}
            className="btn btn-warning"
          >
            Details
          </button>
        </section>
      </section>
      <section className="section-right" text-align="center">
        <button
          type="button"
          className="btn btn-success"
          color="white"
          padding="3px 10px 3px 10px"
        >
          Professional
        </button>
        <br />
        <img src={avatar1} alt="Profile" width="90px" />
      </section>
    </div>
  );
};

export default Card;
