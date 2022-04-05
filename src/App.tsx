import { useState } from 'react';
import style from './App.module.scss';
import Card from './components/Card/Card.component';
import Form from './components/Form/Form.component';
import { Event } from './models/event';
import EventsList from './components/EventsList/EventsList.component';
import Calendar from './components/Calendar/Calendar.component';

function App() {

  const [events, setEvents] = useState<Event[]>([
    {
      description: "Study React",
      init: new Date("2022-01-15T09:00"),
      end: new Date("2022-01-15T13:00"),
      isCompleted: false,
      id: 1642342747
    },
    {
      description: "Study Recoil",
      init: new Date("2022-01-16T09:00"),
      end: new Date("2022-01-16T11:00"),
      isCompleted: false,
      id: 1642342959
    }
  ]);

  const [filter, setFilter] = useState<Date | null>()

  const addEvent = (event: Event) => {
    event.id = Math.round((new Date()).getTime() / 1000);

    events.push(event);
    console.log(events);

    setEvents([...events]);
  }

  const changeEventStatus = (id: number) => {
    const event = events.find(e => e.id === id);

    if (event)
      event.isCompleted = !event.isCompleted;

    setEvents([...events]);
  }

  const deleteEvent = (id: number) => {
    setEvents([...events.filter(e => e.id !== id)]);
  }

  const applyFilter = (date: Date | null) => {
    setFilter(date);
  }

  const filtered = !filter
    ? events
    : events.filter(e =>
      filter!.toISOString().slice(0, 10) === e.init.toISOString().slice(0, 10)
    );

  return (
    <div className={style.app}>
      <div className={style.col}>

        <Card>
          <Form onSave={addEvent} />
        </Card>

        <hr />

        <Card>
          <EventsList
            events={filtered}
            onApplyFilter={applyFilter}
            onChangeStatus={changeEventStatus}
            onDeleteEvent={deleteEvent}
          />
        </Card>

      </div>

      <div className={style.col}>
        <Calendar events={events} />
      </div>

    </div>
  );
}

export default App;
