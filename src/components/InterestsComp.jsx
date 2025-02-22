import { Container, Row, Col, Button } from 'react-bootstrap';
import { useSelector } from 'react-redux';

const InterestsComp = () => {
  const profile = useSelector((state) => {
    return state.profile;
  });

  const currentProfile = useSelector((state) => {
    return state.currentProfile;
  });

  return (
    <Container
      fluid
      className=' bg-white mt-2 rounded-3 position-relative bordinoGames'
    >
      <Row className='ms-2 align-items-md-start'>
        <Col xs={12} md={6} className='mt-3 mb-3'>
          <h3>Interests</h3>
        </Col>

        {profile._id === currentProfile._id && (
          <button type='button' className=' border-0 plus btn btn-sm'>
            <i className='bi bi-plus-lg fs-4'></i>
          </button>
        )}

        {profile._id === currentProfile._id && (
          <button className='btn bg-white border-0 matitina'>
            <i className='bi bi-pencil fs-5'></i>
          </button>
        )}
      </Row>
      <Row>
        <Col xs={12} md={6} className='pe-0'>
          <Row className='ms-2 ms-md-0 ms-lg-3'>
            <Col xs={2} className='pe-0 px-md-0'>
              <img
                src='https://media.licdn.com/dms/image/v2/D4D0BAQGIhX3bWhxh9w/company-logo_100_100/company-logo_100_100/0/1725522409182/selectra_logo?e=1746057600&v=beta&t=gjqQiU10CokbqAXwYwtfn7BmR5SoUtFnOvvcWIn_TXI'
                alt=''
                style={{ width: '45px' }}
              />
            </Col>
            <Col xs={10} className='ps-0 ps-md-4 ps-lg-1'>
              <h4 className='fw-bold fs-6'>Selectra</h4>
              <p className='descriptions'>74,012 followers</p>
              <button
                className='btn btn-sm border-black bg-transparent text-black rounded-5 mt-2 ps-2 pe-3 d-flex align-items-center fw-bold py-0'
                id='btnResources'
              >
                <i className='bi bi-check-lg fs-6 me-1'></i>
                Following
              </button>
            </Col>
          </Row>
          <hr className='d-md-none' />
        </Col>
        <Col xs={12} md={6}>
          <Row className='ms-2'>
            <Col xs={2} className='px-md-0'>
              <img
                src='https://media.licdn.com/dms/image/v2/D4D0BAQGIhX3bWhxh9w/company-logo_100_100/company-logo_100_100/0/1725522409182/selectra_logo?e=1746057600&v=beta&t=gjqQiU10CokbqAXwYwtfn7BmR5SoUtFnOvvcWIn_TXI'
                alt=''
                style={{ width: '45px' }}
              />
            </Col>
            <Col xs={10} className='ps-0 ps-md-4 ps-lg-1'>
              <h4 className='fw-bold fs-6'>Selectra</h4>
              <p className='descriptions'>74,012 followers</p>
              <button
                className='btn btn-sm border-black bg-transparent text-black rounded-5 mt-2 ps-2 pe-3 d-flex align-items-center fw-bold py-0'
                id='btnResources'
              >
                <i className='bi bi-check-lg fs-6 me-1'></i>
                Following
              </button>
            </Col>
          </Row>
        </Col>
      </Row>
      <hr className='mt-3 mb-0' />
      <Row>
        <Col>
          <Button className=' bg-transparent w-100 border-0 text-black mt-0 pb-2 fw-bold d-flex align-items-center justify-content-center btnAnalytics'>
            Show all companies <i className='bi bi-arrow-right-short fs-5'></i>
          </Button>
        </Col>
      </Row>
    </Container>
  );
};
export default InterestsComp;
