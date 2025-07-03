import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { Container } from "react-bootstrap";
import PostForm from "./PostForm";

const EditPost = () => {
  const { id } = useParams();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/posts/${id}`);
        setTitle(response.data.title);
        setContent(response.data.content);
      } catch (err) {
        console.error("Lỗi khi lấy bài viết:", err);
        setError("Không tìm thấy bài viết.");
      }
    };

    fetchPost();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title || !content) {
      setError("Vui lòng nhập đầy đủ tiêu đề và nội dung.");
      return;
    }

    try {
      await axios.put(`http://localhost:3000/posts/${id}`, { title, content });
      navigate("/");
    } catch (err) {
      console.error("Lỗi khi cập nhật bài viết:", err);
      setError("Không thể cập nhật bài viết.");
    }
  };

  return (
    <Container className="mt-4" style={{ maxWidth: "600px" }}>
      <h2>Chỉnh sửa bài viết</h2>
      <PostForm
        title={title}
        content={content}
        setTitle={setTitle}
        setContent={setContent}
        onSubmit={handleSubmit}
        error={error}
        isEdit={true}
      />
    </Container>
  );
};

export default EditPost;