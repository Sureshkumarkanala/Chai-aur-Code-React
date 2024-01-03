import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import authService from "./appWrite/auth";
import { login, logout } from "./Store/authSlice";
import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Outlet } from "react-router-dom";

function App() {
  // //In ganeral access the enviromnent variable like as below(create-react-app when ur used)
  // console.log(process.env.REACT_APP_APPWRITE_URL);

  //but in VITE
  // console.log(import.meta.env.VITE_APPWRITE_URL);

  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    authService
      .getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData }));
        } else {
          dispatch(login(logout()));
        }
      })
      .finally(() => setLoading(false));
  }, []);

  return !loading ? (
    <div className="min-h-screen flex flex-wrap  content-between  bg-gray-500">
      <div className="w-full block">
        <Header />
        <main>
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  ) : null;
}

export default App;
