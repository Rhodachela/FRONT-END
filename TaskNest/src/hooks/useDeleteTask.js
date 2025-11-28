// src/hooks/useDeleteTask.js
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { doc, deleteDoc } from 'firebase/firestore';
import { db } from '../firebase/config';

export function useDeleteTask() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (id) => {
      await deleteDoc(doc(db, 'tasks', id));
      return id;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['tasks'], exact: true });
    },
  });
}
