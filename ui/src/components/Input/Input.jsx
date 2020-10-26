import { useState } from 'react';
import styles from './Input.module.scss';

const Input = ({ handleClick, label = 'Add User' }) => {
  const [input, setInput] = useState('');

  const onSubmit = async (e) => {
    e.preventDefault();
    handleClick(input);
    setInput('');
  };

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <form onSubmit={onSubmit} className={styles.input}>
      <label>
        {label}:
        <input type="text" name="name" value={input} onChange={handleChange} />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
};

export default Input;
