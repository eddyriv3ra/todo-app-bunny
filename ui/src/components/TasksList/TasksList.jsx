import { useContext } from 'react';
import styles from './TasksList.module.scss';
import useTasks from '../../hooks/useTasks';
import { TaskContext } from '../../context/tasks.context';
import Task from '../Task';

const TasksList = () => {
  const { selectedUserId } = useContext(TaskContext);
  const { data } = useTasks(selectedUserId);

  return (
    <div className={styles.container}>
      {data?.data?.map((task) => {
        return <Task key={task._id} task={task} />;
      })}
    </div>
  );
};

export default TasksList;
