"use client";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { Box, Typography, Container } from "@mui/material";
import Image from "next/image";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { Header, Layout } from "@/app/components/ui";

const InsightPage = () => {
  const [insight, setInsight] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);
  const { slug } = useParams();

  useEffect(() => {
    const getInsight = async () => {
      try {
        const response = await fetch(`/api/insights/${slug}`);
        console.log(slug);

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();

        console.log(data);
        setInsight(data);
      } catch (err) {
        console.error("Failed to fetch insight:", err);
        setError("Failed to load insight. Please try again later.");
      }
    };
    getInsight();
  }, [slug]);

  if (error) {
    return (
      <Box sx={{ padding: "20px" }}>
        <Typography variant="h2" gutterBottom>
          Insight
        </Typography>
        <Typography color="error">{error}</Typography>
      </Box>
    );
  }

  if (!insight) {
    return (
      <Box sx={{ padding: "20px" }}>
        <Typography>Loading...</Typography>
      </Box>
    );
  }

  const createdAt = insight?.createdAt
    ? new Date(insight?.createdAt).toDateString()
    : "Unknown Date";
  return (
    <Layout>
      <Header />
      <Typography variant="h3" gutterBottom>
        {insight.title}
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        {insight.subHeading}
      </Typography>
      <Typography variant="caption" gutterBottom>
        By {insight.author} on {createdAt}
      </Typography>
      <Box my={4}>
        <Image
          src={`https:${insight.heroImage.fields?.file.url}`}
          alt={insight.heroImage.fields?.title}
          width={750}
          height={500}
          style={{ width: "100%", height: "auto" }}
        />
      </Box>
      <Typography variant="body1" gutterBottom>
        {documentToReactComponents(insight.body)}
      </Typography>
    </Layout>
  );
};

export default InsightPage;
