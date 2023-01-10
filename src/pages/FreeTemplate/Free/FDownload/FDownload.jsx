import React from 'react'
import './FDownload.css'
import f from './fin.png'
import { useParams, useNavigate } from 'react-router-dom';
import useFetch from '../../../../components/Hooks/useFetch';
import Button from 'react-bootstrap/Button';
const FDownload = () => {
    const { id } = useParams();
    const { loading, error, data } = useFetch('https://wayback.up.railway.app/frees/' + id)

    const navigate = useNavigate()
    if (loading) return <p style={{ textAlign: 'center', backgroundColor: 'black', color: 'white' }}>Loading...</p>
    if (error) return <p style={{ textAlign: 'center', backgroundColor: 'black', color: 'white' }}>Error :(</p>
    const move = () => {
        navigate('/free')
    }
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
                <Button type="submit" className="mt-2" onClick={move}>
                
                    Download
                  
                </Button></a>
              </div>
            </div>
          </div>
        }
      </>
    );
}

export default FDownload