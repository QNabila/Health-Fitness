import Button from "@restart/ui/esm/Button";
import React, { useEffect, useState } from "react";
import { Card, Modal } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import useFirebase from "../../hook/useFirebase";
import "./Service.css";
const Service = () => {
  const { user } = useFirebase();
  let { serviceId } = useParams();
  const [services, setServices] = useState([]);

  const [program, setProgram] = useState({});
  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  // call hbe jokon amar shob data load hye state e set hbe
  useEffect(() => {
    const foundProgram = services.find((service) => service.id === serviceId);
    setProgram(foundProgram);
  }, [services]);

  // For pruchase now button
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <h2 className="mt-5 mb-5 program-name">{program?.name}</h2>
      <img src={program?.img} className="program-img"alt=" " />
      <Card className="service mt-5 text-center">
        <Card.Body>
          <Card.Title className="price">Price: ${program?.price}</Card.Title>
          <Card.Title>{program?.description}</Card.Title>
          <Button className="cart-btn" variant="primary" onClick={handleShow}>
            Purchase This Plan
          </Button>
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Hey <span className="modal-name">{user.displayName}! </span>nice choice!</Modal.Title>
            </Modal.Header>
            <Modal.Body className="fw-bold">
              Thanks for confirming.You will be contacted soon.
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" id="close-btn" onClick={handleClose}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Service;
