import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function Dashboard() {
  const [dashboardData, setDashboardData] = useState([]);

  useEffect(() => {
    fetch("http://185.193.19.112:22030/api/v1/test/products")
      .then((response) => response.json())
      .then((data) => {
        console.log("data", data);
        setDashboardData(data);
      })
      .catch((err) => console.log("hh", err));
  }, []);

  return (
    <div>
      <div style={{display:"grid", gridTemplateColumns: "repeat(3, 1fr)", gridTemplateRows: "auto"}}>
        {dashboardData.map((e) => (
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={e.imageUrl} />
            <Card.Body>
              <Card.Title>Name: {e.name}</Card.Title>
              <Card.Text>Description: {e.description}</Card.Text>
              <Card.Text>Price: {e.price}</Card.Text>
              <Card.Text>Category: {e.category}</Card.Text>
              <Card.Text>Rating: {e.rating}</Card.Text>
              <Card.Text>Availability: {e.inStock === true? "Yes": "No"}</Card.Text>
              <Button variant="primary">Favorite</Button>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
}

// - Name, Price, Category, Rating, Availability, and an Imag
export default Dashboard;
