import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container, Button, Card, Row, Col, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";

const PostList = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchPosts = async () => {
    try {
      const response = await axios.get("http://localhost:3000/posts");
      setPosts(response.data);
    } catch (err) {
      console.error("Lỗi khi lấy dữ liệu:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm("Bạn có chắc chắn muốn xóa bài viết này?")) {
      try {
        await axios.delete(`http://localhost:3000/posts/${id}`);
        setPosts(posts.filter(post => post.id !== id));
      } catch (err) {
        console.error("Lỗi khi xóa bài viết:", err);
      }
    }
  };

  if (loading) {
    return (
      <Container className="text-center mt-5">
        <Spinner animation="border" variant="primary" />
      </Container>
    );
  }

  return (
    <Container className="mt-4">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2>Danh sách bài viết</h2>
        <Button as={Link} to="/create" variant="success">+ Thêm bài viết</Button>
      </div>
      <Row>
        {posts.map((post) => (
          <Col md={4} className="mb-4" key={post.id}>
            <Card className="h-100">
              <Card.Body>
                <Card.Title>{post.title}</Card.Title>
                <Card.Text>{post.content}</Card.Text>
              </Card.Body>
              <Card.Footer>
                <Button
                  variant="warning"
                  size="sm"
                  as={Link}
                  to={`/edit/${post.id}`}
                  className="me-2"
                >
                  Sửa
                </Button>
                <Button
                  variant="danger"
                  size="sm"
                  onClick={() => handleDelete(post.id)}
                >
                  Xóa
                </Button>
              </Card.Footer>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default PostList;
