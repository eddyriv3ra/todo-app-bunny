import { useMutation, queryCache } from 'react-query';
import { updateTask } from '../services/api';

const useUpdateTask = () => {
  return useMutation(({ task_id, newState }) => updateTask(task_id, newState), {
    onSuccess: () => {
      queryCache.cancelQueries('tasks');
      const previousTodos = queryCache.getQueryData('tasks');
      return () => queryCache.setQueryData('tasks', previousTodos);
    },
    onSettled: () => {
      queryCache.invalidateQueries('tasks');
    },
  });
};

export default useUpdateTask;
