import { Grid } from '@mui/material';
import { useState } from 'react';
import AddTodo from './AddTodo';
import TodoList from './TodoList';
import TodoListItem from './TodoListItem';

let nextId = 3;

export default function Todo() {
  const [todoText, setTodoText] = useState('');
  const [todoPeriod, setTodoPeriod] = useState('');
  const [todoList, setTodoList] = useState([
    { id: 0, text: 'Забрать посылку в CDEK', period: 'week' },
    { id: 1, text: 'Сходить на Бештау', period: 'month' },
    { id: 2, text: 'Поиграть в настольный варгейм', period: 'week' },
  ]);

  const todayTodos = todoList.filter((todo) => todo.period === 'today');
  const weekTodos = todoList.filter((todo) => todo.period === 'week');
  const monthTodos = todoList.filter((todo) => todo.period === 'month');
  const noPeriodTodos = todoList.filter((todo) => todo.period === 'no-period');

  const listTodayTodos = todayTodos.map((todo) => (
    <TodoListItem
      key={todo.id}
      todo={todo}
      onDeleteTodo={() => handleDeleteTodo(todo)}
    />
  ));

  const listWeekTodos = weekTodos.map((todo) => (
    <TodoListItem
      key={todo.id}
      todo={todo}
      onDeleteTodo={() => handleDeleteTodo(todo)}
    />
  ));

  const listMonthTodos = monthTodos.map((todo) => (
    <TodoListItem
      key={todo.id}
      todo={todo}
      onDeleteTodo={() => handleDeleteTodo(todo)}
    />
  ));

  const listNoPeriodTodos = noPeriodTodos.map((todo) => (
    <TodoListItem
      key={todo.id}
      todo={todo}
      onDeleteTodo={() => handleDeleteTodo(todo)}
    />
  ));

  const handlePeriodChange = (e) => {
    setTodoPeriod(e.target.value);
  };

  const handleTextChange = (e) => {
    setTodoText(e.target.value);
  };

  const handleAddTodo = () => {
    if (todoText && todoPeriod) {
      setTodoList([
        ...todoList,
        { id: nextId++, text: todoText, period: todoPeriod },
      ]);
      setTodoText('');
      setTodoPeriod('');
    }
  };

  const handleDeleteTodo = (todo) => {
    setTodoList(todoList.filter((t) => t.id !== todo.id));
  };

  const handleDrop = (dragId, dropPeriod) => {
    const nextTodoList = todoList.map((todo) => {
      if (todo.id === dragId) {
        return {
          ...todo,
          period: dropPeriod,
        };
      } else {
        return todo;
      }
    });
    setTodoList(nextTodoList);
  };

  return (
    <Grid
      container
      className='todo__container'
      spacing='0.5'
      justifyContent='center'
    >
      <Grid
        item
        alignSelf='center'
        paddingRight='8px'
        xs={2}
      >
        <AddTodo
          onAddTodo={handleAddTodo}
          onTextChange={handleTextChange}
          onPeriodChange={handlePeriodChange}
          text={todoText}
          period={todoPeriod}
        />
      </Grid>
      <Grid
        item
        alignSelf='center'
        xs={8}
      >
        <Grid container>
          <Grid
            item
            xs={3}
            minHeight='100vh'
            paddingY='16px'
          >
            <TodoList
              header='Сегодня'
              backgroundColor='#ed6c02'
              period='today'
              onDrop={handleDrop}
            >
              {listTodayTodos}
            </TodoList>
          </Grid>
          <Grid
            item
            xs={3}
            minHeight='100vh'
            paddingY='16px'
          >
            <TodoList
              header='На этой неделе'
              backgroundColor='#ba68c8'
              period='week'
              onDrop={handleDrop}
            >
              {listWeekTodos}
            </TodoList>
          </Grid>
          <Grid
            item
            xs={3}
            minHeight='100vh'
            paddingY='16px'
          >
            <TodoList
              header='В этом месяце'
              backgroundColor='#0288d1'
              period='month'
              onDrop={handleDrop}
            >
              {listMonthTodos}
            </TodoList>
          </Grid>
          <Grid
            item
            xs={3}
            minHeight='100vh'
            paddingY='16px'
          >
            <TodoList
              header='Не важно'
              backgroundColor='#2e7d32'
              period='no-period'
              onDrop={handleDrop}
            >
              {listNoPeriodTodos}
            </TodoList>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
