import React, { useState } from "react";
import * as Style from "./styles/index.js";
import Form from "../components/homeSection/checkin-form/Form";
import Explore from "../components/homeSection/explore/Explore";
import Welcome from "../components/homeSection/welcome/Welcome.jsx";
import Room from "../components/homeSection/room/Room.jsx";
import Food from "../components/homeSection/food/Food.jsx";
import Modal from "../components/modal/Modal.jsx";

const Home = () => {
  const [showModal, setShowModal] = useState(false);
  const openModal = () => {
    setShowModal((prev) => !prev);
  };

  return (
    <>
   
      <Style.Wrapper>
        <Style.Banner>
          <h1>A Spot Of Paradise</h1>
          <h3>BayResort and Spa</h3>
        </Style.Banner>
        <Form open={openModal} />
      </Style.Wrapper>
      <Welcome />
      <Explore />
      <Room />
      <Food />
      <Modal show={showModal} setModal={setShowModal} />
    </>
  );
};

export default Home;
