import React, { useState, useEffect } from "react";
import profile from "../assets/profile.jpg";
import { useNavigate } from "react-router-dom";
import Searchbar from "./Searchbar";

const Profile = ({ name, email }) => {
  const [image, setImage] = useState(
    localStorage.getItem("profileImage") || profile
  );

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
        localStorage.setItem("profileImage", reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  useEffect(() => {
    // Load profile image from localStorage when the component mounts
    const savedImage = localStorage.getItem("profileImage");
    if (savedImage) {
      setImage(savedImage);
    }
  }, []);

  const navigate = useNavigate();

  const handleSearch = () => {
    // Redirect to /search when the button is clicked
    navigate("/search");
  };

  return (
    <>
      <div className="d-flex px-3 py-3 justify-content-start">
        <label
          htmlFor="profileImage"
          className="rounded d-block rounded-circle"
        >
          <img
            className="rounded rounded-circle"
            src={image}
            alt="Profile"
            style={{
              width: "5rem",
              height: "5rem",
            }}
          />
        </label>
        <input
          id="profileImage"
          type="file"
          accept="image/*"
          style={{ display: "none" }}
          onChange={handleImageChange}
        />
        <div className="user d-flex flex-column px-2">
          <h1>{name}</h1>
          <p>{email}</p>
        </div>
      </div>
    </>
  );
};

export default Profile;
