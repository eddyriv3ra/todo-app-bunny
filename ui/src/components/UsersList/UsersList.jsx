import styles from './UsersList.module.scss';
import useUsers from '../../hooks/useUsers';
import User from '../User';

const UsersList = () => {
  const { data } = useUsers();
  return (
    <div className={styles.container}>
      {data?.data?.map((user) => (
        <User key={user._id} user={user} />
      ))}
    </div>
  );
};

export default UsersList;
