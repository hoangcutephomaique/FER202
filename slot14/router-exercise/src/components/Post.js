import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Container, ListGroup, Spinner, Alert } from 'react-bootstrap';

function Post() {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/posts.json')
      .then((res) => {
        if (!res.ok) throw new Error('Network error');
        return res.json();
      })
      .then((data) => {
        setPosts(data);
        setLoading(false);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  }, []);

  return (
    <Container className="mt-4">
      <h2>Post List</h2>
      {loading && <Spinner animation="border" />}
      {error && <Alert variant="danger">Không thể tải dữ liệu.</Alert>}
      <ListGroup>
        {posts.map((post) => (
          <ListGroup.Item key={post.id} action as={Link} to={`/post/${post.id}`}>
            {post.title}
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Container>
  );
}

export default Post;
