import React, { useState } from "react";

export default function AiImageGenerator() {
  const [prompt, setPrompt] = useState("");
  const [imageUrls, setImageUrls] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const generateImages = async () => {
    setLoading(true);
    setError("");
    setImageUrls([]);

    const baseUrl = "https://image.pollinations.ai/prompt";
    const encodedPrompt = encodeURIComponent(prompt);
    const model = "flux";

    try {
      const urls = await Promise.all(
        Array.from({ length: 9 }, async (_, i) => {
          const seed = i + 1;
          const url = `${baseUrl}/${encodedPrompt}?width=512&height=512&seed=${seed}&model=${model}`;

          const response = await fetch(url);
          if (!response.ok) {
            throw new Error(`Image ${seed} failed to load`);
          }

          const blob = await response.blob();
          return URL.createObjectURL(blob);
        })
      );

      setImageUrls(urls);
    } catch (err) {
      console.error(err);
      setError("Something went wrong while generating images.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>AI Image Generator (9 Images)</h2>

      <input
        type="text"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Enter your prompt"
        style={{ width: "300px", marginRight: "10px" }}
      />
      <button onClick={generateImages} disabled={loading}>
        {loading ? "Generating..." : "Generate Images"}
      </button>

      {error && <p style={{ color: "red" }}>{error}</p>}

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
            alt={`Generated ${index + 1}`}
            style={{ width: "100%" }}
          />
        ))}
      </div>
    </div>
  );
}
