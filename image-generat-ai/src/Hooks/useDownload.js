import { useState } from "react";

const useDownload = () => {
  const [isDownloadImage, setIsDownload] = useState([]);
  const [downloading, setDownloading] = useState(false);

  const handleDownloadImage = async (imageUrl) => {
    try {
      setDownloading(true);
      const response = await fetch(imageUrl);
      const getBlob = await response.blob();

      // this code only fore naming on image
      const getSeed = new URL(imageUrl);
      const seed = getSeed.searchParams.get("seed");

      // image  downloading logic
      const blobUrl = URL.createObjectURL(getBlob);
      const a = document.createElement("a");
      a.href = blobUrl;
      a.download = `image-${seed}.jpg`;
      a.click();
      URL.revokeObjectURL(blobUrl);

      // get image url data
      const found = isDownloadImage.find((item) => item.url === imageUrl);
      const url = new URL(imageUrl);

      if (!found) {
        const getParms = {
          width: url.searchParams.get("width"),
          height: url.searchParams.get("height"),
          seed: url.searchParams.get("seed"),
          model: url.searchParams.get("model"),
          url: imageUrl,
        };
        setIsDownload((prev) => [...prev, getParms]);
      }
    } catch (eror) {
      console.log("error", eror);
    } finally {
      setDownloading(false);
    }
  };
  return {
    downloading,
    handleDownloadImage,
    isDownloadImage,
  };
};
export default useDownload;
