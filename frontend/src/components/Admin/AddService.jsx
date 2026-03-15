import { useState } from "react";
import { createService } from "../../services/apiServices";

const AddService = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    imageUrl: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const result = await createService(formData);

    alert("Service Added Successfully");

    setFormData({
      title: "",
      description: "",
      imageUrl: "",
    });
  };

  return (
    <div className="card p-4" style={{ maxWidth: "500px" }}>
      <h4>Add Service</h4>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          className="form-control mb-3"
          placeholder="Title"
          value={formData.title}
          onChange={handleChange}
        />

        <textarea
          name="description"
          className="form-control mb-3"
          placeholder="Description"
          value={formData.description}
          onChange={handleChange}
        />

        <input
          type="text"
          name="imageUrl"
          className="form-control mb-3"
          placeholder="Image URL"
          value={formData.imageUrl}
          onChange={handleChange}
        />

        <button className="btn btn-primary">Add Service</button>
      </form>
    </div>
  );
};

export default AddService;
