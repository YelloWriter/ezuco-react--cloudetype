import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button, Card, Modal } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Admin.css";
import RecipeModal from "./RecipeModal";
import TotalSales from "./TotalSales";
import axios from "axios";

const Table = ({ forHyenoh }) => {
  const [show, setShow] = useState(false);
  const [tableContent, setTableContent] = useState({});

  useEffect(() => {
    console.log(localStorage.getItem("forHyenoh"));
    setTableContent(localStorage.getItem("forHyenoh"));
  }, []);

  return (
    <>
      <div
        id="TableMap"
        style={{
          backgroundImage: "url(tableimg.png)",
          position: "relative",
        }}
      >
        <Button
          onClick={() => {
            setShow(true);
          }}
          className="TableBtn"
          id="Btn1"
        >
          1
        </Button>

        <Button
          onClick={() => {
            setShow(true);
          }}
          className="TableBtn"
          id="Btn2"
        >
          2
        </Button>
        <Button
          onClick={() => {
            setShow(true);
          }}
          className="TableBtn"
          id="Btn3"
        >
          3
        </Button>
        <Button
          onClick={() => {
            setShow(true);
          }}
          className="TableBtn"
          id="Btn4"
        >
          4
        </Button>
        <TotalSales />
      </div>
      <RecipeModal
        forHyenoh={forHyenoh}
        show={show}
        setShow={setShow}
        tableContent={tableContent}
      />
    </>
  );
};

export default Table;
