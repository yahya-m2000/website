"use client";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { Box, Typography, Container } from "@mui/material";
import Image from "next/image";

const ArticlePage = () => {
  const [article, setArticle] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);
  const { id } = useParams();

  useEffect(() => {
    const getArticle = async () => {
      try {
        const response = await fetch(`/api/articles/${id}`);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setArticle(data);
      } catch (err) {
        console.error("Failed to fetch article:", err);
        setError("Failed to load article. Please try again later.");
      }
    };
    getArticle();
  }, [id]);

  if (error) {
    return (
      <Box sx={{ padding: "20px" }}>
        <Typography variant="h2" gutterBottom>
          Article
        </Typography>
        <Typography color="error">{error}</Typography>
      </Box>
    );
  }

  if (!article) {
    return (
      <Box sx={{ padding: "20px" }}>
        <Typography>Loading...</Typography>
      </Box>
    );
  }

  return (
    <Container sx={{ padding: "20px" }}>
      <Typography variant="h3" gutterBottom>
        {article.title}
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        {article.subtitle}
      </Typography>
      <Typography variant="caption" gutterBottom>
        By {article.author} on {new Date(article.date).toDateString()}
      </Typography>
      <Box my={4}>
        {/* <Image
          src={article.image.fields.file.url}
          alt={article.title}
          style={{ width: "100%" }}
        /> */}
      </Box>
      <Typography variant="body1" gutterBottom>
        {article.body}
      </Typography>
    </Container>
  );
};

export default ArticlePage;
