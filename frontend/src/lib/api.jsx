import axios from "axios";

const useAxios = axios.create({
  baseURL: "https://e-products-gamma.vercel.app",
});

const useAxiosSecure = () => {
  return useAxios;
};

export default useAxiosSecure;
