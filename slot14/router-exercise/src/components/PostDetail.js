import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Card, Alert } from 'react-bootstrap';

function PostDetail() {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch('/posts.json')
      .then((res) => res.json())
      .then((data) => {
        const found = data.find((p) => p.id === id);
        if (found) setPost(found);
        else setError(true);
      })
      .catch(() => setError(true));
  }, [id]);

  if (error) return (
    <Container className="mt-4">
      <Alert variant="danger">Post không tồn tại.</Alert>
    </Container>
  );

  return post ? (
    <Container className="mt-4">
      <Card>
        <Card.Body>
          <Card.Title>{post.title}</Card.Title>
          <Card.Text>{post.content}</Card.Text>
        </Card.Body>
      </Card>
    </Container>
  ) : null;
}

export default PostDetail;
