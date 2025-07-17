import React, { useState } from "react";

export default function MultiImageGenerator() {
  const [prompt, setPrompt] = useState("");
  const [imageUrls, setImageUrls] = useState([]);

  const generateImages = () => {
    const baseUrl = "https://image.pollinations.ai/prompt";
    const encodedPrompt = encodeURIComponent(prompt);
    const model = "flux"; // optional

    const urls = Array.from({ length: 9 }, (_, i) => {
      const seed = i + 1;
      return `${baseUrl}/${encodedPrompt}?width=512&height=512&seed=${seed}&model=${model}`;
    });

    setImageUrls(urls);
    console.log("this is kabir", urls);
  };

  return (
    <div>
      <h2>Generate 9 AI Images</h2>
      <input
        type="text"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Enter prompt"
      />
      <button onClick={generateImages}>Generate</button>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "10px",
          marginTop: "20px",
        }}
      >
        {imageUrls.map((url, index) => (
          <img
            key={index}
            src={url}
            alt={`Generated ${index}`}
            style={{ width: "100%" }}
          />
        ))}
      </div>
    </div>
  );
}
