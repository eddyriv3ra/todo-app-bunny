import { useMutation, queryCache } from 'react-query';
import { deleteUser } from '../services/api';

const useDeleteUser = () => {
  return useMutation((user_id) => deleteUser(user_id), {
    onSuccess: () => {
      queryCache.cancelQueries('users');
      const previousTodos = queryCache.getQueryData('users');
      return () => queryCache.setQueryData('users', previousTodos);
    },
    onError: (err, newName, rollback) => rollback(),
    onSettled: () => {
      queryCache.invalidateQueries('users');
    },
  });
};

export default useDeleteUser;
