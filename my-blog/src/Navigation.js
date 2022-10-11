// // function Hello (props) {
// //     return (
// //         <h1> Hello {props.name}!</h1>
// //     )
// // }
// // export default Hello

// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';



// // export default BasicExample

// function BlogNav() {
//   return (
//     <>
//     <h1>uggghhhhh</h1>
//       <Navbar>
//         <Container>
//           <Navbar.Brand href="#home">Navbar</Navbar.Brand>
//           <Nav className="me-auto">
//             <Nav.Link href="#home">Home</Nav.Link>
//             <Nav.Link href="#blog">Blog</Nav.Link>
//             <Nav.Link href="#work">Word</Nav.Link>
//           </Nav>
//         </Container>
//   </Navbar>
//     </>
//   ); 
// }

// export default BlogNav

import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function ContainerOutsideExample() {
  return (
    <Container>
      <Navbar expand="lg" variant="light" bg="light">
        <Container>
          <Navbar.Brand href="#">Navbar</Navbar.Brand>
        </Container>
      </Navbar>
    </Container>
  );
}

export default ContainerOutsideExample;