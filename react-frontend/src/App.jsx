import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./auth/firebaseConfig";

import Root from "./Pages/Root";
import Home from "./Pages/Home";
import ProjectDetail from "./Pages/ProjectDetail";
import Blog from "./Pages/blog/Blog";
import Gallery from "./components/Gallery";
import ContactForm from "./Pages/contactform/ContactForm";
import MassageList from "./Pages/contactform/MassageList";
import Login from "./components/login/login"; // Add login page

function App() {
  const [user, setUser] = useState(null);

  // Track logged-in user
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  function PageWrapper({ children }) {
    return <div className="page">{children}</div>;
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Root />}>
          <Route index element={<Navigate to="home" />} />

          <Route path="home" element={<PageWrapper><Home /></PageWrapper>} />
          <Route path="project" element={<PageWrapper><ProjectDetail /></PageWrapper>} />
          <Route path="blog" element={<PageWrapper><Blog /></PageWrapper>} />
          <Route path="ContactForm" element={<PageWrapper><ContactForm /></PageWrapper>} />
          <Route path="Gallery" element={<PageWrapper><Gallery /></PageWrapper>} />

          {/* Admin-only page */}
          <Route
            path="MassageList"
            element={
              user?.email === "jamilnimbook2@gmail.com" ? (
                <PageWrapper><MassageList /></PageWrapper>
              ) : (
                <Navigate to="/login" />
              )
            }
          />

          {/* Login page */}
          <Route path="login" element={<Login />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
