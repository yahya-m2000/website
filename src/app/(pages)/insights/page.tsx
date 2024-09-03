"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
} from "@mui/material";

const ArticlesPage = () => {
  const [articles, setArticles] = useState<any[]>([]);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const getArticles = async () => {
      try {
        const response = await fetch("/api/articles");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setArticles(data);
      } catch (err) {
        console.error("Failed to fetch articles:", err);
        setError("Failed to load articles. Please try again later.");
      }
    };
    getArticles();
  }, []);

  const handleArticleClick = (id: string) => {
    router.push(`/articles/${id}`);
  };

  if (error) {
    return (
      <Box sx={{ padding: "20px" }}>
        <Typography variant="h2" gutterBottom>
          Articles
        </Typography>
        <Typography color="error">{error}</Typography>
      </Box>
    );
  }

  return (
    <Box sx={{ padding: "20px" }}>
      <Typography variant="h2" gutterBottom>
        Articles
      </Typography>
      <Grid container spacing={4}>
        {articles.map((article) => (
          <Grid item xs={12} sm={6} md={4} key={article.sys?.id}>
            <Card
              onClick={() => handleArticleClick(article.sys?.id)}
              sx={{ cursor: "pointer" }}
            >
              {/* <CardMedia
                component="img"
                height="140"
                image={article.fields.image.fields.file?.url}
                alt={article.fields?.title}
              /> */}
              <CardContent>
                <Typography variant="h5" component="div">
                  {article.fields?.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {article.fields?.subtitle}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ArticlesPage;
