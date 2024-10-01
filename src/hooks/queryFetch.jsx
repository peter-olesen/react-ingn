import { useQuery } from "@tanstack/react-query";
import request from "graphql-request";
import { categories } from "../queries/categories";

export const useFetchCategories = () => {
  return useQuery({
    queryKey: ['newsCategories'],
    queryFn: async () => request(import.meta.env.VITE_ENDPOINT, categories)
  });
};
