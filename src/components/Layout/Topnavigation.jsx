import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Navbar, Nav, Container, Row, Col, Dropdown, Offcanvas, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faTags, faCog, faSignOutAlt, faClipboardList, faHeart, faShareAlt, faEye } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import './topnavigation.css';
import DashboardCards from '../Dashboard/DashboardCards';
import CategoryAdd from '../Elements/CategoryAdd';
import PublishedStory from '../Elements/PublishedStory';
import EditStory from '../Elements/EditStory';
import AddStory from '../Elements/AddStory';
import UnpublishedStory from '../Elements/UnpublishedStory';
import Like from '../Elements/Like';
import Category from '../Elements/Category';

// import CategoryAdd from '../Elements/CategoryAdd';

const TopNavigation = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [show, setShow] = useState(false);  

 
    const logout = () => {
        localStorage.removeItem('userInfo');
        navigate('/');
    };

 
    const handleSettings = () => {
        navigate('/setting');
    };

 
    const handleAddCategoryClick = () => {
        navigate('/dashboard/addcategory');
    };

    const handleCategoryClick = () =>{
        navigate('/dashboard/category')
    }
 
    const handleAddStoriesClick = () => {
        navigate('/dashboard/addstories');
    };

 
    const handleEditStoriesClick = () => {
        navigate('/dashboard/editstories');
    };

    const handlePublishedClick = () =>{
        navigate('/dashboard/publish')
    }

    const handleUnpublishClick = () =>{
        navigate('/dashboard/unpublish')
    }
 
    const handleReportsClick = () => {
        navigate('/dashboard/reports');
    };

    const handleSaveClick = () =>{
        navigate('/dashboard/save')
    }

    const handleLikeClick = () =>{
        navigate('/dashboard/like')
    }

    const handleShareClick = () =>{
        navigate('/dashboard/share')
    }

    const handleViewClick = () =>{
        navigate('/dashboard/view')
    }

 
    const handleToggle = () => setShow(!show);

    return (
        <div className="full-page ">
    
            <Navbar bg="white" expand="lg" className="shadow-sm p-1">
                <Container fluid>
                    <Navbar.Brand href="/dashboard" className="text-primary fw-bold">
                        <img className='medi-logo' alt='logo' src='../assets/logo.png' style={{width: '100%', height: '50px'}} />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={handleToggle} />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                            <input type="text" placeholder="Search" className="form-control me-2" />
                        </Nav>
                    </Navbar.Collapse>

              
                    <Dropdown align="end" className="profile-dropdown">
                        <Dropdown.Toggle variant="link" id="dropdown-basic" className="profile-btn">
                            <img src="../assets/user.png" alt="Profile" className="profile-photo rounded-circle me-2" />
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item onClick={handleSettings}>
                                <FontAwesomeIcon icon={faCog} className="me-2" /> Settings
                            </Dropdown.Item>
                            <Dropdown.Item onClick={() => navigate('/forgotpassword')}>Forgot Password</Dropdown.Item>
                            <Dropdown.Item onClick={logout}>
                                <FontAwesomeIcon icon={faSignOutAlt} className="me-2" /> Logout
                            </Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </Container>
            </Navbar>

      
            <Offcanvas show={show} onHide={() => setShow(false)} placement="start">
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Menu</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <Nav className="flex-column text-dark">
                        <Dropdown as={Nav.Item}>
                            <Dropdown.Toggle as={Nav.Link} className="text-dark">
                                <FontAwesomeIcon icon={faBook} className="me-2" /> Stories
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item as={Link} to="/dashboard/addstories" onClick={handleAddStoriesClick}>Add Story</Dropdown.Item>
                                <Dropdown.Item as={Link} to="/dashboard/editstories" onClick={handleEditStoriesClick}>Edit Story</Dropdown.Item>
                                
                                <Dropdown.Item as={Link} to="/dashboard/publish" onClick={handlePublishedClick}>Edit Story</Dropdown.Item>
                                <Dropdown.Item as={Link} to="/dashboard/unpublish" onClick={handleUnpublishClick}>Unpublished Story</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        <Nav.Link as={Link} to="/dashboard/category" onClick={handleCategoryClick}>
                            <FontAwesomeIcon icon={faTags} className="me-2" /> Category
                        </Nav.Link>
                        <Nav.Link as={Link} to="/dashboard/addcategory" onClick={handleAddCategoryClick}>
                            <FontAwesomeIcon icon={faTags} className="me-2" /> Add Category
                        </Nav.Link>
                        <Nav.Link as={Link} to="/dashboard/reports" onClick={handleReportsClick}>
                            <FontAwesomeIcon icon={faClipboardList} className="me-2" /> Reports
                        </Nav.Link>
                        <Nav.Link as={Link} to="" onClick={handleSaveClick}>
                            <FontAwesomeIcon icon={faClipboardList} className="me-2" /> Save
                        </Nav.Link>
                        <Nav.Link as={Link} to="" onClick={handleLikeClick}>
                            <FontAwesomeIcon icon={faHeart} className="me-2" /> Like
                        </Nav.Link>
                        <Nav.Link as={Link} to="" onClick={handleShareClick}>
                            <FontAwesomeIcon icon={faShareAlt} className="me-2" /> Share
                        </Nav.Link>
                        <Nav.Link as={Link} to="" onClick={handleViewClick}>
                            <FontAwesomeIcon icon={faEye} className="me-2" /> View
                        </Nav.Link>
                        <Button variant="danger" onClick={logout}>
                            <FontAwesomeIcon icon={faSignOutAlt} className="me-2" /> Logout
                        </Button>
                    </Nav>
                </Offcanvas.Body>
            </Offcanvas>

            <Container fluid>
                <Row>
           
                    <Col xs={2} className="sidebar bg-white shadow-sm d-none d-md-block sidebar-section">
                        <Nav className="flex-column p-3">
                            <Dropdown as={Nav.Item}>
                                <Dropdown.Toggle as={Nav.Link} className="text-dark">
                                    <FontAwesomeIcon icon={faBook} className="me-2" /> Stories
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                   
                                    <Dropdown.Item as={Link} to="/dashboard/addstories" onClick={handleAddStoriesClick}>Add Story</Dropdown.Item>
                                    <Dropdown.Item as={Link} to="/dashboard/editstories" onClick={handleEditStoriesClick}>Edit Story</Dropdown.Item>
                                    <Dropdown.Item as={Link} to="/dashboard/publish" onClick={handlePublishedClick}>Published Story</Dropdown.Item>
                                    <Dropdown.Item as={Link} to="/dashboard/unpublish" onClick={handleUnpublishClick}>UnPublished Story</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                            <Nav.Link as={Link} to="/dashboard/category" onClick={handleCategoryClick} className="text-dark">
                                <FontAwesomeIcon icon={faTags} className="me-2" /> Category
                            </Nav.Link>
                            <Nav.Link as={Link} to="/dashboard/addcategory" onClick={handleAddCategoryClick} className="text-dark">
                                <FontAwesomeIcon icon={faTags} className="me-2" /> Add Category
                            </Nav.Link>
                            <Nav.Link as={Link} to="/dashboard/reports" onClick={handleReportsClick} className="text-dark">
                                <FontAwesomeIcon icon={faClipboardList} className="me-2" /> Reports
                            </Nav.Link>
                            <Nav.Link as={Link} to="" onClick={handleSaveClick} className="text-dark">
                                <FontAwesomeIcon icon={faClipboardList} className="me-2" /> Save
                            </Nav.Link>
                            <Nav.Link as={Link} to="" onClick={handleLikeClick} className="text-dark">
                                <FontAwesomeIcon icon={faHeart} className="me-2" /> Like
                            </Nav.Link>
                            <Nav.Link as={Link} to="" onClick={handleShareClick} className="text-dark">
                                <FontAwesomeIcon icon={faShareAlt} className="me-2" /> Share
                            </Nav.Link>
                            <Nav.Link as={Link} to="" onClick={handleViewClick} className="text-dark">
                                <FontAwesomeIcon icon={faEye} className="me-2" /> View
                            </Nav.Link>
                            <Nav.Link as={Link} to="" onClick={handleSettings} className="text-dark">
                                <FontAwesomeIcon icon={faCog} className="me-2" /> Settings
                            </Nav.Link>
                            <Button variant="danger" onClick={logout} className="mt-3">
                                <FontAwesomeIcon icon={faSignOutAlt} className="me-2" /> Logout
                            </Button>
                        </Nav>
                    </Col>
 
                    <Col xs={12} md={10} className="allbg p-4" style={{backgroundColor: '#f8f9fa'}}>
                       {location.pathname === '/dashboard' && (
                            <>
                                 <h3 className="mb-4">Dashboard</h3>
                                <DashboardCards />
                            </>
                        )}
{location.pathname === '/dashboard/addcategory' && (
    <>
        <h3 className="mb-4">Add Category</h3>
        <CategoryAdd />
    </>
)}

{location.pathname === '/dashboard/publish' && (
    <>
        <h3 className="mb-4">Published Stories</h3>
        <PublishedStory />
    </>
)}

{location.pathname === '/dashboard/reports' && (
    <>
    <h3>Reports</h3>

    </>
)}

{location.pathname === '/dashboard/addstories' &&(
<>
<h3>Create Story</h3>
<AddStory />
</>
)}

{location.pathname === '/dashboard/editstories' && (
    <>
    <h3>Edit Story</h3>
    <EditStory />
    </>
)}

{location.pathname === '/dashboard/unpublish' && (
    <>
    <h3>Unpublished Stories</h3>
    <UnpublishedStory />
    </>
)}

{location.pathname === '/dashboard/category' && (
    <>
    <h3>Categories</h3>
    <Button
                                // variant="outline-secondary"
                                className="btn btn-primary-600"
                                type="button"
                            >
                                Add Category
                            </Button>
    <Category />
    </>
)}

 
                        
                         
                    </Col>
                     
                        
                       
                    
                </Row>
            </Container>
        </div>
    );
};


export default TopNavigation;