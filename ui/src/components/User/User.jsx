import { useContext, useState } from 'react';
import { TaskContext } from '../../context/tasks.context';
import useDeleteUser from '../../hooks/useDeleteUser';
import useUpdateUser from '../../hooks/useUpdateUser';
import styles from './User.module.scss';

const User = ({ user }) => {
  const { selectedUserId, setSelectedUserId } = useContext(TaskContext);
  const [deleteUser] = useDeleteUser();
  const [updateUser] = useUpdateUser();
  const [updateName, setUpdateName] = useState(false);
  const [value, setValue] = useState(user.name);

  const onClick = () => {
    setSelectedUserId(user._id);
  };

  const handleDelete = () => {
    deleteUser(user._id);
  };

  const handleUpdate = () => {
    setUpdateName((value) => !value);
  };

  const onChange = (e) => {
    setValue(e.target.value);
  };

  const onEnter = (e) => {
    if (e.key === 'Enter') {
      const user_id = user._id;
      const name = value;
      updateUser({ user_id, name });
      setUpdateName(false);
    }
  };

  const userStyle = [
    styles.user,
    `${user._id === selectedUserId ? styles.selected : ''}`,
  ].join(' ');

  return (
    <div className={userStyle} onClick={onClick}>
      {updateName ? (
        <input
          type="text"
          name="name"
          value={value}
          onChange={onChange}
          onKeyDown={onEnter}
        />
      ) : (
        user.name
      )}
      <div className={styles.icons}>
        <i className="fas fa-pen" onClick={handleUpdate} />
        <i className="fas fa-trash-alt" onClick={handleDelete} />
      </div>
    </div>
  );
};

export default User;
