import React, { useEffect, useState } from 'react';
import Fade from 'react-reveal/Fade';
import Tilt from 'react-tilt';
import { Col } from 'react-bootstrap';
import ProjectImg from '../Image/ProjectImg';

const RightProject = ({ miniprojects }) => {
  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const { title, info, info2, url, repo, img, id } = miniprojects;
  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);
  console.log(miniprojects);
  return (
    <>
      <Col lg={3} sm={12}>
        <Fade right={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
          <div className="project-wrapper__image">
            <a
              href={url || '#!'}
              target="_blank"
              aria-label="Project Link"
              rel="noopener noreferrer"
            >
              <Tilt
                options={{
                  reverse: false,
                  max: 8,
                  perspective: 1000,
                  scale: 1,
                  speed: 300,
                  transition: true,
                  axis: null,
                  reset: true,
                  easing: 'cubic-bezier(.03,.98,.52,.99)',
                }}
              >
                <div data-tilt className="thumbnail rounded">
                  <ProjectImg alt={title} filename={img} />
                </div>
              </Tilt>
            </a>
          </div>
        </Fade>
        <h3 className="project-wrapper__text-title"> {title || 'Project Title'}</h3>
        <a
          target="_blank"
          rel="noopener noreferrer"
          className="cta-btn cta-btn--hero"
          href={url || '#!'}
        >
          See Live
        </a>

        {repo && (
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="cta-btn text-color-main"
            href={repo}
          >
            Source Code
          </a>
        )}
      </Col>
      <Col lg={3} sm={12}>
        <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={500} distance="30px">
          <div className="project-wrapper__text">
            <div className="project-wrapper__text-content">
              <p>
                {info ||
                  'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi neque, ipsa animi maiores repellendu distinctioaperiam earum dolor voluptatum consequatur blanditiis inventore debitis fuga numquam voluptate architecto itaque molestiae.'}
              </p>
              <p className="mb-4">{info2 || ''}</p>
            </div>
          </div>
        </Fade>
      </Col>
    </>
  );
};

export default RightProject;
