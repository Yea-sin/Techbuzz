import React from "react";

const Map = () => {
  return (
    <div className="mt-5">
      <iframe
        title="map"
        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14707.334881943974!2d89.54032675!3d22.8456406!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1641621389385!5m2!1sen!2sbd"
        width="100%"
        height="550"
        style={{ border: "0" }}
        allowFullScreen=""
        loading="lazy"></iframe>
    </div>
  );
};

export default Map;
