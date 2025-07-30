import React, { useState } from "react";

export default function ImageUploader() {
  const [imageUrl, setImageUrl] = useState("");
  const [uploading, setUploading] = useState(false);

  const handleUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setUploading(true);

    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "your_unsigned_preset"); // replace this
    formData.append("cloud_name", "your_cloud_name"); // replace this

    try {
      const res = await fetch(
        "https://api.cloudinary.com/v1_1/your_cloud_name/image/upload",
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await res.json();
      setImageUrl(data.secure_url);
      console.log("Uploaded Image URL:", data.secure_url);
    } catch (err) {
      console.error("Upload failed:", err);
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="p-4 bg-gray-100 rounded shadow">
      <input
        type="file"
        accept="image/*"
        onChange={handleUpload}
        className="mb-4"
      />

      {uploading && <p>Uploading...</p>}

      {imageUrl && (
        <div className="mt-4">
          <img src={imageUrl} alt="Uploaded" className="w-64 rounded" />
          <p className="text-sm text-gray-600 mt-2">{imageUrl}</p>
        </div>
      )}
    </div>
  );
}
