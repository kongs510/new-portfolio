import React, { useContext } from 'react';
import { Container, Row } from 'react-bootstrap';
import Title from '../Title/Title';
import LeftProject from './LeftProject';
import RightProject from './RightProject';

const MiniProjects = () => {
  return (
    <section id="miniprojects">
      <Container>
        <div className="project-wrapper">
          <Title title="Personal Project" />
          <Row>
            <LeftProject />
            {/* <RightProject /> */}
          </Row>
        </div>
      </Container>
    </section>
  );
};

export default MiniProjects;
