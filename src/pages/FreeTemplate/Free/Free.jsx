import React, { useState, useEffect } from 'react';
import './Free.css';
// import Form from 'react-bootstrap/Form';
import a from './ido.jpg';

import { Link } from 'react-router-dom';
import useFetch from '../../../components/Hooks/useFetch';
import Loading from '../../../components/Loading/Loading';
import Error from '../../../components/Error/Error';
import Pagination from '../../../Pagination';

const Free = ({ search,data }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [recordsPerPage] = useState(6);

        const indexOfLastRecord = currentPage * recordsPerPage;
        const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
        const currentRecords = data.slice(
          indexOfFirstRecord,
          indexOfLastRecord
        );
        const nPages = Math.ceil(data.length / recordsPerPage);

  const { loading, error } = useFetch('http://localhost:1337/frees');

  if (loading) return <Loading />;
  if (error) return <Error />;

  // console.log(data);
  return (
    <div className="mainsss" id="Free">
      <div className=" container">
        <div className="row pb-4">
          {currentRecords
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
                          `http://localhost:1337${props.fsight.url}` ||
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
          <Pagination
            nPages={nPages}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        </div>
      </div>
    </div>
  );
};

export default Free;
