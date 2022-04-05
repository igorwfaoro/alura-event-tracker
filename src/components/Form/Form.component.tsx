import { useState } from 'react';
import { Event } from '../../models/event';
import style from './Form.module.scss';

interface FormProps {
  onSave: (event: Event) => void;
}

const Form: React.FC<FormProps> = props => {

  const [description, setDescription] = useState('');
  const [initDate, setInitDate] = useState('');
  const [initTime, setInitTime] = useState('');
  const [endDate, setEndDate] = useState('');
  const [endTime, setEndTime] = useState('');

  const mountDate = (date: string, hour: string) => {
    const dateString = date.slice(0, 10);
    return new Date(`${dateString}T${hour}`);
  }

  const submitForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    props.onSave({
      description: description,
      init: mountDate(initDate, initTime),
      end: mountDate(endDate, endTime),
      isCompleted: false
    });

    setDescription('');
    setInitDate('');
    setInitTime('');
    setEndDate('');
    setEndTime('');
  }

  return (
    <form className={style.form} onSubmit={submitForm}>
      <h3 className={style.title}>New event</h3>

      <label>Description</label>
      <input
        type="text"
        name="description"
        id="description"
        className={style.input}
        onChange={event => setDescription(event.target.value)}
        placeholder="Description" value={description}
        autoComplete="off"
        required
      />

      <label>Init date</label>
      <div className={style.inputContainer}>
        <input
          type="date"
          name="initDate"
          className={style.input}
          onChange={event => setInitDate(event.target.value)}
          value={initDate}
          required
        />

        <input
          type="time"
          name="initTime"
          className={style.input}
          onChange={event => setInitTime(event.target.value)}
          value={initTime}
          required
        />
      </div>

      <label>End date</label>
      <div className={style.inputContainer}>
        <input
          type="date"
          name="endDate"
          className={style.input}
          onChange={event => setEndDate(event.target.value)}
          value={endDate}
          required />
        <input
          type="time"
          name="endTime"
          className={style.input}
          onChange={event => setEndTime(event.target.value)}
          value={endTime}
          required />
      </div>

      <button className={style.button}>
        Save
      </button>

    </form>
  );
}

export default Form;