import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { DndProvider } from 'react-dnd';
import './index.scss';

ReactDOM.createRoot(document.getElementById('root')).render(
  <DndProvider backend={HTML5Backend}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </DndProvider>
);
