import React, { useContext } from 'react';

import { Container, Row } from 'react-bootstrap';
import PortfolioContext from '../../context/context';
import Title from '../Title/Title';

import LeftProject from './LeftProject';
import RightProject from './RightProject';

const MiniProjects = () => {
  const { miniprojects } = useContext(PortfolioContext);

  return (
    <section id="miniprojects">
      <Container>
        <div className="project-wrapper">
          <Title title="Projects" />
          {miniprojects.map((miniprojects) => {
            const { title, info, info2, url, repo, img, id } = miniprojects;
            return (
              <Row key={id}>
                <LeftProject miniprojects={miniprojects} />
                <RightProject miniprojects={miniprojects} />
              </Row>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default MiniProjects;
