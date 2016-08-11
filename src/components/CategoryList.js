import React from 'react';
import NavLink from './NavLink';


class CategoryList extends React.Component {
  render() {
    return (
      <aside className="col-md-4">
        <h2>Categories</h2>
        <br/>
        <div className="list-group" id="affix">
          <NavLink to="/categories/agile" className="list-group-item">Agile</NavLink>
          <NavLink to="/categories/big-data" className="list-group-item">Big Data</NavLink>
          <NavLink to="/categories/cloud" className="list-group-item">Cloud</NavLink>
          <NavLink to="/categories/database" className="list-group-item">Database</NavLink>
          <NavLink to="/categories/devops" className="list-group-item">Devops</NavLink>
          <NavLink to="/categories/integration" className="list-group-item">Integration</NavLink>
          <NavLink to="/categories/iot" className="list-group-item">IoT</NavLink>
          <NavLink to="/categories/java" className="list-group-item">Java</NavLink>
          <NavLink to="/categories/mobile" className="list-group-item">Mobile</NavLink>
          <NavLink to="/categories/performance" className="list-group-item">Performance</NavLink>
          <NavLink to="/categories/webdev" className="list-group-item">Web Dev</NavLink>
        </div>
      </aside>
    )
  }
}

export default CategoryList;
