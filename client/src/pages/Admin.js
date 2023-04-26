import React, { useState } from "react";
import { Button, Container } from "react-bootstrap";
import CreateBrand from "../components/modals/CreateBrand";
import CreateDevice from "../components/modals/CreateDevice";
import CreateType from "../components/modals/CreateType";

const Admin = () => {
   const [brandVisible, setBrandVisible] = useState(false)
   const [typedVisible, setTypedVisible] = useState(false)
   const [deviceVisible, setDeviceVisible] = useState(false)
   return (
      <Container className="d-flex flex-column">
         <Button 
            variant={"outline-dark"} 
            className="mt-4 p-2"
            onClick={() => setTypedVisible(true)}
         >
            Добавить тип
         </Button>
         <Button 
            variant={"outline-dark"} 
            className="mt-4 p-2"
            onClick={() => setBrandVisible(true)}
         >
            Добавить бренд
         </Button>
         <Button 
            variant={"outline-dark"} 
            className="mt-4 p-2"
            onClick={() => setDeviceVisible(true)}
         >
            Добавить устройство
         </Button>
         <CreateBrand show={brandVisible} onHide={() => setBrandVisible(false)}/>
         <CreateDevice show={deviceVisible} onHide={() => setDeviceVisible(false)}/>
         <CreateType show={typedVisible} onHide={() => setTypedVisible(false)}/>
      </Container>
   )
}

export default Admin;