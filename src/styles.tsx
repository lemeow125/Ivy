const styles: { [key: string]: React.CSSProperties } = {
  route_wrapper: {
    width: "85%",
    position: "fixed",
    left: "15%",
    overflowY: "scroll",
    height: "100%",
    backgroundColor: "#0b2322",
  },
  container: {
    display: "flex",
    flexDirection: "column",
    flex: 1,
    height: "100%",
    alignItems: "center",
    paddingTop: 32,
  },
  text: {
    fontSize: 16,
    color: "white",
    fontWeight: "bold",
  },
  logo_title: {
    color: "#6c9575",
    fontSize: 26,
    fontWeight: "bold",
  },
  header_wrapper: {
    display: "flex",
    flexDirection: "row",
    position: "sticky",
    top: 0,
    backgroundColor: "#3d4848",
    paddingRight: 32,
    paddingLeft: 32,
  },
  header_left: {
    display: "flex",
    flexDirection: "row",
    width: "50%",
    justifyContent: "left",
    alignItems: "center",
    paddingLeft: 16,
  },
  header_right: {
    display: "flex",
    flexDirection: "row",
    width: "50%",
    justifyContent: "right",
    alignItems: "center",
  },
  login_button: {
    backgroundColor: "#9e8500",
    width: 128,
    height: 32,
    border: "none",
    padding: 8,
    borderRadius: 16,
  },
  logout_button: {
    backgroundColor: "#0b2322",
    width: 256,
    height: 64,
    border: "none",
    padding: 8,
    borderRadius: 16,
    borderTopLeftRadius: 32,
    borderBottomLeftRadius: 32,
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
  },
  sidebar_button: {
    backgroundColor: "#0b2322",
    width: 256,
    height: 64,
    border: "none",
    padding: 8,
    borderTopLeftRadius: 32,
    borderBottomLeftRadius: 32,
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
  },
  sidebar_wrapper: {
    display: "flex",
    flexDirection: "column",
    height: "100vh",
    width: "100%",
    backgroundColor: "#3d4848",
    alignItems: "flex-end",
  },
};

export default styles;
