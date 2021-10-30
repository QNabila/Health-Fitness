import Button from '@restart/ui/esm/Button';
import React, { useEffect, useState } from 'react';
import { Card, CardGroup, Row } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import './Services.css'
const Services = () => {
    const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
    return (
      <div>
        <h2 className="services-title">OUR PROGRAMS</h2>
            <div className="services">
        <Row xs={1} md={2} className="g-3 w-100">
          {services.map((service) => (
            <CardGroup>
              <Card>
                <Card.Img
                  variant="top"
                  src={service.img}
                  className="service-img"
                />
                <Card.Body>
                  <Card.Title className="service-title">
                    {service.name}
                  </Card.Title>
                  <Card.Text className="service-price">
                    ${service.price}
                  </Card.Text>
                  <NavLink to={`/services/${service?.id}`}>
                    <Button className="learn-btn">Learn More</Button>
                  </NavLink>
                </Card.Body>
              </Card>
            </CardGroup>
          ))}
        </Row>
      </div>
        </div>
    );
};

export default Services;