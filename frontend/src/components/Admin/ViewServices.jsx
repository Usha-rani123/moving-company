import { useEffect, useState } from "react";
import { listServices } from "../../services/apiServices";

const ViewServices = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    loadServices();
  }, []);

  const loadServices = async () => {
    const data = await listServices();
    setServices(data);
  };

  return (
    <div>
      <h3>Services</h3>

      <table className="table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
          </tr>
        </thead>

        <tbody>
          {services.map((service) => (
            <tr key={service._id}>
              <td>{service.title}</td>
              <td>{service.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ViewServices;
