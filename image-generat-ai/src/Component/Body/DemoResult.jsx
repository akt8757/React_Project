import React from "react";
import image1 from "../../assets/Images/ai-image-1.jpeg";
import image2 from "../../assets/Images/ai-image-2.jpeg";
import image3 from "../../assets/Images/ai-image-3.jpeg";
import image4 from "../../assets/Images/ai-image-4.jpeg";
import image5 from "../../assets/Images/ai-image-5.jpeg";
import image6 from "../../assets/Images/ai-image-6.jpeg";
import asraful from "../../assets/Images/asraful.jpg";
import { Image } from "antd";
export default function DemoResult() {
  const imagess = [asraful, image1, image2, image3, image4, image5, image6];
  console.log("data", imagess);
  return (
    <div>
      <h3 className=" mb-5 font-bold text-2xl text-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
        Here's a preview of how your creation might look.
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
        <Image.PreviewGroup>
          {imagess.map((item) => (
            <div
              key={item}
              className="image-card rounded-xl overflow-hidden cursor-pointer relative w-full h-70"
            >
              <Image
                src={item}
                alt="Anime character in kimono"
                className=" object-cover"
              />
            </div>
          ))}
        </Image.PreviewGroup>
      </div>
    </div>
  );
}
