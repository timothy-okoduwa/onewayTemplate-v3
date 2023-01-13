import React from 'react';
import './FDownload.css';

import { useParams, useNavigate } from 'react-router-dom';
import useFetch from '../../../../components/Hooks/useFetch';
import { setDoc, doc, Timestamp } from 'firebase/firestore';
import { db } from '../../../../firebase';
import Button from 'react-bootstrap/Button';
import Loading from '../../../../components/Loading/Loading';
import Error from '../../../../components/Error/Error';
const FDownload = () => {
  let [num, setNum] = React.useState(0);

  const { id } = useParams();
  const { loading, error, data } = useFetch(
    'https://wayback.up.railway.app/frees/' + id
  );

  const navigate = useNavigate();
  if (loading) return <loading />;
  if (error) return <Error />;
  const move = () => {
    navigate('/free');
  };
  let incNum = () => {
  setNum(num + 1);
    }
 

  const userclick = async () => {
    await setDoc(doc(db, 'freeDownloads', 'ment'), {
      status: 'just downloaded',
      LatestDownload: Timestamp.fromDate(new Date()),
      numberOfDownloads: num,
    });
  };
  return (
    <>
      {
        <div
          style={{
            backgroundColor: 'black',
            paddingTop: '200px',
            color: 'white',
            marginTop: '-16px',
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
                  src={`https://wayback.up.railway.app${data.fsight.url}`}
                  alt=""
                  className="imgcc"
                />
              </div>
            </div>
            <div className="buttt">
              <a
                href={data.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: 'none', color: 'white' }}
              >
                <Button
                  type="submit"
                  className="mt-2"
                  onClick={() => {
                    // move();
                    userclick();
                    incNum();
                  }}
                >
                  Download
                </Button>
              </a>
              {/* <div>{count}</div>
                <button onClick={increase}>ok</button> */}
            </div>
          </div>
        </div>
      }
    </>
  );
};

export default FDownload;
