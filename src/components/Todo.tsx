import { type TodoId, type Todo as TodoType } from '../types' // Importamos el TIPO para reutilizar las PROPS
// Son las mismas PROPS q le llegan
// Siempre q podamos REUTILIZAR LOS TIPOS

// Extendemos de TodoType, y obtenemos el "onRemoveTodo"
interface Props extends TodoType {
  onToggleCompleteTodo: ({ id, completed }: Pick<TodoType, 'id' | 'completed'>) => void
  onRemoveTodo: ({ id }: TodoId) => void
}

export const Todo: React.FC<Props> = ({ id, title, completed, onRemoveTodo, onToggleCompleteTodo }) => { // Si esta chequeado
  const handleChangeCheckBox = (event: React.ChangeEvent<HTMLInputElement>): void => {
    onToggleCompleteTodo({
      id,
      completed: event.target.checked
    })
  }
  return (
        <div className="view">
            <input
             className="toggle"
             type="checkbox"
             checked={completed}
             onChange={handleChangeCheckBox}
             />
             <label>{title}</label>
             <button
             className='destroy'
             onClick={() => {
               onRemoveTodo({ id })
             }}
             ></button>
        </div>
  )
}
