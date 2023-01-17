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
  return (
    <div style={{ backgroundColor: 'black' }}>

      <div className=" container">
        <div className="row pb-4">
          {data.filter((props) => {
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
