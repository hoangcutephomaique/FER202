import React from "react";
import PropTypes from "prop-types";
import { Form, Button, Alert } from "react-bootstrap";

const PostForm = ({ title, content, setTitle, setContent, onSubmit, error, isEdit }) => {
  return (
    <Form onSubmit={onSubmit}>
      {error && <Alert variant="danger">{error}</Alert>}
      <Form.Group className="mb-3">
        <Form.Label>Tiêu đề</Form.Label>
        <Form.Control
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Nhập tiêu đề bài viết"
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Nội dung</Form.Label>
        <Form.Control
          as="textarea"
          rows={5}
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Nhập nội dung bài viết"
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        {isEdit ? "Cập nhật" : "Tạo bài viết"}
      </Button>
    </Form>
  );
};

PostForm.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  setTitle: PropTypes.func.isRequired,
  setContent: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  error: PropTypes.string,
  isEdit: PropTypes.bool
};

export default PostForm;