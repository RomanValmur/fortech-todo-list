import {
  TextField,
  Button,
  ToggleButton,
  ToggleButtonGroup,
} from '@mui/material';

export default function AddTodo({
  onAddTodo,
  onTextChange,
  onPeriodChange,
  text,
  period,
}) {
  return (
    <div>
      <TextField
        className='todo__new-todo new-todo__textfield'
        id='newTodo'
        label='Новая задача'
        variant='outlined'
        multiline
        fullWidth
        rows='8'
        value={text}
        onChange={onTextChange}
      />
      <ToggleButtonGroup
        className='new-todo__button-group'
        color='primary'
        value={period}
        exclusive
        fullWidth
        orientation='vertical'
        aria-label='Platform'
      >
        <ToggleButton
          className='new-todo__period-btn'
          onClick={onPeriodChange}
          value='today'
        >
          Сегодня
        </ToggleButton>
        <ToggleButton
          className='new-todo__period-btn'
          onClick={onPeriodChange}
          value='week'
        >
          На этой неделе
        </ToggleButton>
        <ToggleButton
          className='new-todo__period-btn'
          onClick={onPeriodChange}
          value='month'
        >
          В этом месяце
        </ToggleButton>
        <ToggleButton
          className='new-todo__period-btn'
          onClick={onPeriodChange}
          value='no-period'
        >
          Неважно
        </ToggleButton>
      </ToggleButtonGroup>
      <Button
        className='new-todo__submit-btn'
        onClick={onAddTodo}
        size='large'
        fullWidth
      >
        Добавить задачу
      </Button>
    </div>
  );
}
