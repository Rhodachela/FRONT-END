import { useQuery } from '@tanstack/react-query';
import { getTasks } from '../api/tasks'; // Ensure this path is correct

export function useFetchTasks() {
  return useQuery({
    queryKey: ['tasks'],
    queryFn: async () => {
      return await getTasks();
    },
    staleTime: 1000 * 60, // optional: cache tasks for 1 minute
    retry: 1,              // optional: retry once on failure
  });
}
