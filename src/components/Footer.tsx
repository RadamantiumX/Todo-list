import { type FilterValue } from '../types'
import { Filters } from './Filters'

// Queremos mostrar cuantos tenemos activos
// Si los hemos completados todos, hacer algo

interface Props {
  activeCount: number
  completedCount: number
  filterSelected: FilterValue
  onClearCompleted: () => void
  handleFilterChange: (filter: FilterValue) => void
}

export const Footer: React.FC<Props> = ({
  activeCount = 0,
  completedCount = 0,
  filterSelected,
  handleFilterChange,
  onClearCompleted
}) => {
  return (
        <footer className="footer">
            <span className="todo-count">
                <strong>
                    {activeCount}
                </strong>
                tareas pendientes
            </span>
            <Filters
              filterSelected={filterSelected}
              onFilterChange={handleFilterChange}
            />
            {
              completedCount > 0 && (
                <button
                 className='clear-completed'
                 onClick={onClearCompleted}
                >
                 Borrar Completadas
                </button>
              )
            }
        </footer>
  )
}
