import { render, screen, fireEvent } from '@testing-library/react';
import AddTodo from '../pages/todos/components/AddTodo'; // Ruta correcta

test('should update input value', () => {
  render(<AddTodo />);
  
  const input = screen.getByPlaceholderText(/nueva tarea/i) as HTMLInputElement;
  expect(input.value).toBe('');

  // Simula el cambio en el input
  fireEvent.change(input, { target: { value: 'Nueva tarea' } });

  // Verifica que el valor se haya actualizado
  expect(input.value).toBe('Nueva tarea');
});
