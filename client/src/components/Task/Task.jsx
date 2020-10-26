import styles from './Task.module.scss';
import useUpdateTask from '../../hooks/useUpdateTask';

const Task = ({ task }) => {
  const [updateTask] = useUpdateTask();
  const onClick = () => {
    const newState = task.state === 'todo' ? 'done' : 'todo';
    const task_id = task._id;
    updateTask({ task_id, newState });
  };

  const taskSTyñe = [
    styles.task,
    `${task.state === 'done' ? styles.done : ''}`,
  ].join(' ');

  return (
    <div className={taskSTyñe} onClick={onClick}>
      {task.description}
    </div>
  );
};

export default Task;
