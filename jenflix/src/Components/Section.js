import React from "react";
import PropTypes from "prop-types"
import styled from "styled-components"

const Container = styled.div`
    :not(:last-child){
        margin-bottom:50px;
    }
`;

const Title = styled.span`
    font-size:14px; 
    font-weight:600;
    margin-bottom:20px;
`;

const Grid = styled.div`
    margin-top:25px;
`



const Section = ({title, children}) => (
    <Container>
        <Title>{title}</Title>
        <Grid>{children}</Grid>
    </Container>
);

Section.PropTypes = {
    title : PropTypes.string.isRequired,
    children : PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
}

export default Section