import { useQuery } from "@tanstack/react-query";
import { api } from "@/lib/api";

export const useActivities = () => {
  return useQuery({
    queryKey: ["activities"],
    queryFn: async () => {
      const res = await api.get("/activities");
      return res.data;
    },
  });
};
