import { useSelector } from "react-redux";

const useAuth = () => {
  //   const dispatch = useDispatch();
  const selector = useSelector((state) => state.auth);
  return selector;
};
export default useAuth;
