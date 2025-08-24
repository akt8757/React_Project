import { useEffect } from "react";
import { api } from "../api";
import axios from "axios";
import useAuth from "../hooks/useAuth";
import { useDispatch } from "react-redux";
// import { setAccessToken } from "../features/authSlice";
import { setNewToken } from "../features/authSlice";

const useAxios = () => {
  const dispatch = useDispatch();
  const { tokens } = useAuth();
  //   console.log(tokens.refreshToken);

  useEffect(() => {
    const requestInterceptor = api.interceptors.request.use(
      (config) => {
        const authToken = tokens?.token;
        if (authToken) {
          config.headers.Authorization = `Bearer ${authToken}`;
        }
        return config;
      },
      (error) => Promise.reject(error)
    );

    const responseInterceptor = api.interceptors.response.use(
      (response) => response,
      async (error) => {
        const originalRequest = error.config;

        if (error.response?.status === 401 && !originalRequest._retry) {
          originalRequest._retry = true;

          try {
            const refreshToken = tokens?.refreshToken;
            const apiUrl = import.meta.env.VITE_API_URL;
            const response = await axios.post(`${apiUrl}/auth/refresh-token`, {
              refreshToken,
            });

            const { token } = response.data;
            console.log("lisiting from hooks 1 minuts", token);
            dispatch(setNewToken(token));
            originalRequest.headers.Authorization = `Bearer ${token}`;
            return api(originalRequest);
          } catch (err) {
            // dispatch(logout());
            return Promise.reject(err);
          }
        }
        return Promise.reject(error);
      }
    );

    return () => {
      api.interceptors.request.eject(requestInterceptor);
      api.interceptors.response.eject(responseInterceptor);
    };
  }, [tokens?.token, tokens?.refreshToken, dispatch]);

  return api;
};

export default useAxios;
