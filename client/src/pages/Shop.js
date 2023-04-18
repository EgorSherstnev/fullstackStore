import React from "react";
import { Col, Container, Form } from "react-bootstrap";
import TypeBar from "../components/TypeBar";
import BrandBar from "../components/BrandBar";
import DeviceList from "../components/DeviceList";

const Shop = () => {
   return (
      <Container>
         <Form className="mt-2">
            <Col md={3}>
               <TypeBar/>
            </Col>
            <Col md={9}>
               <BrandBar/>
               <DeviceList/>
            </Col>
         </Form>
      </Container>
   )
}

export default Shop;