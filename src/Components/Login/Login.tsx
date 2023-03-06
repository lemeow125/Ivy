import { useSelector } from "react-redux";
import { Button } from "@mui/material";
import styles from "../../styles";
import { useNavigate } from "react-router-dom";
import { LoggedInUserState } from "../../Interfaces/Interfaces";
import { LoginState } from "../../Interfaces/Interfaces";

export default function Login() {
  const logged_in = useSelector((state: LoginState) => state.logged_in.value);
  const logged_in_user = useSelector(
    (state: LoggedInUserState) => state.logged_in_user.value
  );
  const navigate = useNavigate();
  if (logged_in) {
    return (
      <p style={{ ...styles.text_white, ...styles.text_M }}>
        Logged in as {logged_in_user.username}
      </p>
    );
  } else {
    return (
      <div>
        <Button
          onClick={() => navigate("/Login")}
          value="Login"
          variant="contained"
          style={styles.login_button}
        >
          <p style={{ ...styles.text, ...styles.text_M }}>Login</p>
        </Button>
      </div>
    );
  }
}
