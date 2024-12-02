import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';

const Header = () => {

    const navLinkStyle =({isActive}) =>{
        return {
            color: isActive ? "red" : "yellow" ,
            textDecoration: isActive ? "underline" : "none"
        }
    }
    return (
        <>
            <Navbar expand="lg" className="bg-color">
                <Container>
                    <Navbar.Brand href="#home" className='text-color'>
                        <div className='d-flex gap-2 header-responsive' >
                            <svg id="Isolation_Mode" className='logo-size' data-name="Isolation Mode" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 90.69 65.92">

                                <path class="cls-1" d="M90.69,26.24v39.68h-14.58V25.62c0-3.22-1.31-6.13-3.41-8.24-2.11-2.11-5.03-3.41-8.24-3.41-6.44,0-11.66,5.22-11.66,11.66v40.3h-14.58V26.24c0-14.49,11.75-26.24,26.24-26.24,7.25,0,13.81,2.94,18.55,7.69,4.75,4.75,7.69,11.31,7.69,18.55Z" />
                                <path class="cls-2" d="M52.48,26.24v39.68h-14.58V25.62c0-3.22-1.31-6.13-3.41-8.24-2.11-2.11-5.03-3.41-8.24-3.41-6.44,0-11.66,5.22-11.66,11.66v40.3H0V26.24C0,11.75,11.75,0,26.24,0c7.25,0,13.81,2.94,18.55,7.69,4.75,4.75,7.69,11.31,7.69,18.55Z" />
                            </svg>
                            <div className='d-flex flex-column'>
                            <div className='font-size'>PHYSICS WITH</div><div className='font-wight' style={{marginTop:'-7px'}}>WAQAR Hassan </div>
                            </div>
                        </div>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" className="custom-toggler" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="text-color d-flex gap-4 dropdown-responsive">
                            <NavLink style={navLinkStyle}  className='text-color' to={'/'}>HOME</NavLink>
                            <NavLink style={navLinkStyle}  className='text-color' to={'/Courses'}>COURSES</NavLink>
                            <NavLink style={navLinkStyle}  className='text-color' to={'/success'}>SUCCESS STORIES</NavLink>
                            <NavLink style={navLinkStyle}  className='text-color' to={'/registration'}>REGISTRATION FROM</NavLink>


                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <div className='bg-white'></div>
        </>
    )
}


export default Header;