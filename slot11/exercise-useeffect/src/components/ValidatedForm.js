import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";

const ValidatedForm = () => {
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [country, setCountry] = useState("");
  const [agreed, setAgreed] = useState(false);

  const [nameValid, setNameValid] = useState(null);
  const [genderValid, setGenderValid] = useState(null);
  const [countryValid, setCountryValid] = useState(null);
  const [agreedValid, setAgreedValid] = useState(null);

  const [formValid, setFormValid] = useState(false);

  // Xác thực họ tên: ít nhất 3 ký tự
  useEffect(() => {
    setNameValid(name.trim().length >= 3);
  }, [name]);

  // Xác thực giới tính: không được để trống
  useEffect(() => {
    setGenderValid(gender !== "");
  }, [gender]);

  // Country: phải nhập, không rỗng
  useEffect(() => {
    setCountryValid(country.trim() !== "");
  }, [country]);

  // Đồng ý điều khoản
  useEffect(() => {
    setAgreedValid(agreed);
  }, [agreed]);

  // Kiểm tra toàn bộ form
  useEffect(() => {
    setFormValid(nameValid && genderValid && countryValid && agreedValid);
  }, [nameValid, genderValid, countryValid, agreedValid]);

  return (
    <Form className="text-start" style={{margin:'10px'}}>
      <h3 className="text-center mb-4">Đăng ký</h3>

      <Form.Group controlId="formName">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Nhập họ tên"
          value={name}
          onChange={(e) => setName(e.target.value)}
          isInvalid={nameValid === false}
          isValid={nameValid === true}
        />
        <Form.Control.Feedback type="invalid">
          Họ tên phải có ít nhất 3 ký tự
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mt-3">
        <Form.Label>Gender</Form.Label>
        <div>
          <Form.Check
            inline
            type="radio"
            label="Nam"
            name="gender"
            value="male"
            onChange={(e) => setGender(e.target.value)}
            checked={gender === "male"}
          />
          <Form.Check
            inline
            type="radio"
            label="Nữ"
            name="gender"
            value="female"
            onChange={(e) => setGender(e.target.value)}
            checked={gender === "female"}
          />
        </div>
        {genderValid === false && (
          <div className="text-danger">Vui lòng chọn giới tính</div>
        )}
      </Form.Group>

      <Form.Group controlId="formCountry" className="mt-3">
        <Form.Label>Country</Form.Label>
        <Form.Control
          type="text"
          placeholder="Nhập tên quốc gia"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          isInvalid={countryValid === false}
          isValid={countryValid === true}
        />
        <Form.Control.Feedback type="invalid">
          Vui lòng nhập quốc gia
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group controlId="formCheckbox" className="mt-3">
        <Form.Check
          type="checkbox"
          label="Tôi đồng ý với điều khoản"
          checked={agreed}
          onChange={(e) => setAgreed(e.target.checked)}
          isInvalid={agreedValid === false}
        />
      
      </Form.Group>

      <Button
        type="submit"
        className="mt-4"
        variant="primary"
        disabled={!formValid}
      >
        Gửi
      </Button>
    </Form>
  );
};

export default ValidatedForm;
