import styled from 'styled-components';
import { Participant } from 'types';
import { Link } from 'react-router-dom';
import { MenuDots } from 'assets/icons';

interface MemberDataProps {
  memberData: Participant;
}

export function MemberCard({ memberData }: MemberDataProps) {
  const { email, nickname, thumbnail, role } = memberData;

  return (
    <Wrapper>
      <LeftWrapper>
        <Link to="/">
          <ImageLabel>
            <Image src={thumbnail} />
          </ImageLabel>
        </Link>
        <UserInfo>
          <span>{email}</span>
          <span>{nickname}</span>
        </UserInfo>
      </LeftWrapper>
      <MiddleWrapper>
        <span>{role}</span>
      </MiddleWrapper>
      <RightWrapper>
        <Button>
            <MenuDots size={20}/>
        </Button>
    </RightWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: grid;
  column-gap: 16px;
  grid-template-columns: 7fr 3fr 2fr;
  height: 60px;
  min-width: 0px;
  align-items: center;
`;

const LeftWrapper = styled.div`
  display: flex;
  flex: initial;
  flex-direction: row;
  -webkit-box-align: center;
  align-items: center;
  gap: 16px;
`;

const MiddleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  -webkit-box-flex: 1;
  flex-grow: 1;
  gap: 8px;
`;
const RightWrapper = styled.div`
  display: flex;
  flex: initial;
  flex-direction: row;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: end;
  justify-content: flex-end;
`;

const UserInfo = styled.div`
width: 220px;
  display: flex;
  flex: initial;
  flex-direction: column;
  gap: 4px;
`;

const ImageLabel = styled.div`
  width: 24px;
  height: 24px;
  background: rgba(0, 0, 0, 0.3);
  border-radius: 50%;
  :hover {
    cursor: pointer;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
`;

const Button = styled.button`
  background-color: unset;
`