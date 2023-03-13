import React, { useState } from 'react';
import './Detailed.css';
import a from './image.png';
// import f from './fin.png'
import Button from 'react-bootstrap/Button';
import { useParams, useNavigate } from 'react-router-dom';
import { usePaystackPayment } from 'react-paystack';
import useFetch from '../../../components/Hooks/useFetch';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
// import { Link } from 'react-router-dom';
import NewsLetter from '../../NewsLetter/Newsletter';
import Loading from '../../../components/Loading/Loading';
import Error from '../../../components/Error/Error';
const Detailed = () => {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const { id } = useParams();
  const { loading, error, data } = useFetch('http://localhost:1337/paids/' + id);
  const navigate = useNavigate();
  if (loading)
    return (
 <Loading/>
    );
  if (error)
    return (
 <Error/>
    );
  const config = {
    reference: new Date().getTime().toString(),
    email: email,
    phone: name,
    amount: data.price * 100,
    publicKey: 'pk_live_dc0a46a8affdd06e7d7a9ce3bfd5c842c71d0511',
    // publicKey: 'pk_test_89aaa353160cbf6c9c97b5efb14e4e0ff3f5f5eb',
  };
  const onSuccess = (reference) => {
    navigate(
      `/pdownloadthakjeuyeyou112jrhghrhdgdhdgdvhd9876789jdEUIEU3U3U32UI43838ydjhgUYtyrtdhy9UJJSSH9276gdgnc12(*-*)487/${data.id}`
    );
    setEmail(' ');
    setName(' ');
  };

  const onClose = () => {
    alert(
      'something went wrong make sure you enter your valid Email address 📧'
    );
    setEmail(' ');
    setName(' ');
  };

  const PaystackHookExample = () => {
    const initializePayment = usePaystackPayment(config);
    return (
      <div>
        <Button
          onClick={() => {
            initializePayment(onSuccess, onClose);
          }}
          className=" mt-2 biti "
          disabled={!email || !name}
        >
          Start Purchase
        </Button>
      </div>
    );
  };

  return (
    <>
      {
        <div className="steady " style={{ marginTop: '-16px' }}>
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
                        src={`http://localhost:1337${data.banner1.url}`}
                        alt=""
                        style={{ width: '100%' }}
                      />
                    </div>
                  </div>
                  <div className="col-12 mt-4 col-lg-11 d-flex justify-content-center">
                    <div>
                      <img
                        src={`http://localhost:1337${data.banner2.url}`}
                        alt=""
                        style={{ width: '100%' }}
                      />
                    </div>
                  </div>
                  <div className="col-12 mt-4 col-lg-11 d-flex justify-content-center">
                    <div>
                      <img
                        src={`http://localhost:1337${data.banner3.url}`}
                        alt=""
                        style={{ width: '100%' }}
                      />
                    </div>
                  </div>
                  <div className="col-12 mt-4 col-lg-11 d-flex justify-content-center">
                    <div>
                      <img
                        src={`http://localhost:1337${data.banner4.url}`}
                        alt=""
                        style={{ width: '100%' }}
                      />
                    </div>
                  </div>
                  <div className="col-12 mt-4 col-lg-11 d-flex justify-content-center">
                    <div>
                      <img
                        src={`http://localhost:1337${data.banner5.url}`}
                        alt=""
                        style={{ width: '100%' }}
                      />
                    </div>
                  </div>
                  <div className="col-12 mt-4 col-lg-11 d-flex justify-content-center">
                    <div>
                      <img
                        src={`http://localhost:1337${data.banner6.url}`}
                        alt=""
                        style={{ width: '100%' }}
                      />
                    </div>
                  </div>
                  <div className="col-12 mt-4 col-lg-11 d-flex justify-content-center">
                    <div>
                      <img
                        src={`http://localhost:1337${data.banner7.url}`}
                        alt=""
                        style={{ width: '100%' }}
                      />
                    </div>
                  </div>
                  <div className="col-12 mt-4 col-lg-11 d-flex justify-content-center">
                    <div>
                      <img
                        src={`http://localhost:1337${data.banner8.url}`}
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
                      src={`http://localhost:1337${data.sight.url}`}
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
                        <Form
                          noValidate
                          validated={validated}
                          onSubmit={handleSubmit}
                        >
                          <Form.Group controlId="validationCustom01">
                            <Form.Control
                              required
                              type="text"
                              placeholder="Enter your Email"
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                            />
                            <Form.Control.Feedback type="invalid">
                              please Enter number
                            </Form.Control.Feedback>
                          </Form.Group>

                          <Form.Group
                            controlId="validationCustom02"
                            className="mt-2"
                          >
                            <Form.Control
                              required
                              type="number"
                              placeholder="Enter your Phone Number"
                              value={name}
                              onChange={(e) => setName(e.target.value)}
                            />
                            <Form.Control.Feedback type="invalid">
                              please Enter number
                            </Form.Control.Feedback>
                          </Form.Group>

                          <PaystackHookExample />
                        </Form>
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
                    src={`http://localhost:1337${data.compact.url}`}
                    alt=""
                    style={{ width: '100%' }}
                  />
                </div>
                <NewsLetter />
              </div>
            </div>
          </div>
        </div>
      }
    </>
  );
};

export default Detailed;
