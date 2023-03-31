import './TodoList.scss';
import { useDrop } from 'react-dnd';
import { List, ListSubheader } from '@mui/material';

export default function TodoList({
  children,
  header,
  period,
  onDrop,
  backgroundColor,
}) {
  const [{ isOver }, drop] = useDrop(() => ({
    accept: 'todo',
    drop: (item) => onDrop(item.id, period),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      dropItem: monitor.getItemType(),
    }),
  }));

  return (
    <List
      ref={drop}
      className='todo__todos-list'
      style={{ backgroundColor: isOver ? '#eee' : '#fff' }}
      sx={{
        minHeight: '100vh',
      }}
      subheader={
        <ListSubheader
          component='div'
          id='todo-list-subheader'
          className='todo-list__subheader'
          sx={{
            fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
            fontSize: '20px',
            textAlign: 'center',
            borderRadius: '6px',
            backgroundColor: backgroundColor,
          }}
        >
          {header}
        </ListSubheader>
      }
    >
      {children}
    </List>
  );
}
