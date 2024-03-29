import React from "react";

function ImageComponent({ src, alt }) {
  return <img src={src} alt={alt} loading="lazy" />;
}

export default ImageComponent;
