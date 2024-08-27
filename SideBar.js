import React from 'react';
import { categories } from '../utils/constant';
import './Sidebar.css';

const SideBar = ({ selectedCategory, setSelectedCategory }) => {

  return (
    <aside className='sidebar'>

      {categories.map((category) => (

        <button
          className="sidebar-btn"
          onClick={() => setSelectedCategory(category.name)}
          key={category.name}
        >
          <span className="category-icon">
        <img src={process.env.PUBLIC_URL + category.icon} alt={category.name} />
        </span>

          <h3 className='category-name'> {category.name} </h3>
        </button>

      ))}

    </aside>
  )
}

export default SideBar