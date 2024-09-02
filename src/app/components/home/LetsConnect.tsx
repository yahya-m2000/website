"use client"
import React from 'react'
import { SectionText, SectionTitle, StyledButton } from '../style'
import { Box, Container } from '@mui/material'
import theme from '@/app/theme'


const LetsConnect = () => {
    return (
        <Container sx={{paddingBlockEnd: "10vh", paddingBlockStart: "5vh"}}>
            {/*  eslint-disable-next-line react/no-unescaped-entities */}
            <SectionTitle align='center'>Let's Connect</SectionTitle>
            <Box
                sx={{
                    margin: "0 auto", // Center the text horizontally
                    maxWidth: "400px", // Keep the maxWidth as specified
                    padding: "0 15px", // Add padding for mobile
                    [theme.breakpoints.down("sm")]: {
                        maxWidth: "90%", // Adjust the max-width on smaller screens
                        padding: "0 10px", // Add padding for small screens
                    },
                }}
            >
                <SectionText
                    sx={{
                        lineHeight: 1.5, // Adjust line height
                        wordWrap: "break-word",
                        overflowWrap: "break-word",
                        [theme.breakpoints.down("sm")]: {
                            fontSize: "0.9rem", // Smaller font on mobile
                        },
                    }}
                >
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                    accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
                    ab illo inventore veritatis et quasi architecto beatae vitae dicta
                    sunt explicabo. Nemo enim v
                </SectionText>
                <StyledButton variant="contained">Contact Us</StyledButton>
            </Box>
        </Container>
    )
}

export default LetsConnect