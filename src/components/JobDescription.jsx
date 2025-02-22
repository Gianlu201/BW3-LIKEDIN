/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import companyImages from '../data/company_images.json';

const JobDescription = () => {
  const params = useParams();

  const [selectedJob, setSelectedJob] = useState({});
  const [obj, setObj] = useState({
    itemID: 6,
    GlossaryWord: 'ante',
    GlossaryDescription: '<p>.</p>',
    CategoryID: 6,
  });

  const getJob = async () => {
    const URL = `https://strive-benchmark.herokuapp.com/api/jobs?company=${params.company}`;

    try {
      const response = await fetch(URL, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (response.ok) {
        const data = await response.json();
        const arr = data.data;
        arr.forEach((element) => {
          console.log(element._id);
          if (element._id == params.jobId) {
            setSelectedJob(element);
          }
        });
      } else {
        throw new Error('errore nel recupero dati');
      }
    } catch (error) {
      console.log(error);
    }
  };

  const timePassed = (dat) => {
    const targetDay = new Date(dat);
    const today = new Date();

    const timePassed = (today - targetDay) / 1000;
    const yearPassed = Math.floor(timePassed / 60 / 60 / 24 / 30 / 12);
    const monthsPassed = Math.floor(timePassed / 60 / 60 / 24 / 30);
    const daysPassed = Math.floor(timePassed / 60 / 60 / 24);
    const hoursPassed = Math.floor(timePassed / 60 / 60);
    const minutesPassed = Math.floor(timePassed / 60);
    const secondsPassed = Math.floor(timePassed);

    switch (true) {
      case yearPassed > 0:
        return `${yearPassed}y`;
      case monthsPassed > 0:
        return `${monthsPassed}m`;
      case daysPassed > 0:
        return `${daysPassed}d`;
      case hoursPassed > 0:
        return `${hoursPassed}h`;
      case minutesPassed > 0:
        return `${minutesPassed}min`;
      case secondsPassed > 0:
        return `${secondsPassed}sec`;
      default:
        return 'now';
    }
  };

  const getRandomViewers = () => {
    const caracters = params.jobId.split('');
    const numbers = caracters.filter((c) => isFinite(c));
    return `${numbers[numbers.length - 3]}${numbers[numbers.length - 2]}${
      numbers[numbers.length - 1]
    }`;
  };

  useEffect(() => {
    getJob();
  }, [params.jobId]);

  useEffect(() => {
    setSelectedJob({});
  }, [params.query]);

  useEffect(() => {
    setObj({ ...obj, GlossaryDescription: selectedJob.description });
  }, [selectedJob._id]);

  return (
    <Container
      className={'bg-white my-2 rounded-3 bordinoGames '.concat(
        selectedJob?._id ? 'd-block' : 'd-none'
      )}
    >
      <Row className='justify-content-between align-items-center mt-1 ms-md-2 ms-lg-1 ms-xl-0 ps-xl-0'>
        <Col xs={12} className=' d-flex justify-content-end border-bottom'>
          <div className=' dropdown'>
            <Button
              type='button'
              data-bs-toggle='dropdown'
              aria-expanded='false'
              className=' btn bg-transparent border-0'
            >
              <i className='bi bi-arrow-90deg-right text-black'></i>
            </Button>

            <ul
              className='dropdown-menu dropdown-menu-end ps-2'
              style={{ width: '200px' }}
            >
              <li>
                <h6 className='dropdown-header'>Share on LinkedIn</h6>
              </li>
              <li className=' pe-2'>
                <a
                  className='hoverRow dropdown-item small d-flex align-items-center'
                  href='javascript:void(0)'
                >
                  <i className='me-1 fs-5 bi bi-pencil-fill text-danger'></i>
                  Report to Feed
                </a>
              </li>
              <li className=' pe-2'>
                <a
                  className='hoverRow dropdown-item small d-flex align-items-center'
                  href='javascript:void(0)'
                >
                  <i className='me-1 fs-5 bi bi-send-fill text-success'></i>
                  Send in a message
                </a>
              </li>
              <li className=' pe-2'>
                <hr className='dropdown-divider' />
              </li>

              <li className=' pe-2'>
                <h6 className='dropdown-header'>Other options</h6>
              </li>
              <li className=' pe-2'>
                <a
                  className='hoverRow dropdown-item small d-flex align-items-center'
                  href='javascript:void(0)'
                >
                  <i className='me-1 fs-5 bi bi-send-fill text-success'></i>
                  Copy link
                </a>
              </li>
              <li className=' pe-2'>
                <a
                  className='hoverRow dropdown-item small d-flex align-items-center'
                  href='javascript:void(0)'
                >
                  <i className='me-1 fs-5 bi bi-twitter-x'></i> X, formerly
                  Twitter
                </a>
              </li>
              <li className=' pe-2'>
                <a
                  className='hoverRow dropdown-item small d-flex align-items-center'
                  href='javascript:void(0)'
                >
                  <i className='me-1 fs-5 bi bi-facebook text-primary'></i>
                  Facebook
                </a>
              </li>
            </ul>
          </div>
          <div className=' dropdown'>
            <Button
              type='button'
              data-bs-toggle='dropdown'
              aria-expanded='false'
              className=' btn bg-transparent border-0'
            >
              <i className='bi bi-three-dots text-black'></i>
            </Button>
            <ul className='dropdown-menu dropdown-menu-end ps-2 pe-2'>
              <li className=''>
                <a
                  className='dropdown-item small d-flex align-items-center py-1 hoverRow'
                  href='javascript:void(0)'
                >
                  <i className=' me-2 fs-5 bi bi-pencil-square text-primary'></i>
                  Send feedback
                </a>
              </li>
              <li className=''>
                <a
                  className=' py-1 dropdown-item small d-flex align-items-center hoverRow'
                  href='javascript:void(0)'
                >
                  <i className=' me-2 fs-5 bi bi-flag-fill text-danger'></i>
                  Report this job
                </a>
              </li>
            </ul>
          </div>
        </Col>
        <Col xs={12} className='mb-1 ps-md-2 ps-lg-3 ps-xl-3 mt-3'>
          <Row className=' align-items-center'>
            <Col
              xs={2}
              lg={1}
              className='pe-0 pe-md-2 pe-lg-0 ms-lg-3 ms-xl-1 d-flex justify-content-center justify-content-lg-end'
            >
              <img
                src={companyImages[params.imgIndex]?.image}
                alt=''
                style={{ width: '55px', height: '55px' }}
              />
            </Col>
            <Col xs={8} className='ps-0 ps-lg-2'>
              <a
                href={`${selectedJob.url}`}
                target='_blank'
                className=' fw-bold mt-2 pb-1 h5 text-primary'
              >
                {selectedJob.company_name}
              </a>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row className=' ps-lg-3 ps-xl-4 ps-2 pb-2'>
        <Col xs={12} className=' py-1'>
          <h5 className=' fw-semibold'>{selectedJob.title}</h5>
          {params.jobId && (
            <p className=' small'>
              {selectedJob.candidate_required_location} · Reposted{' '}
              {timePassed(selectedJob.publication_date)} ago · Over{' '}
              {getRandomViewers()} applicants{' '}
            </p>
          )}
        </Col>
        <Col xs={12} className=' py-1'>
          <p className=' small d-flex align-items-center text-uppercase'>
            <i className=' fs-5 pe-1 text-secondary bi bi-briefcase-fill'></i>
            {selectedJob.job_type}
          </p>
        </Col>
        <Col xs={12} className=' py-1'>
          <p className=' small d-flex align-items-center'>
            <i className=' fs-5 pe-1 text-secondary bi bi-check-circle'></i>
            Applicant review time is typically 3 days <a>Learn more</a>
          </p>
        </Col>
        <Col xs={12} className=' py-1'>
          <p className=' small d-flex align-items-center'>
            <i className=' fs-5 pe-1 text-secondary bi bi-lightbulb'></i>See how
            you compare to other 100 other applicants.{' '}
          </p>
        </Col>
        <Col xs={12} className=' py-1 mb-5'>
          <p className=' small d-flex align-items-center'>
            <i className=' fs-5 pe-1 text-secondary bi bi-tags'></i>
            {selectedJob.category}
          </p>
        </Col>
        <div>
          <div
            id='descriptionDiv'
            dangerouslySetInnerHTML={{ __html: obj.GlossaryDescription }}
          />
        </div>
      </Row>
    </Container>
  );
};

export default JobDescription;
