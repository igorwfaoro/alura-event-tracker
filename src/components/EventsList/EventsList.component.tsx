import { Event } from '../../models/event';
import EventComponent from '../Evento/Event.component';
import Filter from '../Filter/Filter.component';
import style from './EventsList.module.scss';

interface EventsListProps {
  events: Event[];
  onChangeStatus: (id: number) => void;
  onDeleteEvent: (id: number) => void;
  onApplyFilter: (date: Date | null) => void;
}

const EventsList: React.FC<EventsListProps> = props => {

  return (
    <section>
      <Filter onApplyFilter={props.onApplyFilter} />

      <div className={style.scroll}>
        {props.events.map(e => (
          <EventComponent
            key={e.id}
            event={e}
            onChangeStatus={props.onChangeStatus}
            onDeleteEvent={props.onDeleteEvent}
          />
        ))}
      </div>

    </section>
  );
}

export default EventsList;