import React, { useContext, useEffect, useState } from 'react';
import Fade from 'react-reveal/Fade';
import Tilt from 'react-tilt';
import { Col } from 'react-bootstrap';
import ProjectImg from '../Image/ProjectImg';
import PortfolioContext from '../../context/context';

const LeftProject = () => {
  const { leftprojects } = useContext(PortfolioContext);
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
  console.log(leftprojects);
  return (
    <>
      {leftprojects.map((leftprojects) => {
        const {
          title,
          introduction,
          info,
          info1,
          info2,
          info3,
          info4,
          info5,
          info6,
          info7,
          info8,
          url,
          repo,
          repo1,
          img,
          id,
        } = leftprojects;
        return (
          <>
            <Col lg={3} sm={12} className="project-layout">
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

              {url && (
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cta-btn cta-btn--hero"
                  href={url || '#!'}
                >
                  See Live
                </a>
              )}
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
              {repo1 && (
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cta-btn text-color-main"
                  href={repo1}
                >
                  Source Code
                </a>
              )}
            </Col>
            <Col lg={3} sm={12}>
              <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={500} distance="30px">
                <div className="project-wrapper__text">
                  <div className="project-wrapper__text-content">
                    <strong>{introduction}</strong>
                    <hr />
                    <div>{info || ''}</div>
                    <div>{info1 || ''}</div>
                    <div>{info2 || ''}</div>
                    <div>{info3 || ''}</div>
                    <div>{info4 || ''}</div>
                    <div>{info5 || ''}</div>
                    <div>{info6 || ''}</div>
                    <div>{info7 || ''}</div>
                    <div>{info8 || ''}</div>
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

export default LeftProject;
