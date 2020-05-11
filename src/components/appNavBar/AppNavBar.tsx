import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { routes } from "src/Routes";
import "./navBar.scss";
// import Form from "react-bootstrap/Form";
// import FormControl from "react-bootstrap/FormControl";
// import Button from "react-bootstrap/Button";
// import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";
// import ReactDOM from "react-dom";
// import { NavLink, withRouter, RouteComponentProps } from "react-router-dom";

class AppNavBar extends React.Component<any, any> {
  constructor(props: any, context: any) {
    super(props, context);
    this.state = {
      validSubmission: false,
    };
  }

  public render() {
    return (
      <Navbar className="color-nav" variant="light">
        <Navbar.Brand href={routes.overview.view()}>Bill Budget App</Navbar.Brand>
        <Nav className="mr-auto">
          {/* <Nav.Link href={routes.home.view()}>Home</Nav.Link> */}
          <Nav.Link href={routes.overview.view()}>Overview</Nav.Link>
          <Nav.Link href={routes.add.view()}>Create New Bill</Nav.Link>
          <Nav.Link href={routes.bills.view()}>All Bills</Nav.Link>
        </Nav>
        {/* <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-primary">Search</Button>
        </Form> */}
      </Navbar>
    );
  }
}
export default AppNavBar;
