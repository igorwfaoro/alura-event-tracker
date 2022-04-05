import { Event as EventModel } from '../../models/event'
import style from './Event.module.scss';
import EventCheckbox from './EventCheckbox/EventCheckbox.component';

interface EventProps {
  event: EventModel;
  onChangeStatus: (id: number) => void;
  onDeleteEvent: (id: number) => void;
}

const Event: React.FC<EventProps> = props => {

  const styles = [
    style.event
  ];

  if (props.event.isCompleted)
    styles.push(style.completed);

  return (
    <div className={styles.join(' ')}>

      <EventCheckbox event={props.event} onChangeStatus={props.onChangeStatus} />

      <div className="cards-info">
        <h3 className={style.description}>{props.event.description} - {props.event.init.toLocaleDateString()}</h3>
      </div>

      <i className="far fa-times-circle fa-2x" onClick={() => props.onDeleteEvent(props.event.id!)}></i>
    </div>
  );
}

export default Event;