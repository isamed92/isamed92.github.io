import {
  AboutMe,
  ContactMe,
  Education,
  Experience,
  Skills,
  Space,
} from '../components';
import { Message } from '../helpers';
import { Col, Container, Row } from 'react-bootstrap';

export const HomeScreen = () => {
  return (
    <div className='app_body'>
      <Space height={100} />
      <h3 className='text-center mt-2'>
        <span className='bold me-2'>
          <Message id='seniority' />
        </span>
        <Message id='currentProfile' />
      </h3>

      <Container className='mt-3'>
        <Row>
          <Col xs={12} lg={4} className='pt-4'>
            <AboutMe />
          </Col>
          <Col xs={12} lg={3} className='pt-4'>
            <ContactMe />
          </Col>
          <Col xs={12} lg={5} className='pt-4'>
            <Skills />
          </Col>
        </Row>
      </Container>
      <Space height={50} />
      <Container className='p-2'>
        <Row>
          <Col xs={12}>
            <Experience />
          </Col>
        </Row>
      </Container>
      <Container className='p-2'>
        <Row>
          <Col xs={12} lg={3}>
            <Education />
          </Col>
        </Row>
      </Container>

      <Space height={300} />
    </div>
  );
};
