import { useContext } from 'react';
import { useMutation, queryCache } from 'react-query';
import { TaskContext } from '../context/tasks.context';
import { setNewTask } from '../services/api';

const useCreateTask = () => {
  const { selectedUserId } = useContext(TaskContext);
  return useMutation((description) => setNewTask(selectedUserId, description), {
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

export default useCreateTask;
