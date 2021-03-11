import React, { useEffect, useRef } from "react";
import * as ModS from "./modalS";
import img from "../../img/picTwo.jpg";
import { FaTimes } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const Modal = ({ show, setModal }) => {
  const modalRef = useRef();

  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      setModal(false);
    }
  };

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
      {show ? (
        <ModS.Wrapper data-aos="fade-up" ref={modalRef} onClick={closeModal}>
          <ModS.Card>
            <FaTimes
              className="close"
              onClick={() => setModal((prev) => !prev)}
            />
            <img src={img} alt="beach" />
            <ModS.Info>
              <h2>All Booked Up</h2>
              <h4>Check In:</h4>
              <h4>Check Out:</h4>
            </ModS.Info>
          </ModS.Card>
        </ModS.Wrapper>
      ) : null}
    </>
  );
};

export default Modal;
