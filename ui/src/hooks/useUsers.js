import { useQuery } from 'react-query';
import { getUsers } from '../services/api';

const useUsers = () => {
  return useQuery('users', getUsers);
};

export default useUsers;
