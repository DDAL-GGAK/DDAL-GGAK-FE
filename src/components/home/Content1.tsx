import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import mainVideo from 'assets/video/task.mp4';

const textList = ['tickets', 'tasks', 'projects'];

export function Content1() {
  const [textIndex, setTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    const timer = setTimeout(
      () => {
        const currentText = textList[textIndex];
        const currentLength = displayText.length;

        if (isTyping) {
          if (currentLength < currentText.length) {
            setDisplayText(currentText.slice(0, currentLength + 1));
          } else {
            setIsTyping(false);
          }
        } else if (currentLength > 0) {
          setDisplayText(currentText.slice(0, currentLength - 1));
        } else {
          setIsTyping(true);
          setTextIndex((prevIndex) => (prevIndex + 1) % textList.length);
        }
      },
      isTyping ? 100 : 100
    );

    return () => clearTimeout(timer);
  }, [displayText, isTyping, textIndex]);

  return (
    <Wrapper id="content_1">
      <VideoContainer>
        <Video autoPlay loop muted>
          <source src={mainVideo} type="video/mp4" />
        </Video>
        <Overlay />
        <Content>
          <Title>
            Welcome to <Point>DDAL-GGAK</Point>
          </Title>
          <SubTitle>
            Manage your <Point>{displayText}</Point> efficiently
          </SubTitle>
        </Content>
      </VideoContainer>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const VideoContainer = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  overflow: hidden;
`;

const Video = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.6) 0%,
    rgba(0, 0, 0, 0.6) 100%
  );
  mix-blend-mode: multiply;
`;

const Content = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: #f3f3f3;
  padding: 5rem;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(3px);
`;

const Title = styled.div`
  font-weight: 600;
  font-size: 3rem;
  margin-bottom: 1rem;
`;

const SubTitle = styled.div`
  font-size: 1.5rem;
`;

const Point = styled.span`
  font-weight: 600;
  color: ${({ theme }) => theme.pointColor};
`;
