import { useEffect, useState } from "react";
import { getMyProfile, updateUser } from "../../services/apiServices";

const Profile = () => {
  const [user, setUser] = useState(null);
  const [formData, setFormData] = useState({});
  const [editMode, setEditMode] = useState(false);

  useEffect(() => {
    loadProfile();
  }, []);

  const loadProfile = async () => {
    try {
      const data = await getMyProfile();
      setUser(data);
      setFormData(data);
    } catch (error) {
      console.error("Error loading profile:", error);
    }
  };

  if (!user) return <p>Loading...</p>;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSave = async () => {
    try {
      const res = await updateUser(user._id, formData);
      alert(res.message);
      setUser(res.user);
      setEditMode(false);
    } catch (error) {
      console.error("Update failed:", error);
    }
  };

  const handleCancel = () => {
    setFormData(user);
    setEditMode(false);
  };

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">My Profile</h2>

      <div className="row justify-content-center">
        <div className="col-md-5">
          <div className="card p-4 shadow-sm">
            {/* Name */}
            <div className="mb-3">
              <label className="fw-bold">Name</label>
              <input
                type="text"
                className="form-control"
                name="name"
                value={formData.name || ""}
                disabled={!editMode}
                onChange={handleChange}
              />
            </div>

            {/* Email */}
            <div className="mb-3">
              <label className="fw-bold">Email</label>
              <input
                type="email"
                className="form-control"
                name="email"
                value={formData.email || ""}
                disabled
                onChange={handleChange}
              />
            </div>

            {/* Phone */}
            <div className="mb-3">
              <label className="fw-bold">Phone</label>
              <input
                type="text"
                className="form-control"
                name="phone"
                value={formData.phone || ""}
                disabled={!editMode}
                onChange={handleChange}
              />
            </div>

            {/* Buttons */}
            <div className="text-center mt-3">
              {!editMode && (
                <button
                  className="btn btn-primary"
                  onClick={() => setEditMode(true)}
                >
                  Edit Profile
                </button>
              )}

              {editMode && (
                <>
                  <button className="btn btn-success me-2" onClick={handleSave}>
                    Save
                  </button>

                  <button className="btn btn-secondary" onClick={handleCancel}>
                    Cancel
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
