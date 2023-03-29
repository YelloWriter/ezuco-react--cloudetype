import { Component, useEffect, useState} from "react";
import userData from "../../local-json/users.json";
import { InputWithLabel, RegisterLink } from "../../components/";
import styled from "styled-components";
import oc from "open-color";
import { shadow } from "../../lib/styleUtil";
import { BrowserRouter as Router, Route, Switch,Redirect} from "react-router-dom";
import axios from "axios";
import { useCookies } from "react-cookie";
const LoginBtn = styled.button`
  margin-top: 1rem;
  padding-top: 0.6rem;
  padding-bottom: 0.5rem;
  background: #1ebaed;
  color: white;
  text-align: center;
  font-size: 1.25rem;
  font-weight: 500;
  display: block;
  width: 30%;
  cursor: pointer;
  user-select: none;
  transition: 0.2s all;
  &:hover {
    background: #1ebaed;
    ${shadow(0)}
  }
  &:active {
    background: #1ebaed;
  }
`;
const Title = styled.div`
  font-size: 1.5rem;
  font-weight: 500;
  color: ${oc.gray[8]};
  margin-bottom: 1rem;
`;
const Login = (props) => {
  //자체서버 로그인 토큰 저장
  const [userId, setUserId] = useState("");
  const [userPw, setUserPw] = useState("");
  const handleSubmit = async (event) => {
    event.preventDefault();
    let data = { userId: userId, userPw: userPw };
    axios
      .post("https://port-0-ezuco-cloudtype-108dypx2ale6e8i6k.sel3.cloudtype.app/login", data, {
        headers: {
          "Content-Type": `application/json`,
        },
      })
      .then((response) => {
        console.log("성공" + response.headers);
        // Access Token을 받아서 로컬 스토리지에 저장합니다.
        let accessToken = response.headers.get("Authorization").substring(7);
        window.localStorage.setItem("AdminAccessToken", accessToken);
        // 로그인이 성공한 경우 메인 페이지로 이동합니다.
        if (userId === "admin") {
          window.location.href = "/Admin";
        } else {
          window.location.href = "/Menu";
        }
      })
      .catch((ex) => {
        console.log("로그인 실패 : " + ex);
      })
      .finally(() => {
        console.log("login request end");
      });
  };

  useEffect(() => {
    console.log("LoginPage render ... ");
  });

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Title>로그인</Title>
        <InputWithLabel
          onChange={(e) => setUserId(e.target.value)}
          label="아이디"
          name="userId"
          placeholder="아이디"
        />
        <InputWithLabel
          onChange={(e) => setUserPw(e.target.value)}
          label="비밀번호"
          name="password"
          placeholder="비밀번호"
          type="password"
        />
        <LoginBtn type="submit">로그인</LoginBtn>
      </form>

      <RegisterLink to="/auth/register">회원가입</RegisterLink>
    </>
  );
};

export default Login;
