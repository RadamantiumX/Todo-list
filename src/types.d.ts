import { type TODO_FILTERS } from './const'

export interface Todo {
  id: string
  title: string
  completed: boolean
}

// Exportamos los TIPOS por separado, pero podemos añadir mas parametros a cada TIPO.
export type TodoId = Pick<Todo, 'id'> // Si tenemos que pasar mas parametros utilizamos la union "|"
export type TodoTitle = Pick<Todo, 'title'>
export type TodoCompleted = Pick<Todo, 'completed'>

// Este TIPO es la interfaz "Todo" en un ARRAY
export type ListOfTodos = Todo[]

export type FilterValue = typeof TODO_FILTERS[keyof typeof TODO_FILTERS]
