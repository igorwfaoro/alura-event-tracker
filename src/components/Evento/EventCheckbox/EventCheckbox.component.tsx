import { Event } from '../../../models/event';

interface EventCheckboxProps {
  event: Event;
  onChangeStatus: (id: number) => void;
}

const EventCheckbox: React.FC<EventCheckboxProps> = props => {

  const styles = [
    'far',
    'fa-2x',
    props.event.isCompleted ? 'fa-check-square' : 'fa-square'
  ];

  return (
    <i
      className={styles.join(' ')}
      onClick={() => props.onChangeStatus(props.event.id!)}
    ></i>
  );
}

export default EventCheckbox;