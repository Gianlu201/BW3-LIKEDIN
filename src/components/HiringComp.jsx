import { Container } from 'react-bootstrap';
//import ProfileFooter from "./ProfileFooter";

const HiringComp = () => {
  return (
    <>
      <Container
        fluid
        className=' bg-white mt-2 my-md-2 rounded-3 px-0 d-flex justify-content-center bordinoGames'
        style={{ cursor: 'pointer' }}
      >
        <img
          src='https://media.licdn.com/media/AAYQAgTPAAgAAQAAAAAAADVuOvKzTF-3RD6j-qFPqhubBQ.png'
          alt=''
          className='rounded-md-3 hiring'
        />
      </Container>
    </>
  );
};

export default HiringComp;
