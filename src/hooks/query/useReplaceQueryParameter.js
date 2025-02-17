import { useLocation, useNavigate } from "react-router";

export const useReplaceQueryParameter = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const replaceQueryParameter = ({ key, value }) => {
    const searchParams = new URLSearchParams(location.search);

    if (value === undefined) {
      searchParams.delete(key);
    } else {
      searchParams.set(key, value);
    }
    const newSearch = searchParams.toString();
    return navigate(`${location.pathname}?${newSearch}`);
  };
  return replaceQueryParameter;
};
