import { useDrag } from 'react-dnd';
import { IconButton } from '@mui/material';
import { ListItem, Paper } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

export default function TodoListItem({ todo, onDeleteTodo }) {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'todo',
    item: { id: todo.id, period: todo.period },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <ListItem
      ref={drag}
      secondaryAction={
        <IconButton
          edge='end'
          aria-label='delete todo'
          onClick={onDeleteTodo}
        >
          <DeleteIcon />
        </IconButton>
      }
    >
      <Paper
        className='todo-list__paper'
        style={{ opacity: isDragging ? 0.4 : 1 }}
      >
        {todo.text}
      </Paper>
    </ListItem>
  );
}
