import { useEffect, useState } from "react";
import errorImage from "../../src/assets/Images/errorImage.webp";

const useFetchApi = () => {
  const [getImage, setGetImage] = useState([]);
  const [isModel, setIsModel] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchData = async (prompt, width, height, model, image) => {
    setGetImage([]);

    for (let i = 0; i < image; i++) {
      setLoading(true);
      const seed = Math.floor(100000 + Math.random() * 900000);
      const apiCall = `https://image.pollinations.ai/prompt/${prompt}?width=${width}&height=${height}&seed=${seed}&model=${model}&nologo=true`;
      try {
        const response = await fetch(apiCall);
        if (!response.ok) {
          throw new Error(`Image ${seed} failed to load`);
        }
        const url = response.url;
        setGetImage((prev) => [...prev, url]);
      } catch (error) {
        setError(error);
        setGetImage((prev) => [...prev, errorImage]);
      } finally {
        setLoading(false);
      }
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
