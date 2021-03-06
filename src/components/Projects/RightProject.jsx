import React, { useContext, useEffect, useState } from 'react';
import Fade from 'react-reveal/Fade';
import Tilt from 'react-tilt';
import { Col } from 'react-bootstrap';
import ProjectImg from '../Image/ProjectImg';
import PortfolioContext from '../../context/context';

const RightProject = ({}) => {
  const { rightprojects } = useContext(PortfolioContext);
  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);
  console.log(rightprojects);
  return (
    <>
      {rightprojects.map((rightprojects) => {
        const { title, info, info2, url, repo, img, id } = rightprojects;
        return (
          <>
            <Col lg={3} sm={12}>
              <Fade
                right={isDesktop}
                bottom={isMobile}
                duration={1000}
                delay={1000}
                distance="30px"
              >
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
                    <p>{info}</p>
                    <p className="mb-4">{info2}</p>
                  </div>
                </div>
              </Fade>
            </Col>
          </>
        );
      })}
    </>
  );
};
export default RightProject;
