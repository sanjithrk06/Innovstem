import React, { useState, useEffect } from "react";
import { loadImage } from "../assets/images";

const DynamicImage = ({ imageKey, alt, className }) => {
  const [imageSrc, setImageSrc] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchImage = async () => {
      setLoading(true);
      setError(false);
      const src = await loadImage(imageKey);
      if (src) {
        setImageSrc(src);
      } else {
        setError(true);
      }
      setLoading(false);
    };

    fetchImage();
  }, [imageKey]);

  if (loading) {
    return <div className="animate-pulse bg-gray-300 w-full h-48"></div>;
  }

  if (error || !imageSrc) {
    return <div className="text-red-500">Image not found</div>;
  }

  return <img src={imageSrc} alt={alt} className={className} loading="lazy" />;
};

export default DynamicImage;
