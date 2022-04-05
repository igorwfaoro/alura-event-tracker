import { useState } from 'react';
import style from './Filter.module.scss';

interface FilterProps {
  onApplyFilter: (date: Date | null) => void;
}

const Filter: React.FC<FilterProps> = props => {

  const [date, setDate] = useState('');

  const submitForm = (evento: React.FormEvent<HTMLFormElement>) => {
    evento.preventDefault()

    if (!date) {
      props.onApplyFilter(null);
      return;
    }

    props.onApplyFilter(new Date(date));
  }

  return (
    <form className={style.filter} onSubmit={submitForm}>

      <h3 className={style.title}>Filter by date</h3>

      <input
        type="date"
        name="date"
        className={style.input}
        onChange={event => setDate(event.target.value)}
        placeholder="By date"
        value={date}
      />

      <button className={style.button}>
        Filter
      </button>

    </form>
  )
}

export default Filter;