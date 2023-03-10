import * as React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { UserInfo } from "../Api/Api";
import { toggle_login } from "../../Features/Redux/Slices/Login/LoginSlice";
import { SetUser } from "../../Features/Redux/Slices/LoggedInUserSlice/LoggedInUserSlice";
import { LoginState } from "../../Interfaces/Interfaces";
import { set_checked } from "../../Features/Redux/Slices/OldSession/OldSessionSlice";
export default function PreviousSessionChecker() {
  const dispatch = useDispatch();
  const logged_in = useSelector((state: LoginState) => state.logged_in.value);
  // Function to check for previous login session
  useEffect(() => {
    async function check() {
      if (await UserInfo()) {
        if (logged_in !== true) {
          console.log("Previous session found. Restoring");
          await dispatch(toggle_login());
          await dispatch(SetUser(await UserInfo()));
        }
      } else {
        console.log("No old session found");
        localStorage.removeItem("token");
      }
      await dispatch(set_checked());
    }
    check();
  }, []);
  return <div />;
}
