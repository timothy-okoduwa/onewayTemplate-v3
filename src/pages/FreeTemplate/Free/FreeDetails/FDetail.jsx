import React from 'react';
import './FDetail.css';
import a from './image.png';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
// import { Link } from 'react-router-dom';
import { useParams, useNavigate } from 'react-router-dom';
// import { usePaystackPayment } from 'react-paystack';
import useFetch from '../../../../components/Hooks/useFetch';
import Newsletter from '../../../NewsLetter/Newsletter';
import Loading from '../../../../components/Loading/Loading';
import Error from '../../../../components/Error/Error';
const FDetail = () => {
  const { id } = useParams();
  const { loading, error, data } = useFetch('http://localhost:1337/frees/' + id);

  const navigate = useNavigate();
  if (loading) return <Loading/> ;
  if (error) return <Error/> ;
  const onSuccess = () => {
    navigate(`/fdownloadthankfree183636egndh03984*5^n/${data.id}`);
  };

  return (
    <>
      {
        <div className="steadyy" style={{ marginTop: '-16px' }}>
          <div class="container22">
            <img
              src={a}
              alt="Snow"
              style={{ width: '100%', height: '50vh', objectFit: 'cover' }}
            />

            <div class="centered">
              <div className="mt-5">
                <div className="firstsss">{data.name} </div>
                <div className="introoo">{data.headerdist}</div>
              </div>
            </div>
          </div>

          <div className="" style={{ marginTop: '120px' }}>
            <div className="container">
              <div className="gistss">
                <div className="row">
                  <div className="col-12 mt-4 col-lg-11 d-flex justify-content-center">
                    <div>
                      <img
                        src={`http://localhost:1337${data.fbanner1.url}`}
                        alt=""
                        style={{ width: '100%' }}
                      />
                    </div>
                  </div>
                  <div className="col-12 mt-4 col-lg-11 d-flex justify-content-center">
                    <div>
                      <img
                        src={`http://localhost:1337${data.fbanner2.url}`}
                        alt=""
                        style={{ width: '100%' }}
                      />
                    </div>
                  </div>
                  <div className="col-12 mt-4 col-lg-11 d-flex justify-content-center">
                    <div>
                      <img
                        src={`http://localhost:1337${data.fbanner3.url}`}
                        alt=""
                        style={{ width: '100%' }}
                      />
                    </div>
                  </div>
                  <div className="col-12 mt-4 col-lg-11 d-flex justify-content-center">
                    <div>
                      <img
                        src={`http://localhost:1337${data.fbanner4.url}`}
                        alt=""
                        style={{ width: '100%' }}
                      />
                    </div>
                  </div>
                  <div className="col-12 mt-4 col-lg-11 d-flex justify-content-center">
                    <div>
                      <img
                        src={`http://localhost:1337${data.fbanner5.url}`}
                        alt=""
                        style={{ width: '100%' }}
                      />
                    </div>
                  </div>
                  <div className="col-12 mt-4 col-lg-11 d-flex justify-content-center">
                    <div>
                      <img
                        src={`http://localhost:1337${data.fbanner6.url}`}
                        alt=""
                        style={{ width: '100%' }}
                      />
                    </div>
                  </div>
                  <div className="col-12 mt-4 col-lg-11 d-flex justify-content-center">
                    <div>
                      <img
                        src={`http://localhost:1337${data.fbanner7.url}`}
                        alt=""
                        style={{ width: '100%' }}
                      />
                    </div>
                  </div>
                  <div className="col-12 mt-4 col-lg-11 d-flex justify-content-center">
                    <div>
                      <img
                        src={`http://localhost:1337${data.fbanner8.url}`}
                        alt=""
                        style={{ width: '100%' }}
                      />
                    </div>
                  </div>
                </div>
                <div>
                  <Card style={{ width: '18rem' }} className="vard mt-5">
                    <Card.Img
                      variant="top"
                      src={`http://localhost:1337${data.fsight.url}`}
                      className="p-2"
                      style={{
                        borderRadius: '15px',
                        height: '230px',
                        objectFit: 'cover',
                      }}
                    />
                    <Card.Body>
                      <Card.Title className="cname">{data.name}</Card.Title>
                      <Card.Text>✓ {data.longname}</Card.Text>
                      <Card.Text>₦ {data.price}</Card.Text>
                      <div>
                        <Button onClick={onSuccess} className="mt-3">
                          {' '}
                          Proceed Download
                        </Button>
                      </div>
                    </Card.Body>
                  </Card>
                </div>
              </div>
            </div>

            <div className="dowmm">
              <div className="container mt-5 ">
                <div className="view">
                  <b>Overview</b>
                  <div className="mt-4">{data.discription}</div>
                </div>

                <br />
                <div className=" lay">Compatability</div>
                <div className="compact">
                  <img
                    src={`http://localhost:1337${data.fcompact.url}`}
                    alt=""
                    style={{ width: '100%' }}
                  />
                </div>

                <Newsletter />
              </div>
            </div>
          </div>
        </div>
      }
    </>
  );
};

export default FDetail;
