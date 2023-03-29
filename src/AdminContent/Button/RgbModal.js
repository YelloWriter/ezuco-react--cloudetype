import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "../Admin.css";
import TableOrder from "./TableOrder";

function RGBModal({ show, setShow, tableContent }) {
  const handleClose = () => setShow(false);

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title style={{ color: "black" }}>RgbModal</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ color: "black" }}></Modal.Body>
        <Modal.Footer>
          <Button
            className="CancleModal"
            variant="primary"
            onClick={handleClose}
          >
            닫기
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default RGBModal;
