import React from 'react';
import './PDownload.css';
// import f from './fin.png'
import { useParams, useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import useFetch from '../../../components/Hooks/useFetch';
import Loading from '../../../components/Loading/Loading';
import Error from '../../../components/Error/Error';
const PDownload = () => {
  const { id } = useParams();
  const { loading, error, data } = useFetch(
    'https://wayback.up.railway.app/paids/' + id
  );

  const navigate = useNavigate();
  if (loading)
    return (
<Loading/>
    );
  if (error)
    return (
<Error/>
    );
  const move = () => {
    navigate('/');
  };
  return (
    <>
      {
        <div
          style={{
            backgroundColor: 'black',
            paddingTop: '200px',
            color: 'white',
          }}
        >
          <div className="container">
            <div className="center">
              Thank you for choosing <b className="Tempp">{data.name}</b>{' '}
              Template 🙏
            </div>
            <div className="cent">
              <div className="imgcc">
                <img
                  src={`https://wayback.up.railway.app${data.sight.url}`}
                  alt=""
                  className="imgcc"
                />
              </div>
            </div>
            <div className="buttt">
              {' '}
              <a
                href={data.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: 'none', color: 'white' }}
              >
                <Button type="submit" className="mt-2" onClick={move}>
                  Download
                </Button>
              </a>
            </div>
          </div>
        </div>
      }
    </>
  );
};

export default PDownload;
