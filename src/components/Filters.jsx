import { useId } from 'react';
import './Filters.css'
import { useFilters } from '../hooks/useFilters.js';

export function Filters () {
    const { filters, setFilters } = useFilters()
    const minPriceFilterID = useId()
    const categoryFilterID = useId();

    const handleChangeMinPrice = (event) => {
        setFilters(prevState => ({
            ...prevState,
            minPrice: event.target.value
        }))
    }

    const handleChangeCategory = (event) => {
        setFilters(prevState => ({
            ...prevState,
            category: event.target.value
        }))
    }

    return (
      <section className="filters">
        <div>
          <label htmlFor={minPriceFilterID}>Price</label>
          <input 
            type="range" 
            id={minPriceFilterID} 
            min="0" 
            max="2000" 
            onChange={handleChangeMinPrice} 
            value={filters.minPrice}
          />
          <span>${filters.minPrice}</span>
        </div>

        <div>
          <label htmlFor={categoryFilterID}>Category</label>
          <select id={categoryFilterID} onChange={handleChangeCategory}>
            <option value="all">Todas</option>
            <option value="laptops">Laptops</option>
            <option value="smartphones">Calulares</option>
          </select>
        </div>
      </section>
    );
}