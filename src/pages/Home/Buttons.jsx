import React from 'react'
import './Home.css'
// import { Link } from 'react-scroll';
import useFetch from '../../components/Hooks/useFetch';
const Buttons = ({ filterItem, setData, menuItems }) => {
      const { data } = useFetch('http://localhost:1337/paids');
  return (
    <div className="types ">
      
        <button className="psd text-light" onClick={() => setData(data)}>
          All
        </button>
   

      {menuItems.map((val, id) => {
        return (
          <button
            className="psd text-light"
            onClick={() => filterItem(val)}
            key={id}
          >
            {val}
          </button>
        );
      })}
    </div>
  );
};

export default Buttons