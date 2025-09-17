// src/hooks/useApi.js
import { useDispatch, useSelector } from "react-redux";
import {
  setLoading,
  setError,
  clearError,
} from "../features/globallLoadingSlice";

const useApi = () => {
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.global);

  const apiCaller = async (apiCall) => {
    try {
      dispatch(setLoading(true));
      dispatch(clearError());

      const response = await apiCall();
      return response;
    } catch (err) {
      dispatch(setError(err.response?.data?.message || "Something went wrong"));
      throw err;
    } finally {
      dispatch(setLoading(false));
    }
  };

  return { apiCaller, loading, error };
};

export default useApi;
