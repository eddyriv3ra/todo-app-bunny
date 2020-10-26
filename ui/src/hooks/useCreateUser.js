import { useMutation, queryCache } from 'react-query';
import { setNewUser } from '../services/api';

const useCreateUser = () => {
  return useMutation((name) => setNewUser(name), {
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

export default useCreateUser;
