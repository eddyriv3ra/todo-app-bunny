import { useMutation, queryCache } from 'react-query';
import { updateUser } from '../services/api';

const useUpdateTask = () => {
  return useMutation(({ user_id, name }) => updateUser(user_id, name), {
    onSuccess: () => {
      queryCache.cancelQueries('users');
      const previousTodos = queryCache.getQueryData('users');
      return () => queryCache.setQueryData('users', previousTodos);
    },
    onSettled: () => {
      queryCache.invalidateQueries('users');
    },
  });
};

export default useUpdateTask;
