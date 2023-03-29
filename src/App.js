import React, { Component, useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import { Home, Auth } from "./pages";
import MenuShow from "./MenuContents/MenuShow";
import AdminPage from "./AdminContent/AdminPage";
import NotFound from "./AdminContent/NotFound";
import Login from "./containers/Auth/Login";
import JwtExpired from "./AdminContent/JwtExpired";

const App = (userID) => {
  const [forHyenoh, setForHyenoh] = useState("");

  // menu에서 admin으로 바로 받기 (테이블번호 받기는 아직임)
  useEffect(() => {
    console.log("혜인아 이거 받아!", forHyenoh);

    if (forHyenoh) {
      window.localStorage.setItem("forHyenoh", JSON.stringify(forHyenoh));
    }
  }, [forHyenoh]);

  return (
    <Switch>
      <Route path="/auth" component={Auth} />
      <Route path="/auth/login" component={() => <Login />} />
      <Route
        exact
        path="/menu"
        component={() => <MenuShow setForHyenoh={setForHyenoh} />}
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
//      {/* {userID ==="admin" && ( */  }

export default App;
