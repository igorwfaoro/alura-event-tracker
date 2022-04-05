
import { Event } from '../../models/event';
import style from './Calendar.module.scss';
import enUs from './location/en-US.json';
import Kalend, { CalendarView } from 'kalend';
import 'kalend/dist/styles/index.css';

interface KalendEvent {
  id?: number;
  startAt: string;
  endAt: string;
  summary: string;
  color: string;
}

interface CalendarProps {
  events: Event[];
}

const Calendar: React.FC<CalendarProps> = props => {

  const eventsKalend = new Map<string, KalendEvent[]>();

  props.events.forEach(e => {

    const key = e.init.toISOString().slice(0, 10);

    if (!eventsKalend.has(key)) {
      eventsKalend.set(key, []);
    }

    eventsKalend.get(key)?.push({
      id: e.id,
      startAt: e.init.toISOString(),
      endAt: e.end.toISOString(),
      summary: e.description,
      color: 'blue'
    });

  });

  return (
    <div className={style.container}>
      <Kalend
        events={Object.fromEntries(eventsKalend)}
        initialDate={new Date().toISOString()}
        hourHeight={60}
        initialView={CalendarView.WEEK}
        timeFormat={'24'}
        weekDayStart={'Monday'}
        calendarIDsHidden={['work']}
        language={'customLanguage'}
        customLanguage={enUs}
      />
    </div>
  );
}

export default Calendar;