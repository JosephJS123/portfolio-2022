import { useEffect, useState } from "react";

const useImage = (fileName) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [image, setImage] = useState("");

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const response = await import("../../img/" + fileName + ".jpg");
        setImage(response.default);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchImage();
  }, [fileName]);

  return {
    loading,
    error,
    image,
  };
};

export default useImage;
