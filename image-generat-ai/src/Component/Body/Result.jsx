import React, { useContext, useEffect } from "react";
import { apiImageProvider } from "../../assets/Provider";
import { LoadingOutlined } from "@ant-design/icons";
import { Flex, Spin } from "antd";
import useDownload from "../../Hooks/useDownload";
import { downloadImageContext } from "../../assets/Provider";
import { FaCloudDownloadAlt } from "react-icons/fa";
import { Image } from "antd";
import DemoResult from "./DemoResult";

export default function Result() {
  const { apiData } = useContext(apiImageProvider);
  const { getImage, error, loading } = apiData;
  const { downLoadedImage } = useContext(downloadImageContext);
  const { handleDownloadImage, isDownloadImage } = downLoadedImage;

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
      {getImage.length > 0 ? (
        <div>
          <h3 className="text-zinc-200 mb-4 font-bold text-lg">Result</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
            <Image.PreviewGroup>
              {getImage.map((item) => (
                <div
                  key={item}
                  className="image-card rounded-xl overflow-hidden cursor-pointer relative"
                >
                  <div
                    title="Downloade"
                    onClick={() => handleDownloadImage(item)}
                    className="absolute z-100 bottom-2 right-2  p-1 text-3xl"
                  >
                    <FaCloudDownloadAlt />
                  </div>

                  <Image
                    src={item}
                    alt="Anime character in kimono"
                    className="w-auto h-auto"
                  />
                </div>
              ))}
            </Image.PreviewGroup>
          </div>
        </div>
      ) : (
        <DemoResult />
      )}
    </div>
  );
}
