import { useMutation, useQueryClient } from '@tanstack/react-query';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebase/config';

export function useAddTask() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (task) => {
      const taskWithTimestamp = {
        ...task,
        createdAt: Date.now(), // add createdAt so Firestore ordering works
      };
      const docRef = await addDoc(collection(db, 'tasks'), taskWithTimestamp);
      return { id: docRef.id, ...taskWithTimestamp };
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['tasks'], exact: true });
    },
  });
}
