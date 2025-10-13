import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Root from "./Pages/Root";
import Home from "./Pages/Home";
import ProjectDetail from "./Pages/ProjectDetail";
import Blog from "./Pages/blog/Blog";
import Gallery from "./components/Gallery";
import ContactForm from "./Pages/contactform/ContactForm";
import MassageList from "./Pages/contactform/MassageList";

function App() {
  function PageWrapper({ children }) {
    return <div className="page">{children}</div>;
  }

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Root />}>
            {/* Default redirect to home */}
            <Route index element={<Navigate to="home" />} />

            {/* Home page */}
            <Route
              path="home"
              element={
                <PageWrapper>
                  <Home />
                </PageWrapper>
              }
            />

            {/* Project page */}
            <Route
              path="project"
              element={
                <PageWrapper>
                  <ProjectDetail />
                </PageWrapper>
              }
            />

            {/* Blog */}
            <Route
              path="blog"
              element={
                <PageWrapper>
                  <Blog />
                </PageWrapper>
              }
            />

            {/* contractForm */}
            <Route
              path="ContactForm"
              element={
                <PageWrapper>
                  <ContactForm />
                </PageWrapper>
              }
            />
            {/* Massagelise */}
            <Route
              path="MassageList"
              element={
                <PageWrapper>
                  <MassageList />
                </PageWrapper>
              }
            />

            {/* Gallary */}
            <Route
              path="Gallery"
              element={
                <PageWrapper>
                  <Gallery />
                </PageWrapper>
              }
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
