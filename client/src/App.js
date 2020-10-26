import UsersList from './components/UsersList';
import TasksList from './components/TasksList';
import createUser from './hooks/useCreateUser';
import createTask from './hooks/useCreateTask';
import Input from './components/Input';
import styles from './App.module.scss';

const App = () => {
  const [addUser] = createUser();
  const [addTask] = createTask();

  return (
    <div className={styles.app}>
      <div className={styles.container}>
        <div className={styles.title}>Users</div>
        <UsersList />
        <Input handleClick={addUser} label="Add User" />
      </div>
      <div className={styles.container}>
        <div className={styles.title}>Tasks</div>
        <TasksList />
        <Input handleClick={addTask} label="Add New Task" />
      </div>
    </div>
  );
};

export default App;
