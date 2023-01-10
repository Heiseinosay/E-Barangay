import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

function BrandExample() {
  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
            <Navbar.Brand href="#home">
                <img
                    alt=""
                    src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                />{' '}
                BARANGAY MANAGEMENT SYSTEM
            </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
}

export default BrandExample;