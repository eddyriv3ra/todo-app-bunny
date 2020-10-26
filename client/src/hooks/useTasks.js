import { useQuery } from 'react-query';
import { getTasks } from '../services/api';

const useTasks = (user_id) => {
  return useQuery(['tasks', user_id], getTasks);
};

export default useTasks;
