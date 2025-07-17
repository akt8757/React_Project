import { useEffect, useState } from "react";

const useFetchApi = () => {
  const [getImage, setGetImage] = useState([]);
  const [isModel, setIsModel] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchData = async (prompt, width, height, model) => {
    const urls = [];
    for (let i = 0; i < 9; i++) {
      setLoading(true);
      const seed = Math.floor(100000 + Math.random() * 900000);
      const apiCall = `https://image.pollinations.ai/prompt/${prompt}?width=${width}&height=${height}&seed=${seed}&model=${model}`;
      try {
        const response = await fetch(apiCall);
        if (!response.ok) {
          throw new Error(`Image ${seed} failed to load`);
        }
        urls.push(response.url);
      } catch (error) {
        console.error("Error loading image:", error);
        // Optional: fallback image push korte paro
      } finally {
        setLoading(false);
      }
    }
    setGetImage(urls);
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

// setLoading(true);
//     try {
//       const urls = await Promise.all(
//         Array.from({ length: 9 }, async () => {
//           const seed = Math.round(Math.random() * 900);
//           const apiCall = `https://image.pollinations.ai/prompt/${prompt}?width=${width}&height=${height}&seed=${seed}&model=${model}`;
//           const response = await fetch(apiCall);
//           if (!response.ok) {
//             throw new Error(`Image ${seed} failed to load`);
//           }
//           return response.url;
//         })
//       );
//       setGetImage(urls.filter(Boolean));
//     } catch (error) {
//       setError(error);
//       console.log(error);
//     } finally {
//       setLoading(false);
//     }
