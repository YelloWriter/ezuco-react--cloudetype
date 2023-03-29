import { React, useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Admin.css";
import Battery from "./Battery";
import Buzzer from "./Buzzer";
import HeadlightOnOff from "./HeadlightOnOff";
import HeadlightColor from "./HeadlightColor";
import RgbModal from "./RgbModal";
import RpmLeft from "./RpmLeft";
import RpmRight from "./RpmRight";
import Reveal from "react-reveal/Reveal";
import values from "../fakeData.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";

const Robot = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      <Container>
        <Row>
          {/* 배터리 */}
          <Col id="battery">
            <div className="FirstDiv" id="InfoBtn">
              <div id="BatteryIconDiv">
                <Reveal effect="fadeInUp">
                  <Battery />
                </Reveal>
              </div>
            </div>
            <div className="SecondDiv">
              <p className="FirstPtag">{values.Battery}</p>{" "}
              <p className="SecondPtag">Battery</p>
            </div>
          </Col>

          {/* 버저 */}
          <Col id="buzzer">
            <div className="FirstDiv" id="InfoBtn">
              <Buzzer isOn={values.Buzzer} />
            </div>
            <div className="SecondDiv">
              <p
                className="FirstPtag"
                onClick={(e) => {
                  e.target.innerText =
                    e.target.innerText == "ON" ? "OFF" : "ON";
                }}
              >
                {values.Buzzer}
              </p>{" "}
              <p className="SecondPtag">Buzzer</p>
            </div>
          </Col>
        </Row>

        <Row>
          {/* 헤드라이트 전원 */}
          <Col id="headlight_onoff">
            <div className="FirstDiv" id="InfoBtn">
              <HeadlightOnOff isOn={values.Headlight} />
            </div>
            <div className="SecondDiv">
              <p
                className="FirstPtag"
                onClick={(e) => {
                  e.target.innerText =
                    e.target.innerText == "ON" ? "OFF" : "ON";
                }}
              >
                {values.Headlight}
              </p>{" "}
              <p className="SecondPtag">Headlight</p>
            </div>
          </Col>
          {/* 헤드라이트 색상 */}
          <Col id="headlight_color">
            <div className="FirstDiv" id="InfoButtons">
              <HeadlightColor />
            </div>
            <div className="SecondDiv">
              <p
                id="LedButton"
                className="FirstPtag"
                onClick={() => {
                  console.log("노예야! 예~..");
                  setShow(true);
                }}
                style={{
                  color: [""], //rgb값 받아오는 곳
                }}
              >
                <FontAwesomeIcon icon={faCircle} id="LedIcon" />
                {/* rgb값은 어떻게 받아올 건지 */}
              </p>{" "}
              <p className="SecondPtag">LED Color</p>
            </div>
          </Col>
        </Row>

        <Row>
          {/* 왼쪽 rpm */}
          <Col id="rpm_l">
            <div className="SpeedDiv" id="TireIcon">
              <RpmLeft />
            </div>

            <div
              className="SpeedDiv2"
              id="SpeedText"
              style={{ marginTop: "20px" }}
            >
              <p className="FirstPtag" id="SpeedFirst">
                {values["Right RPM"]}
              </p>{" "}
              <p className="SecondPtag" id="SpeedSecond">
                Speed
              </p>
            </div>

            <div className="SpeedDiv" id="TireIcon">
              <RpmRight />
            </div>

            {/* <div className="FirstDiv" id="InfoButtons"></div> */}
          </Col>
        </Row>
      </Container>
      <RgbModal show={show} setShow={setShow} />
    </>
  );
};

export default Robot;
