import { useState, useEffect, useContext } from "react";
import { useNavigation } from "react-router";
import { CurrentUser } from "./contexts/CurrentUserProvider";

function Navigation() {
  const navigation = useNavigation();

  const { currentUser } = useContext(CurrentUser);

  let loginActions = (
    <>
      <li style={{ float: "right" }}>
        <a href="#" onClick={() => navigation.push("/sign-up")}>
          Sign Up
        </a>
      </li>
      <li style={{ float: "right" }}>
        <a href="#" onClick={() => navigation.push("/login")}>
          Login
        </a>
      </li>
    </>
  );

  if (currentUser) {
    loginActions = (
      <li style={{ float: "right" }}>
        Logged in as {currentUser.firstName} {currentUser.lastName}
      </li>
    );
  }

  return (
    <nav>
      <ul>
        <li>
          <a href="#" onClick={() => navigation.push("/")}>
            Home
          </a>
        </li>
        <li>
          <a href="#" onClick={() => navigation.push("/moves")}>
            Places
          </a>
        </li>
        <li>
          <a href="#" onClick={() => navigation.push("/moves/new")}>
            Add move
          </a>
        </li>
        {loginActions}
      </ul>
    </nav>
  );
}

export default Navigation;
