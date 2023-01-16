import React, { useState, useEffect } from 'react';
import './FDownload.css';
import Badge from 'react-bootstrap/Badge';
import { useParams, useNavigate } from 'react-router-dom';
import useFetch from '../../../../components/Hooks/useFetch';

import { db } from '../../../../firebase';
import {
  doc,
  updateDoc,
  increment,
  setDoc,
  collection,
  getDocs,
} from 'firebase/firestore';
import Button from 'react-bootstrap/Button';
import Loading from '../../../../components/Loading/Loading';
import Error from '../../../../components/Error/Error';
const FDownload = () => {
 const [users, setUsers] = useState([]);
  const usersCollectionRef = collection(db, 'freeDownload');

  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(usersCollectionRef);
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getUsers();
  }, []);




  // const initialCount = () => Number(window.localStorage.getItem('num'));
  // let [num, setNum] = useState(initialCount);
  // let incNum = () => {
  //   setNum(num + 1);
  // };
  //   useEffect(() => {
  //     window.localStorage.setItem('num', num);
  //   }, [num]);
const userClick = async()=>{
const freeRef = doc(db, 'freeDownload', 'views');

// Atomically increment the population of the city by 50.
await updateDoc(freeRef, {
  Downloads: increment(1),
});
}

  const { id } = useParams();
  const { loading, error, data } = useFetch(
    'https://wayback.up.railway.app/frees/' + id
  );

  const navigate = useNavigate();
  if (loading) return <Loading />;
  if (error) return <Error />;
  const move = () => {
    navigate('/free');
  };

  // const userclick = async () => {
  //   await setDoc(doc(db, 'freeDownloads', 'ment'), {
  //     status: 'just downloaded',
  //     LatestDownload: Timestamp.fromDate(new Date()),
  //     numberOfDownloads: num,
  //   });
  // };
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
                    move();
                    userClick();
                  }}
                >
                  Download
                </Button>
              </a>
              {/* <div>{count}</div>
                <button onClick={increase}>ok</button> */}
            </div>
{users.map((user)=>{
  return (
    <div className="otal">
      we have a total number of <b className="Tempp2 mx-2">{user.Downloads}</b> downloads
    </div>
  );
})}
          </div>
        </div>
      }
    </>
  );
};

export default FDownload;
