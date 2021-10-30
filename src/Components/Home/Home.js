import Button from "@restart/ui/esm/Button";
import React, { useEffect, useState } from "react";
import { Card, CardGroup, Carousel, Row } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import "./Home.css";
const Home = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div classsName="container">
      <div className="slider">
        <Carousel>
          <Carousel.Item>
            <img 
              className="d-block w-100"
              src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3 className="slider-title">
                Be <span>fit</span>
                <br /> Be <span>healthy</span>
              </h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://images.unsplash.com/photo-1600618528240-fb9fc964b853?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80"
              alt="Second slide"
            />

            <Carousel.Caption>
              <h3 className="slider-title">
                Be <span>fit</span>
                <br /> Be <span>healthy</span>
              </h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=920&q=80"
              alt="Third slide"
            />
            <Carousel.Caption>
              <h3 className="slider-title">
                Be <span>fit</span>
                <br /> Be <span>healthy</span>
              </h3>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
      <div className="services">
        <h2 className="goals-title">Choose your goals</h2>
        <h2 className="program-title">OUR PROGRAMS</h2>
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
                  <Card.Text className="service-description">
                    {service.description}
                  </Card.Text>
                  <NavLink to={`/services/${service?.id}`}>
                    <Button>Learn More</Button>
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

export default Home;
