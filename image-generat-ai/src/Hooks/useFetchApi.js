import { useEffect, useState } from "react";

const useFetchApi = () => {
  const [getImage, setGetImage] = useState([]);
  const [isModel, setIsModel] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchData = async (prompt, width, height, model) => {
    setLoading(true);
    try {
      const urls = await Promise.all(
        Array.from({ length: 9 }, async () => {
          const seed = Math.round(Math.random() * 900);
          const apiCall = `https://image.pollinations.ai/prompt/${prompt}?width=${width}&height=${height}&seed=${seed}&model=${model}`;
          const response = await fetch(apiCall);
          if (!response.ok) {
            throw new Error(`Image ${seed} failed to load`);
          }
          return response.url;
        })
      );
      setGetImage(urls);
    } catch (error) {
      setError(error);
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const fetchModel = async () => {
      const url = "https://image.pollinations.ai/models";
      const response = await fetch(url);
      const data = await response.json();
      setIsModel(data);
    };
    fetchModel();
  }, []);
  return {
    getImage,
    loading,
    error,
    fetchData,
    isModel,
  };
};
export default useFetchApi;
