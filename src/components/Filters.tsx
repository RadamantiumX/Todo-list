import { FILTERS_BUTTONS } from '../const'
import { type FilterValue } from '../types'

interface Props {
  onFilterChange: (filter: FilterValue) => void
  // Le decimos q utilice una de las KEYS del TIPO TODO_FILTERS
  filterSelected: FilterValue // Aca obtenemos los valores q necesitamos
  // typeof TODO_FILTERS[keyof typeof TODO_FILTERS]
}

export const Filters: React.FC<Props> = ({ filterSelected, onFilterChange }) => {
  return (
        <ul className="filters">
          {Object.entries(FILTERS_BUTTONS).map(([key, { href, literal }]) => {
            const isSelected = key === filterSelected
            const className = isSelected ? 'selected' : ''
            return (
              <li key={key}>
                <a
                href={href}
                className={className}
                onClick={(event) => {
                  event.preventDefault()
                  onFilterChange(key as FilterValue)
                }}
                >
                 {literal}
                </a>

              </li>
            )
          })}
        </ul>
  )
}
