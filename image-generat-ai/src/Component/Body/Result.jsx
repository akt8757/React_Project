import React, { useContext } from "react";
import { apiImageProvider } from "../../assets/Provider";
import { LoadingOutlined } from "@ant-design/icons";
import { Flex, Spin } from "antd";

export default function Result() {
  const { apiData } = useContext(apiImageProvider);
  const { getImage, error, loading } = apiData;
  const svg = (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        className="lucide lucide-image-down-icon lucide-image-down"
      >
        <path d="M10.3 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10l-3.1-3.1a2 2 0 0 0-2.814.014L6 21" />
        <path d="m14 19 3 3v-5.5" />
        <path d="m17 22 3-3" />
        <circle cx="9" cy="9" r="2" />
      </svg>
    </>
  );
  return (
    <div>
      <Flex align="center" gap="middle">
        <Spin
          tip="Your image is genareting..."
          fullscreen={true}
          spinning={loading}
          indicator={<LoadingOutlined style={{ fontSize: 100 }} spin />}
        />
      </Flex>
      <div>
        <h3 className="text-zinc-200 mb-4 font-bold text-lg">Result</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
          {getImage.map((item) => (
            <div
              key={item}
              className="image-card rounded-xl overflow-hidden cursor-pointer relative"
            >
              <div className="absolute bottom-2 right-2  p-1 ">{svg}</div>
              <img
                src={item}
                alt="Anime character in kimono"
                className="w-full h-48 object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
