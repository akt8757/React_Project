import React from "react";
import { message } from "antd";
const useToster = () => {
  const [messageApi, contextHolder] = message.useMessage();
  const successToster = (text) => {
    messageApi.open({
      type: "success",
      content: text,
    });
  };
  const errorToster = (text) => {
    messageApi.open({
      type: "error",
      content: text,
    });
  };
  const warningToster = (text) => {
    messageApi.open({
      type: "warning",
      content: text,
    });
  };
  return { contextHolder, successToster, errorToster, warningToster };
};
export default useToster;
