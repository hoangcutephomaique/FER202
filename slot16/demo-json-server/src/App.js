import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { Container, Spinner } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

const Login = React.lazy(() => import("./components/Login"));
const PostList = React.lazy(() => import("./components/PostList"));
const CreatePost = React.lazy(() => import("./components/CreatePost"));
const EditPost = React.lazy(() => import("./components/EditPost"));

const isAuthenticated = () => {
  return localStorage.getItem("user") !== null;
};

const ProtectedRoute = ({ children }) => {
  return isAuthenticated() ? children : <Navigate to="/" replace />;
};

const App = () => {
  return (
    <Router>
      <Suspense
        fallback={
          <Container className="text-center mt-5">
            <Spinner animation="border" variant="primary" />
          </Container>
        }
      >
        <Routes>
          <Route path="/" element={<Login />} />
          <Route
            path="/posts"
            element={
              <ProtectedRoute>
                <PostList />
              </ProtectedRoute>
            }
          />
          <Route
            path="/create"
            element={
              <ProtectedRoute>
                <CreatePost />
              </ProtectedRoute>
            }
          />
          <Route
            path="/edit/:id"
            element={
              <ProtectedRoute>
                <EditPost />
              </ProtectedRoute>
            }
          />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;
