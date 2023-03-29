import { useState, useEffect } from "react";
import "./Recipt.css";

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Table } from "react-bootstrap";
import MenuShow from "../MenuShow";

// 모달을 노출하는 페이지
const Receipt = ({
  bill,
  volume,
  totalPrice,
  setTotalPrice,
  receiptContents,
  setReceiptContents,
}) => {
  const [show, setShow] = useState(false);
  const [Recipts, setRecipts] = useState(0);
  //모달 헤더
  const headerMeta = ["상품", "수량", "가격"];
  // useEffect(() => {
  //   let reToal = 0
  //   Object.keys(receiptContents.bill).forEach((t) => {
  //     reToal += bill[t]
  //   })
  //   setRecipts(reToal)
  //   console.log("영수증 합계 금액은:", receiptContents.bill)

  // }, [receiptContents.bill])
  // useEffect(() => {
  // }, [ Recipts ])

  useEffect(() => {
    console.log("여기는 영수증이다!");

    console.log(receiptContents);
  }, [receiptContents]);

  //  열고 닫고
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="light" id="OrderCheck" size="lg" onClick={handleShow}>
        영수증
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className="OrderList">영수증</Modal.Title>
        </Modal.Header>

        <Modal.Body className="OrderList">
          <Table striped bordered hover className="center">
            <thead>
              <tr>
                {headerMeta.map((i) => (
                  <th>{i}</th>
                ))}
              </tr>
            </thead>

            <tbody className="ReciptBody">
              {receiptContents &&
                Object.keys(receiptContents.bill).map((aMenu, index) => {
                  return (
                    <>
                      <tr>
                        <th>{aMenu}</th>
                        <th>{receiptContents.volume[aMenu]}</th>
                        <th>{receiptContents.bill[aMenu]}</th>
                      </tr>
                    </>
                  );
                })}
            </tbody>

            <tfoot
              className="ReciptFoot"
              style={{ width: "100%", textAlign: "right" }}
            >
              <tr>
                <td style={{ backgroundColor: "white" }}></td>
                <td style={{ backgroundColor: "white" }}></td>
                <td style={{ backgroundColor: "white" }}>
                  total :{receiptContents.totalPrice}원
                </td>
              </tr>
            </tfoot>
          </Table>
        </Modal.Body>

        <Modal.Footer>
          <Button
            className="ModalSend"
            variant="outline-info"
            onClick={handleClose}
          >
            확인
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Receipt;
