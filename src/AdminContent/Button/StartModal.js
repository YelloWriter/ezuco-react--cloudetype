import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "../Admin.css";
import TableOrder from "./TableOrder";

function Start() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button
        style={{ width: 200, height: 50 }}
        variant="light"
        id="GoButton"
        size="lg"
        onClick={handleShow}
      >
        주문 확인
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className="GoModal" id="GoTitle">
            주문 확인
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="GoModal" id="GoBody">
          <TableOrder />
        </Modal.Body>
        <Modal.Footer>
          <Button
            className="SendModal"
            variant="outline-info"
            onClick={handleClose} // 여기에 보내는 기능 추가
          >
            보내기
          </Button>
          <Button
            className="CancleModal"
            variant="outline-secondary"
            onClick={handleClose}
          >
            취소
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Start;
