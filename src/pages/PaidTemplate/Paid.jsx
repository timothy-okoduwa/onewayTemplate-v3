import React from 'react';
import './Paid.css';

// import Form from 'react-bootstrap/Form';
import a from './ido.jpg';
// import { RiSearchLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import useFetch from '../../components/Hooks/useFetch';
import Loading from '../../components/Loading/Loading';
import Error from '../../components/Error/Error';

const Paid = ({ search, data }) => {
  // const [search, setSearch] = useState('')
  const { loading, error } = useFetch('https://wayback.up.railway.app/paids');

  if (loading) return <Loading />;
  if (error) return <Error />;

  //this is where i wrote the functions for the filter buttons
  // const handleBtns = (e) => {
  //     let word = e.target.value;
  //     if (word === 'all') {
  //         setData(data)

  //     }
  //     else if (word === 'xd') {
  //         const filtered = data.filter(item => item.longname.toLowerCase() === 'xd')
  //         setData(filtered)
  //     }
  //     else if (word === 'figma') {
  //         const filtered = data.filter(item => item.longname.toLowerCase() === 'figma')
  //         setData(filtered)
  //     }
  //     else if (word === 'web') {
  //         const filtered = data.filter(item => item.longname.toLowerCase() === 'web')
  //         setData(filtered)
  //     }
  // }

  return (
    <div style={{ backgroundColor: 'black' }}>
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
                  to={`/detail/${props.id}`}
                  style={{ textDecoration: 'none' }}
                >
                  <div>
                    <div className="imageHolder55">
                      <img
                        src={
                          `https://wayback.up.railway.app${props.sight.url}` ||
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

export default Paid;
