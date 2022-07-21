import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './Auth/Auth';

export const Navigation = (props) => {
    const navigate = useNavigate()
    const auth = useAuth()
    const isUser = sessionStorage.getItem("User")

    const handleLogout = () => {
        sessionStorage.removeItem("User")
        auth.logout()
        navigate('/login')
    }
    return (
        <Navbar className="primary-bg" expand="lg">
            <Container fluid>
                <Navbar.Brand onClick={()=> navigate('/')} className="text-white font-bold cursor-pointer" style={{ fontSize: "42px", marginRight: "20px" }}>LMS</Navbar.Brand>
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
                        <Nav.Link className="text-white" onClick={()=> navigate('/')}>Home</Nav.Link>
                    </Nav>
                    {
                        isUser && (
                            <button className="navButton" onClick={handleLogout}>Logout</button>
                        )}
                    
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}