import { DefaultContext } from "react-icons";
import { useSelector } from "react-redux";
import { setLoading, setError } from "../features/globallLoadingSlice";
import { useDispatch } from "react-redux";

const useGlobale = () => {
  const dispatch = useDispatch();
  const selector = useSelector((state) => state.global);
  const globalLoading = selector.loading;
  const globalErrorerror = selector.error;

  const setLoadingState = (e) => dispatch(setLoading(e));
  const setErrorState = (e) => dispatch(setError(e));
  return { globalLoading, globalErrorerror, setLoadingState, setErrorState };
};

export default useGlobale;
