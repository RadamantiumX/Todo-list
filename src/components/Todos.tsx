import { type TodoId, type ListOfTodos, type Todo as TodoType } from '../types' // Importamos los TIPOS
import { Todo } from './Todo'

interface Props {
  todos: ListOfTodos
  onToggleCompleteTodo: ({ id, completed }: Pick<TodoType, 'id' | 'completed'>) => void
  onRemoveTodo: ({ id }: TodoId) => void // Le pasamos la funcion para remover un TODO
}

// Le estamos pasando como PARAMETRO al TIPO React.FC
export const Todos: React.FC<Props> = ({ todos, onRemoveTodo, onToggleCompleteTodo }) => {
  return (
        <ul className='todo-list'>
           {todos.map(todo => (
            <li key={todo.id}
             className={`${todo.completed ? 'completed' : ''}`}>{/** Si esta "completed" tendra un estilo, si no, se le pondra otro */}
                <Todo
                  key={todo.id}
                  id={todo.id}
                  title={todo.title}
                  completed={todo.completed}
                  onToggleCompleteTodo={onToggleCompleteTodo}
                  onRemoveTodo={onRemoveTodo}
                />
            </li>
           ))}
        </ul>
  )
}
