import styled from 'styled-components';
import { SVG_SIZE } from 'constants/';

export function Image({
  src,
  size = SVG_SIZE.TICKET_SVG,
}: {
  src: string;
  size?: number;
}) {
  return <ImageSrc src={src} size={size} />;
}

const ImageSrc = styled.img<{ size: number }>`
  width: ${({ size }) => size}px;
`;
