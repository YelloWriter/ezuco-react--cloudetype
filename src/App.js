import React, { Component, useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import { Home, Auth } from "./pages";
import MenuShow from "./MenuContents/MenuShow";
import AdminPage from "./AdminContent/AdminPage";
import NotFound from "./AdminContent/NotFound";
import Login from "./containers/Auth/Login";
import JwtExpired from "./AdminContent/JwtExpired";
import KakaoRegister from "./containers/Auth/KakaoRegister";
const App = () => {
    const [forHyenoh, setForHyenoh] = useState("");



    // menu에서 admin으로 바로 받기 (테이블번호 받기는 아직임)
    useEffect(() => {
        // console.log("혜인아 이거 받아!", forHyenoh);

        const oldOne = JSON.parse(localStorage.getItem("forHyenoh"))


        console.log("원래 로컬에 저장되어 있던 거 :",oldOne)
        console.log("이제 거기에 더해야만 하는 거 :",forHyenoh)

        console.log(oldOne.totalPrice + forHyenoh.totalPrice)

        if (forHyenoh) {
            window.localStorage.setItem("forHyenoh", JSON.stringify(forHyenoh));
        }
    }, [forHyenoh]);

    return (
        <Switch>
            <Route path="/auth" component={Auth} />
            <Route path="/auth/login" component={() => <Login />} />
            <Route path="/kakao/login" component={()=><KakaoRegister/>}/>
            <Route
                exact
                path="/menu"
                component={() => <MenuShow setForHyenoh={setForHyenoh} forHyenoh={forHyenoh} />}
            />
            <Route exact path="/" component={() => <Home />} />
            {/* {userID ==="admin" &&  */}
            <Route
                exact
                path="/Admin"
                component={() => <AdminPage forHyenoh={forHyenoh} />}
            />
            <Route path="/jwtexpired" component={JwtExpired} />

            <Route path="/*" component={() => <NotFound />} />
        </Switch>
    );
};

export default App;
