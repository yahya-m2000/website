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
import { Header, Layout } from "@/components/ui";
import HeaderBackground from "@/components/about/HeaderBackground";
import { SectionTitle, SectionText } from "@/styles/index";

const Insights = () => {
  const [insights, setinsights] = useState<any[]>([]);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const getinsights = async () => {
      try {
        const response = await fetch("/api/insights");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setinsights(data);
      } catch (err) {
        console.error("Failed to fetch insights:", err);
        setError("Failed to load insights. Please try again later.");
      }
    };
    getinsights();
  }, []);

  const handleinsightClick = (id: string) => {
    router.push(`/insights/${id}`);
  };

  if (error) {
    return (
      <Box sx={{ padding: "20px" }}>
        <Typography variant="h2" gutterBottom>
          insights
        </Typography>
        <Typography color="error">{error}</Typography>
      </Box>
    );
  }

  return (
    <Layout>
      <Header />
      <HeaderBackground text="Insights" />
      <Grid container spacing={4}>
        {insights.map((insight) => (
          <Grid item xs={12} sm={6} md={4} key={insight.sys?.id}>
            <Card
              onClick={() => handleinsightClick(insight.fields.slug)}
              className="bg-primary-contrast m-[10vh]"
            >
              <CardMedia
                component="img"
                height={140}
                width={140}
                image={insight.fields.heroImage.fields.file.url}
                alt={insight.fields?.title}
              />
              <CardContent>
                <SectionTitle>{insight.fields?.title}</SectionTitle>
                <SectionText>{insight.fields?.subHeading}</SectionText>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Layout>
  );
};

export default Insights;
