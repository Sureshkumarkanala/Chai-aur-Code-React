import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App.jsx";
import "./index.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from "./Layout";
import Home from "./Home/Home";
import About from "./About/About";
import Contact from "./Contact/Contact";
import GitHub from //  githubInfoloader
"./GitHub/GitHub";

// const router = createBrowserRouter([
//   {
//     path: "",
//     element: <Layout />,
//   },
//   {
//     path: "/",
//     element: <Home />,
//   },
//   {
//     path: "about",
//     element: <About />,
//   },
//   {
//     path: "contact",
//     element: <Contact />,
//   },
// ]);

// Type2:
// ------

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      {/* <Route loader={githubInfoloader} path="GitHub" element={<GitHub />} /> */}
      <Route
        path="GitHub"
        element={<GitHub />}
        loader={async () => {
          const data = await fetch(
            "https://api.github.com/users/hiteshchoudhary"
          ).then((res) => res.json());
          return data;
        }}
      />
    </Route>
  )
);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
