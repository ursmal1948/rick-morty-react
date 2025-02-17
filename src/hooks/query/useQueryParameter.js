import { useLocation } from "react-router-dom";

export const useQueryParameter = (key) => {
  const location = useLocation();
  return new URLSearchParams(location.search).get(key);
};
