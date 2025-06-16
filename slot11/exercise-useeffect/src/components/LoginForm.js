// File: src/components/LoginForm.js
import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";

// Hàm kiểm tra email hợp lệ bằng regex
const validateEmail = (email) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
};

const validatePassword = (password) => {
  return password.length >= 8;
};

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(null); // null: chưa nhập, true/false: hợp lệ/không hợp lệ
  const [emailError, setEmailError] = useState("");

  const [password, setPassword] = useState("");
  const [isPasswordValid, setIsPasswordValid] = useState(null);
  const [passwordError, setPasswordError] = useState("");

  const [canSubmit, setCanSubmit] = useState(false);

  // Xác thực email
  useEffect(() => {
    if (email === "") {
      setIsEmailValid(null);
      setEmailError("");
    } else if (!validateEmail(email)) {
      setIsEmailValid(false);
      setEmailError("Email không hợp lệ. Vui lòng nhập lại");
    } else {
      setIsEmailValid(true);
      setEmailError("");
    }
  }, [email]);

  // Xác thực mật khẩu
  useEffect(() => {
    if (password === "") {
      setIsPasswordValid(null);
      setPasswordError("");
    } else if (!validatePassword(password)) {
      setIsPasswordValid(false);
      setPasswordError("Mật khẩu phải có ít nhất 8 ký tự");
    } else {
      setIsPasswordValid(true);
      setPasswordError("");
    }
  }, [password]);

  // Xác định có được phép submit không
  useEffect(() => {
    setCanSubmit(isEmailValid === true && isPasswordValid === true);
  }, [isEmailValid, isPasswordValid]);

  return (
    <Form className="text-start" style={{margin:'10px'}}>
      <Form.Group controlId="formEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          value={email}
          placeholder="Nhập email"
          onChange={(e) => setEmail(e.target.value)}
          isInvalid={isEmailValid === false}
          isValid={isEmailValid === true}
        />
        <Form.Control.Feedback type="invalid">{emailError}</Form.Control.Feedback>
      </Form.Group>

      <Form.Group controlId="formPassword" className="mt-3">
        <Form.Label>Mật khẩu</Form.Label>
        <Form.Control
          type="password"
          value={password}
          placeholder="Nhập mật khẩu"
          onChange={(e) => setPassword(e.target.value)}
          isInvalid={isPasswordValid === false}
          isValid={isPasswordValid === true}
        />
        <Form.Control.Feedback type="invalid">{passwordError}</Form.Control.Feedback>
      </Form.Group>

      <Button
        variant="primary"
        type="submit"
        className="mt-4"
        disabled={!canSubmit}
      >
        Submit
      </Button>
    </Form>
  );
};

export default LoginForm;
