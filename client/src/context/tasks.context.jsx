import { useState, createContext } from 'react';

export const TaskContext = createContext();

const TaskProvider = ({ children }) => {
  const [selectedUserId, setSelectedUserId] = useState('');

  return (
    <TaskContext.Provider value={{ selectedUserId, setSelectedUserId }}>
      {children}
    </TaskContext.Provider>
  );
};

export default TaskProvider;
