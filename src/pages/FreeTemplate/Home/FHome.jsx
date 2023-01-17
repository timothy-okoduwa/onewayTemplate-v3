import React from 'react';
import Free from '../Free/Free';
import Newsletter from '../../NewsLetter/Newsletter';
import { RiSearchLine } from 'react-icons/ri';
import './Home.css';
import { Link } from 'react-scroll';
// import Carousel from 'react-bootstrap/Carousel';
import useFetch from '../../../components/Hooks/useFetch';
import a from './images/Group.png';
import Buttons from './FButtons';

const FHome = () => {
    const { data, setData } = useFetch('https://wayback.up.railway.app/frees');
  const [search, setSearch] = React.useState('');
    const menuItems = [...new Set(data.map((Val) => Val.longname))];

    const filterItem = (curcat) => {
      const newItem = data.filter((newVal) => {
        return newVal.longname === curcat;
      });
      setData(newItem);
    };

  return (
    <>
      <div style={{ 'margin-top': '-16px', backgroundColor: 'black' }}>
        <div class="container22">
          <img
            src={a}
            alt="Snow"
            style={{ width: '100%', height: '100vh', objectFit: 'cover' }}
          />

          <div class="centered container">
            <div className="mt-5 ">
              <div className="firsts">
                Free Design Resources.
                <div className="introoo">
                  Get the best UI & Website Template
                </div>
              </div>
              <div className="searchbarholder">
                <div className="sighh">
                  <RiSearchLine className="tpti" />
                  <input
                    className="ok"
                    placeholder=" web, figma, xd 😉"
                    onChange={(event) => {
                      setSearch(event.target.value);
                    }}
                  />
                </div>
              </div>
              <div>
                <Link
                  to="Free"
                  spy={true}
                  offset={-70}
                  smooth={true}
                  duration={220}
                >
                  <Buttons
                    filterItem={filterItem}
                    setData={setData}
                    menuItems={menuItems}
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Free search={search} data={data} />

      <Newsletter />
    </>
  );
};

export default FHome;
