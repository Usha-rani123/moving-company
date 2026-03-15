import { useNavigate } from "react-router-dom";

const AboutUs = () => {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate("/");
  };

  return (
    <>
      <button onClick={handleBack} className="btn btn-outline-secondary">
        <i className="bi bi-arrow-left me-2"></i> Back
      </button>
      <div className="container mt-4">
        <h3>About Us</h3>
        <hr />
        <p className="text-justify">
          Moving Company is a trusted relocation platform that helps people move
          their homes, offices, and vehicles easily without stress. Our goal is
          to make shifting simple, safe, and affordable for everyone. We started
          Moving Company with the idea that relocating to a new place should not
          be complicated or expensive. Many people face difficulties in finding
          reliable packers and movers, which leads to delays, damages, and
          unnecessary costs. Our platform solves this problem by connecting
          customers with verified moving services. We focus on two important
          things to make your move smooth. First, we ensure that our moving
          partners are verified and experienced so your belongings are handled
          safely. Second, we provide clear information about services, pricing,
          and relocation options so you can plan your move with confidence. With
          Moving Company, you can easily arrange home shifting, office
          relocation, or vehicle transport while saving time and effort. If you
          need help planning your move or want to know more about our services,
          feel free to contact us. Our team is always ready to assist you.
        </p>
        <p className="text-center mt-4">
          © 2023 MoveEase. All rights reserved.
        </p>
      </div>
    </>
  );
};

export default AboutUs;
