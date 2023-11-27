import React, { useState } from 'react';
import { Container, Button } from "react-bootstrap";
import './employee_style.css'

const EmployeeButton = () => {
    const [isHovered, setHovered] = useState(false);

    return (
        <Container fluid style={{ margin: 5, padding: 5 }} className="sort-button">
            <Button size="sm" variant="light">
                11/01/23 - 12/01/23
                {' '}
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-down" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1"/>
                </svg>
            </Button>
            <Button size="sm" variant="light">
                Filter
                {' '}
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-down" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1"/>
                </svg>
            </Button>
            <Button size="sm" variant="light">
                Sort
                {' '}
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-down" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1"/>
                </svg>
            </Button>
            <Button size="sm" variant={isHovered ? 'success' : 'light'}
            onMouseOver={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}>
                Mark Selected Complete
            </Button>
        </Container>
    );
};

export default EmployeeButton;