import { useState } from 'react';
import Card from '../UI/Card';
import classes from './AddUser.module.css';

const AddUser = (props) => {
  const [enteredUsername, setEnteredUsername] = useState('');
  const [enteredAge, setEnteredAge] = useState(0);

  const addUserHandler = (event) => {
    event.preventDefault();
  }

  const onUsernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
  }

  const onAgeChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  }

  return (
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor='username'>Username</label>
        <input
          id='username'
          type='text'
          onChange={onUsernameChangeHandler}
        />
        <label htmlFor='age'>Age (Years)</label>
        <input
          id='age'
          type='number'
          onChange={onAgeChangeHandler}
        />
        <button type='submit'>Add User</button>
      </form>
    </Card>
  );
}

export default AddUser;