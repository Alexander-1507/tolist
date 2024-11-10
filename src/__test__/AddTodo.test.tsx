import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../redux/store';
import AddTodo from '../pages/todos/components/AddTodo';

describe('AddTodo Component', () => {
  test('should select Urgente as priority', () => {
    render(
      <Provider store={store}>
        <AddTodo />
      </Provider>
    );

    const prioritySelect = screen.getByTestId('selectorPrioridad') as HTMLSelectElement;
    fireEvent.change(prioritySelect, { target: { value: 'Urgente' } });
    expect(prioritySelect.value).toBe('Urgente');
  });

  test('should select Media as priority', () => {
    render(
      <Provider store={store}>
        <AddTodo />
      </Provider>
    );

    const prioritySelect = screen.getByTestId('selectorPrioridad') as HTMLSelectElement;
    fireEvent.change(prioritySelect, { target: { value: 'Normal' } });
    expect(prioritySelect.value).toBe('Normal');
  });

  test('should select Baja as priority', () => {
    render(
      <Provider store={store}>
        <AddTodo />
      </Provider>
    );

    const prioritySelect = screen.getByTestId('selectorPrioridad') as HTMLSelectElement;
    fireEvent.change(prioritySelect, { target: { value: 'Nada de Prioridad' } });
    expect(prioritySelect.value).toBe('Nada de Prioridad');
  });
});
