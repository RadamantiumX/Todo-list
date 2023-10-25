import { useState } from 'react'
import { Todos } from './components/Todos'
import { type TodoTitle, type FilterValue, type TodoId, type Todo as TodoType } from './types'
import { TODO_FILTERS } from './const'
import { Footer } from './components/Footer'
import { Header } from './components/Header'

const mockTodos = [
  {
    id: '1',
    title: 'Ver tutoriales',
    completed: true
  },
  {
    id: '2',
    title: 'Aprender REACT con TS',
    completed: false
  },
  {
    id: '3',
    title: 'Ponerlo en practica',
    completed: false
  }
]

const App = (): JSX.Element => { // Esta funcion devuelve ese TIPO de archivo
  const [todos, setTodos] = useState(mockTodos)

  // Tenemos una forma de cambiar el filterSelected
  // Con el <FilterValue> le indicamos el estado q queremos guardar, y no uno es especifico
  const [filterSelected, setFilterSelected] = useState<FilterValue>(TODO_FILTERS.ALL)

  // Va a recibir la ID del TODO
  const handleRemove = ({ id }: TodoId): void => {
    // Filtramos los TODOS a los q sean diferentes a la ID q le pasamos
    const newTodos = todos.filter(todo => todo.id !== id)
    setTodos(newTodos)
  }

  // Tomamos solo una parte del TIPO Todo, en este caso el "id" y el "completed"
  const handleCompleted = ({ id, completed }: Pick<TodoType, 'id' | 'completed'>): void => {
    const newTodos = todos.map(todo => {
      if (todo.id === id) {
        return {
          ...todo,
          completed
        }
      }

      return todo
    })
    setTodos(newTodos)
  }

  const handleFilterChange = (filter: FilterValue): void => {
    console.log(filter)
    setFilterSelected(filter) // Cambia el estado del FILTER
  }

  // Para eliminar los TODOS completados
  const handleremoveAllCompleted = (): void => {
    const newTodos = todos.filter(todo => !todo.completed)
    setTodos(newTodos)
  }

  const activeCount = todos.filter(todo => !todo.completed).length
  const completedCount = todos.length - activeCount // Le restamos activeCount

  const filteredTodos = todos.filter(todo => {
    if (filterSelected === TODO_FILTERS.ACTIVE) return !todo.completed
    if (filterSelected === TODO_FILTERS.COMPLETED) return todo.completed
    return todo
  })

  // Creamos un nuevo TODO
  const handleAddTodo = ({ title }: TodoTitle): void => {
    const newTodo = {
      id: crypto.randomUUID(),
      title,
      completed: false
    }

    // Lo añadimos al resto
    const newTodos = [...todos, newTodo]

    // Actualizamos el estado
    setTodos(newTodos)
  }

  return (
    <div className='todoapp'>
      <Header onAddTodo={handleAddTodo}/>
      <Todos
       onToggleCompleteTodo={handleCompleted}
       onRemoveTodo={handleRemove}
       todos={filteredTodos}
       />
       <Footer
        activeCount={activeCount}
        completedCount={completedCount}
        filterSelected={filterSelected}
        onClearCompleted={handleremoveAllCompleted}
        handleFilterChange={handleFilterChange}
       />
    </div>
  )
}

export default App
