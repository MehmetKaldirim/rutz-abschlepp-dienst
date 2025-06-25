import React, { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import PrivateRoute from "./components/PrivateRoute";

// Direct import for the Home page (not lazy-loaded)
import Home from "./pages/Home";
import ProjectPage from "./pages/Project";

// Lazy loading for other pages
const Admin = lazy(() => import("./pages/Admin"));
const Leistungen = lazy(() => import("./pages/Leistungen"));
const Uber = lazy(() => import("./pages/Uber"));
const Kontakt = lazy(() => import("./pages/Contact"));
const Impressum = lazy(() => import("./pages/Impressum"));
const Datenschutz = lazy(() => import("./pages/Datenshutz"));
const SignIn = lazy(() => import("./pages/SignIn"));
const Comments = lazy(() => import("./pages/Comments"));
const UpdateComment = lazy(() => import("./pages/UpdateComment"));
const Project = lazy(() => import("./pages/Project"));

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="pt-16 md:pt-20 lg:pt-24">
        {/* Adjust padding for mobile and larger screens */}
        <Routes>
          {/* Home page loaded directly */}
          <Route path="/" element={<Home />} />

          {/* Lazy-loaded routes wrapped with Suspense */}
          <Route
            path="/admin"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <Admin />
              </Suspense>
            }
          />
          <Route
            path="/leistungen"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <Leistungen />
              </Suspense>
            }
          />
          <Route
            path="/uber"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <Uber />
              </Suspense>
            }
          />
          <Route
            path="/kontakt"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <Kontakt />
              </Suspense>
            }
          />
          <Route
            path="/impressum"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <Impressum />
              </Suspense>
            }
          />
          <Route
            path="/datenschutz"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <Datenschutz />
              </Suspense>
            }
          />
          <Route
            path="/project"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <Project />
              </Suspense>
            }
          />

          <Route element={<PrivateRoute />}>
            <Route
              path="/sign-in"
              element={
                <Suspense fallback={<div>Loading...</div>}>
                  <SignIn />
                </Suspense>
              }
            />
            <Route
              path="/comments"
              element={
                <Suspense fallback={<div>Loading...</div>}>
                  <Comments />
                </Suspense>
              }
            />
            <Route
              path="/updateComment/:commentId"
              element={
                <Suspense fallback={<div>Loading...</div>}>
                  <UpdateComment />
                </Suspense>
              }
            />
          </Route>
        </Routes>
      </div>
      <CTA />
      <Footer />
    </BrowserRouter>
  );
}
