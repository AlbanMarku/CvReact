import React, { useEffect, useState } from 'react';
import './sideDetail.css';
import PropTypes from 'prop-types';

function SideDetail({
  contactInfo, contactSetter, setPreview,
}) {
  const [image, setImage] = useState(null);
  useEffect(() => {
    if (image) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(image);
    } else {
      setPreview(null);
    }
  }, [image, setPreview]);
  return (
    <div className="SideDetail">
      <h3>Email address</h3>
      <input value={contactInfo.email} id="email" placeholder="Email address" required onChange={(e) => contactSetter({ ...contactInfo, email: e.target.value })} />
      <h3>Phone number</h3>
      <input value={contactInfo.phone} id="phone" placeholder="Phone number" required onChange={(e) => contactSetter({ ...contactInfo, phone: e.target.value })} />
      <input
        type="file"
        id="imageInput"
        accept="image/jpg, image/png, image/jpeg"
        onChange={(e) => {
          const selectedFile = e.target.files[0];
          if (selectedFile) {
            setImage(selectedFile);
          } else {
            setImage(null);
          }
        }}
      />
    </div>
  );
}

export default SideDetail;

SideDetail.propTypes = {
  contactInfo: PropTypes.objectOf(PropTypes.string).isRequired,
  contactSetter: PropTypes.func.isRequired,
  setPreview: PropTypes.func.isRequired,
};
