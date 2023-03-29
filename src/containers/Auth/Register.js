
import react, {Component, useState} from 'react';
import userData from "../../local-json/users.json";
import { Content, InputWithLabel, RegisterLink } from "../../components/";
import styled from "styled-components";
import { shadow } from "../../lib/styleUtil";
import axios from "axios";
const Title = styled.div`
  font-size: 1.5rem;
  font-weight: 500;
  color: gray;
  margin-bottom: 1rem;
`;
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
  width: 100%;

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

const registerFunc = async (value) => await axios.post('https://port-0-ezuco-cloudtype-108dypx2ale6e8i6k.sel3.cloudtype.app/join',
              {"userId":value.UserId, "userPw":value.UserPw,"tableNum":value.tableNum,"userNick":value.userNick});


const dupleId = ()=>{
    axios.post('http://localhost:8080',)
}

const Register = () => {
   
        const [UserId, setUserId] = useState("");
        const [UserPw,setUserPw] = useState("");
        const [tableNum,setTableNum]= useState(0);
        const [userNick,setuserNick] = useState("");


    const SignUp = async (event) => {
            event.preventDefault();
   
            if(tableNum === 0){
                alert("테이블 번호를 선택해 주세요!")
                return
            }
     
            registerFunc({
                UserId, UserPw, tableNum, userNick
            })
            .then(()=>{
                window.location.href = 'http://localhost:3000/auth/login';})
            .catch(error=>{
                console.log(error.response.data); 
            })
          };







  return (
    <>
      <form
        onSubmit={(e) => {
          SignUp(e);
        }}
      >
        <Title>회원 가입</Title>
        <h6 style={{ color: "black" }}>테이블 번호</h6>
        <select
          name="TableNumber"
          style={{ width: "100%" }}
          onChange={(e) => {
            setTableNum(parseInt(e.target.value));
            console.log(tableNum);
          }}
        >
          <option style={{ display: "none" }} value="0" disabled selected>
            테이블을 선택해주세요.
          </option>
          <option value="1">1번 테이블</option>
          <option value="2">2번 테이블</option>
          <option value="3">3번 테이블</option>
          <option value="4">4번 테이블</option>
        </select>
        <button onClick={dupleId}>아이디 중복체크</button>
        <InputWithLabel
          label="아이디"
          name="userId"
          placeholder="아이디"
          onChange={(e) => setUserId(e.target.value)}
        />
        <InputWithLabel
          label="비밀번호"
          name="userPw"
          placeholder="비밀번호"
          type="password"
          onChange={(e) => setUserPw(e.target.value)}
        />
        <InputWithLabel
          label="비밀번호 확인"
          name="userPw"
          placeholder="비밀번호 확인"
          type="password"
        />
        <InputWithLabel
          label=" 닉네임"
          name="userNick"
          placeholder="닉네임"
          onChange={(e) => setuserNick(e.target.value)}
        />

        <LoginBtn type="submit">회원가입</LoginBtn>
        <RegisterLink to="/auth/login">로그인</RegisterLink>
      </form>
    </>
  );
};

export default Register;
//유효성 검사하기
