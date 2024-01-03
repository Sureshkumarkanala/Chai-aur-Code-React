// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
// import "./App.css";
import UserContextProvider from "./UserContext/UserContextProvider";
import Login from "./Components/login";
import Profile from "./Components/Profile";

function App() {
  return (
    <>
      <h1>Context API</h1>

      <UserContextProvider>
        <Login />
        <Profile />
      </UserContextProvider>
    </>
  );
}

export default App;
