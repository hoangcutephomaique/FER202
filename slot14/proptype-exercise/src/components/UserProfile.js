// components/UserProfile.js
import React from "react";
import PropTypes from "prop-types";
import { Card, Alert, Container } from "react-bootstrap";
const UserProfile = ({ name, age }) => {
  if (!name || typeof name !== "string") {
    return (
      <Container className="my-4">
        <Card>
          <Card.Body>
            <Card.Title>Thông Tin Người Dùng</Card.Title>
            <Alert variant="danger">
              Tên không hợp lệ hoặc không được cung cấp!
            </Alert>
          </Card.Body>
        </Card>
      </Container>
    );
  }
  if (!age) {
    return (
      <Container className="my-4">
        <Card>
          <Card.Body>
            <Card.Title>Thông Tin Người Dùng</Card.Title>
            <p>Tên: {name}</p>
            <Alert variant="warning">Tuổi không được để trống!</Alert>
          </Card.Body>
        </Card>
      </Container>
    );
  } else if (isNaN(age)) {
    return (
      <Container className="my-4">
        <Card>
          <Card.Body>
            <Card.Title>Thông Tin Người Dùng</Card.Title>
            <p>Tên: {name}</p>
            <Alert variant="warning">Tuổi phải là một số hợp lệ!</Alert>
          </Card.Body>
        </Card>
      </Container>
    );
  }
  return (
    <Container className="my-4">
      <Card>
        <Card.Body>
          <Card.Title>Thông Tin Người Dùng</Card.Title>
          <p>Tên: {name}</p>
          <p>Tuổi: {age}</p>
        </Card.Body>
      </Card>
    </Container>
  );
};
UserProfile.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};
export default UserProfile;
