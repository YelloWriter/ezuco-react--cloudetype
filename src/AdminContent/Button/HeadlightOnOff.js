import React from "react";
import { Container, Row, Col, Button, ProgressBar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Admin.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLightbulb, faX } from "@fortawesome/free-solid-svg-icons";
import { BsLightbulbOffFill } from "react-icons/bs";
import Flash from "react-reveal/Flash";
import HeadShake from "react-reveal/HeadShake";
// import { BsLightbulbOff } from "react-icons/bs";

function HeadlightOnOff({ isOn }) {
  return isOn == "ON" ? (
    <Flash duration={2000}>
      <FontAwesomeIcon icon={faLightbulb} id="LightOnIcon" />
    </Flash>
  ) : (
    <HeadShake duration={2000}>
      <BsLightbulbOffFill />
    </HeadShake>
  );
}

export default HeadlightOnOff;
