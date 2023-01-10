import React from 'react';
import Free from '../Free/Free';
import Newsletter from '../../NewsLetter/Newsletter';
import { RiSearchLine } from 'react-icons/ri';
import './Home.css';
// import Carousel from 'react-bootstrap/Carousel';
import a from './images/Group.png';
import Buttons from '../../Home/Buttons';
const FHome = () => {
  const [search, setSearch] = React.useState('');
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
                <Buttons />
              </div>
            </div>
          </div>
        </div>
      </div>

      <Free search={search} />

      <Newsletter />
    </>
  );
};

export default FHome;
