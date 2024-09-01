"use client"
import React from 'react'
import { SectionText, SectionTitle, StyledButton } from '../StyledComponents'
import { Container } from '@mui/material'


const LetsConnect = () => {
    return (
        <Container sx={{flex: 1, display: "flex", flexDirection: "column",alignItems: "center", marginBottom: "10vh"}}>
            <SectionTitle>Lets Connect</SectionTitle>
            <SectionText >
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            </SectionText>
            <StyledButton variant='contained'>Connect here</StyledButton>
        </Container>
    )
}

export default LetsConnect