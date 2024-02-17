import React, { useState } from "react";
import Form from "./Form";
import { Card } from "react-bootstrap";
import Header from "./Header";
import data from "../data/data.json";

const Banner: React.FC = () => {
  const carBrands = data;

  const [showForm, setShowForm] = useState(false);
  const [selectedBrand, setSelectedBrand] = useState("");

  const handleLogoClick = (brandName: string) => {
    setSelectedBrand(brandName);
    setShowForm(true);
  };

  return (
    <>
      <Header />
      <div className="container p-5">
        <div className="row row-cols-1 row-cols-md-5 g-4">
          {carBrands.map((brand) => (
            <div key={brand.name} className="col">
              <Card
                className="h-100"
                style={{ cursor: "pointer" }}
                onClick={() => handleLogoClick(brand.name)}
              >
                {/* <Card.Img variant="top" src={brand.logoUrl} /> */}
                <Card.Body>
                  <Card.Title>{brand.name}</Card.Title>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
        {showForm && <Form />}
      </div>
    </>
  );
};

export default Banner;
