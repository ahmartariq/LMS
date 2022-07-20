import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './Auth/Auth';

export const Navigation = (props) => {
    const navigate = useNavigate()
    const auth = useAuth()

    const handleLogout = () => {
        auth.logout()
        navigate('/login')
    }
    return (
        <Navbar className="primary-bg" expand="lg">
            <Container fluid>
                <Navbar.Brand href="/" className="text-white font-bold" style={{ fontSize: "42px", marginRight: "20px" }}>LMS</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        {props.locate !== "/" ?
                            <Nav.Link className="text-white" onClick={() => navigate(-1)}><ArrowBackIcon />Back</Nav.Link>
                            : null}
                        <Nav.Link className="text-white" href="/">Home</Nav.Link>
                    </Nav>
                    {
                        auth.user && (
                            <button className="navButton" onClick={handleLogout}>Loutout</button>
                        )}
                    
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}