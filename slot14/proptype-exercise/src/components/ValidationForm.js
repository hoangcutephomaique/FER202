// components/ValidationForm.js
import React, { useState } from "react";
import PropTypes from "prop-types";
import { Form, Button, Container, Alert } from "react-bootstrap";

const ValidationForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    email: "",
    phone: "",
    agree: false,
  });

  const [errors, setErrors] = useState({});
  const [showAlert, setShowAlert] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const validateForm = () => {
    const newErrors = {};
    const nameRegex = /^.{3,50}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[0-9]{10,15}$/;
    const ageNum = parseInt(formData.age, 10);

    if (!formData.name || !nameRegex.test(formData.name)) {
      newErrors.name = "Tên phải từ 3 đến 50 ký tự.";
    }

    if (!formData.age || isNaN(ageNum) || ageNum < 18 || ageNum > 100) {
      newErrors.age = "Tuổi phải từ 18 đến 100.";
    }

    if (!formData.email || !emailRegex.test(formData.email)) {
      newErrors.email = "Email không hợp lệ.";
    }

    if (!formData.phone || !phoneRegex.test(formData.phone)) {
      newErrors.phone = "Số điện thoại phải từ 10 đến 15 chữ số.";
    }

    if (!formData.agree) {
      newErrors.agree = "Bạn phải đồng ý với điều khoản.";
    }

    setErrors(newErrors);
    setShowAlert(Object.keys(newErrors).length > 0);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setShowAlert(false);
      onSubmit(formData);
    }
  };

  return (
    <Container className="mt-4">
      <h3>Form Kiểm Tra Dữ Liệu</h3>

      {showAlert && (
        <Alert variant="danger">
          Vui lòng kiểm tra lại thông tin trước khi gửi.
        </Alert>
      )}

      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formName" className="mb-3">
          <Form.Label>Tên</Form.Label>
          <Form.Control
            type="text"
            name="name"
            placeholder="Nhập tên"
            value={formData.name}
            onChange={handleChange}
            isInvalid={!!errors.name}
          />
          <Form.Control.Feedback type="invalid">{errors.name}</Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="formAge" className="mb-3">
          <Form.Label>Tuổi</Form.Label>
          <Form.Control
            type="number"
            name="age"
            placeholder="Nhập tuổi"
            value={formData.age}
            onChange={handleChange}
            isInvalid={!!errors.age}
          />
          <Form.Control.Feedback type="invalid">{errors.age}</Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="formEmail" className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            name="email"
            placeholder="Nhập email"
            value={formData.email}
            onChange={handleChange}
            isInvalid={!!errors.email}
          />
          <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="formPhone" className="mb-3">
          <Form.Label>Số điện thoại</Form.Label>
          <Form.Control
            type="text"
            name="phone"
            placeholder="Nhập số điện thoại"
            value={formData.phone}
            onChange={handleChange}
            isInvalid={!!errors.phone}
          />
          <Form.Control.Feedback type="invalid">{errors.phone}</Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="formAgree" className="mb-3">
          <Form.Check
            type="checkbox"
            name="agree"
            label="Tôi đồng ý với điều khoản"
            checked={formData.agree}
            onChange={handleChange}
            isInvalid={!!errors.agree}
            feedback={errors.agree}
            feedbackType="invalid"
          />
        </Form.Group>

        <Button type="submit" variant="primary">Gửi</Button>
      </Form>
    </Container>
  );
};

ValidationForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default ValidationForm;
