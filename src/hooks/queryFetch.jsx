import { useQuery } from "@tanstack/react-query";
import request from "graphql-request";
import { categories } from "../queries/allCategories";

export const useFetchCategories = () => {
  return useQuery({
    queryKey: ['categories'],
    queryFn: async () => request(import.meta.env.VITE_ENDPOINT, categories)
  });
};
