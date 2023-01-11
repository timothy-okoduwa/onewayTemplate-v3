import React, { useState } from 'react';
import './Free.css';
// import Form from 'react-bootstrap/Form';
import a from './ido.jpg';
import { RiSearchLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import useFetch from '../../../components/Hooks/useFetch';
import Loading from '../../../components/Loading/Loading';
import Error from '../../../components/Error/Error';
const Free = ({ search }) => {
  const { loading, error, data } = useFetch(
    'https://wayback.up.railway.app/frees'
  );

  if (loading) return <Loading />;
  if (error) return <Error />;

  console.log(data);
  return (
    <div className="mainsss">
      {/* <div className='searchbarholder'>
                <div className='sigh'>
                    <RiSearchLine className='search' />
                    <input className='ok' placeholder='Eg web,figma,xd 😉' onChange={event => { setSearch(event.target.value) }} />


                </div>

            </div> */}
      {/* <div className='buttot'>
                <div className='types mt-4'>
                    <button className='psd' value='all' onClick={handleBtns} >
                        ALL
                    </button>
                    <button className='psd' value='figma' onClick={handleBtns}  >
                        FIGMA
                    </button>
                    <button className='psd' value='xd' onClick={handleBtns}  >
                        XD
                    </button>
                    <button className='psd' value='web' onClick={handleBtns}   >
                        WEB
                    </button>

                </div>
            </div> */}
      <div className=" container">
        <div className="row pb-4">
          {data
            .filter((props) => {
              if (search === '') {
                return props;
              } else if (
                props.longname.toLowerCase().includes(search.toLowerCase())
              ) {
                return props;
              }
            })
            .map((props) => (
              <div className="col col-12 col-lg-4 mt-5" key={props.id}>
                <Link
                  to={`/fdetail/${props.id}`}
                  style={{ textDecoration: 'none' }}
                >
                  <div>
                    <div className="imageHolder55">
                      <img
                        src={
                          `https://wayback.up.railway.app${props.fsight.url}` ||
                          a
                        }
                        alt=""
                        className="mama"
                      />
                    </div>
                    <div style={{ marginTop: '30px' }}>
                      <div className="itemname2">{props.name}</div>
                      <div className="price"> ₦ {props.price}</div>
                      <div className="category">{props.longname}</div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Free;
