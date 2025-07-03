import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Container } from "react-bootstrap";
import PostForm from "./PostForm";

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title || !content) {
      setError("Vui lòng nhập đầy đủ tiêu đề và nội dung.");
      return;
    }

    try {
      await axios.post("http://localhost:3000/posts", { title, content });
      navigate("/");
    } catch (err) {
      console.error("Lỗi khi tạo bài viết:", err);
      setError("Không thể tạo bài viết.");
    }
  };

  return (
    <Container className="mt-4" style={{ maxWidth: "600px" }}>
      <h2>Tạo bài viết mới</h2>
      <PostForm
        title={title}
        content={content}
        setTitle={setTitle}
        setContent={setContent}
        onSubmit={handleSubmit}
        error={error}
        isEdit={false}
      />
    </Container>
  );
};

export default CreatePost;
