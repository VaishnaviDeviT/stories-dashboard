import React from "react";
import { Row, Col, Card, Container } from "react-bootstrap";
import { FaBook, FaRegNewspaper, FaFolder, FaLayerGroup, FaThumbsUp, FaShareAlt, FaEye, FaRegBookmark } from "react-icons/fa";
import './DashboardCard.css';

const DashboardCards = () => {
    return (

        
        <Container className="my-4">
             
            <Row className="g-3 p-3">
                <Col md={3} sm={6}>
                    <Card className="shadow-sm h-100 bg-light-blue">
                        <Card.Body className="position-relative">
                            <div className="icon-wrapper">
                                
                            </div>
                            <div>
                                <Card.Title>Total Stories <FaBook size={24} /></Card.Title>
                                <h2>40,689</h2>
                                <p className="text-success">135 Posts Yesterday</p>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                
                <Col md={3} sm={6}>
                    <Card className="shadow-sm h-100 bg-light-purple">
                        <Card.Body className="position-relative">
                            <div className="icon-wrapper">
                                
                            </div>
                            <div>
                                <Card.Title>Published Stories<FaRegNewspaper size={24} /></Card.Title>
                                <h2>28,293</h2>
                                <p className="text-danger">50 Posts Yesterday</p>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                
                <Col md={3} sm={6}>
                    <Card className="shadow-sm h-100 bg-light-pink">
                        <Card.Body className="position-relative">
                            <div className="icon-wrapper">
                                
                            </div>
                            <div>
                                <Card.Title>Un-Published Stories<FaFolder size={24} /></Card.Title>
                                <h2>12,780</h2>
                                <p className="text-primary">85 Posts Yesterday</p>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                
                <Col md={3} sm={6}>
                    <Card className="shadow-sm h-100 bg-light-green">
                        <Card.Body className="position-relative">
                            <div className="icon-wrapper">
                                
                            </div>
                            <div>
                                <Card.Title>Categories<FaLayerGroup size={24} /></Card.Title>
                                <h2>29</h2>
                                <p className="text-primary">5 Posts Yesterday</p>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            <Row className="g-3 p-3">
                <Col md={3} sm={6}>
                    <Card className="shadow-sm h-100 bg-light-pink">
                        <Card.Body className="position-relative">
                            <div className="icon-wrapper">
                                
                            </div>
                            <div>
                                <Card.Title>Liked Stories<FaThumbsUp size={24} /></Card.Title>
                                <h2>40,689</h2>
                                <p className="text-success">85% Up from Yesterday</p>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>

                <Col md={3} sm={6}>
                    <Card className="shadow-sm h-100 bg-light-blue">
                        <Card.Body className="position-relative">
                            <div className="icon-wrapper">
                                
                            </div>
                            <div>
                                <Card.Title>Shares Count<FaShareAlt size={24} /></Card.Title>
                                <h2>10,293</h2>
                                <p className="text-primary">1.3% Up from Last Week</p>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>

                <Col md={3} sm={6}>
                    <Card className="shadow-sm h-100 bg-light-purple">
                        <Card.Body className="position-relative">
                            <div className="icon-wrapper">
                                
                            </div>
                            <div>
                                <Card.Title>Total Views<FaEye size={24} /></Card.Title>
                                <h2>2,040</h2>
                                <p className="text-primary">1.3% Up from Last Week</p>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>

                <Col md={3} sm={6}>
                    <Card className="shadow-sm h-100 bg-light-orange">
                        <Card.Body className="position-relative">
                            <div className="icon-wrapper">
                                
                            </div>
                            <div>
                                <Card.Title>Total Saved<FaRegBookmark size={24} /></Card.Title>
                                <h2>205</h2>
                                <p className="text-success">300 Yesterday Views</p>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>


            <Row className="g-3 mt-4">
                            <Col>
                                <Card className="p-3 shadow-sm">
                                    <h5>Monthly Published Stories</h5>
                                    
                                    <div style={{ height: '200px', backgroundColor: '#f5f5f5' }}></div>
                                </Card>
                            </Col>
                        </Row>
        </Container>
    );
};

export default DashboardCards;
