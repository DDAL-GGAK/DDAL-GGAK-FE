import styled from 'styled-components';
import { Participant } from 'types';
import { MenuDots } from 'assets/icons';
import { ContentText, LabelText } from 'components/containers';

interface MemberDataProps {
  memberData: Participant;
}

export function MemberCard({ memberData }: MemberDataProps) {
  const { email, nickname, thumbnail, role } = memberData;

  return (
    <Wrapper>
      <LeftWrapper>
        <ImageLabel>
          <Image src={thumbnail} />
        </ImageLabel>
        <UserInfo>
          <LabelText>{nickname}</LabelText>
          <ContentText>{email}</ContentText>
        </UserInfo>
      </LeftWrapper>
      <MiddleWrapper>
        <span>{role}</span>
      </MiddleWrapper>
      <RightWrapper>
        <Button>
          <MenuDots size={20} />
        </Button>
      </RightWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  background: ${({ theme }) => theme.borderColor};
  padding: 0.5rem 1rem;
  border-radius: 5px;
`;

const LeftWrapper = styled.div`
  display: flex;
  flex: initial;
  flex-direction: row;
  align-items: center;
  gap: 16px;
`;

const MiddleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-grow: 1;
  gap: 8px;
`;

const RightWrapper = styled.div`
  display: flex;
  flex: initial;
  flex-direction: row;
  align-items: center;
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
  width: 36px;
  height: 36px;
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
`;
