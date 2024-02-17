import React, { useState } from "react";

const Form: React.FC = () => {
  const [formData, setFormData] = useState({
    model: "",
    location: "",
    color: "",
    owners: "",
    year: "",
    transmission: "",
    insurance: "",
    fitments: "",
    kms: "",
    photo: "",
  });

  const [showJson, setShowJson] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   console.log(JSON.stringify(formData, null, 2));
  // };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setShowJson(true);
    console.log(JSON.stringify(formData, null, 2));
  };

  return (
    <div className="container mt-4">
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col">
            <label>Model:</label>
            <input
              className="form-control"
              type="text"
              name="model"
              value={formData.model}
              onChange={handleChange}
            />
          </div>
          <div className="col">
            <label>Location:</label>
            <input
              className="form-control"
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <label>Color:</label>
            <input
              className="form-control"
              type="text"
              name="color"
              value={formData.color}
              onChange={handleChange}
            />
          </div>
          <div className="col">
            <label>No. of Owners:</label>
            <input
              className="form-control"
              type="text"
              name="owners"
              value={formData.owners}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <label>Year of Manufacture:</label>
            <input
              className="form-control"
              type="text"
              name="year"
              value={formData.year}
              onChange={handleChange}
            />
          </div>
          <div className="col">
            <label>Transmission:</label>
            <input
              className="form-control"
              type="text"
              name="transmission"
              value={formData.transmission}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <label>Insurance valid upto:</label>
            <input
              className="form-control"
              type="text"
              name="insurance"
              value={formData.insurance}
              onChange={handleChange}
            />
          </div>
          <div className="col">
            <label>External Fitments:</label>
            <input
              className="form-control"
              type="text"
              name="fitments"
              value={formData.fitments}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <label>Kms:</label>
            <input
              className="form-control"
              type="text"
              name="kms"
              value={formData.kms}
              onChange={handleChange}
            />
          </div>
          <div className="col">
            <label>Photo:</label>
            <input
              className="form-control"
              type="file"
              name="photo"
              onChange={handleChange}
            />
          </div>
        </div>
        <button className="btn btn-primary mt-2" type="submit">
          Submit
        </button>
      </form>
      {showJson && <pre>{JSON.stringify(formData, null, 2)}</pre>}
    </div>
  );
};

export default Form;
