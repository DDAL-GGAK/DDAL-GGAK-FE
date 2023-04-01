import styled from 'styled-components';

export function ProjectMember() {
  return (
    <div>
      <Container>
        <TextL>Members</TextL>
        <TextS>Manage who has access to this project</TextS>
      </Container>
      <Hr />
      <Wrapper>
        <TextM>Invite Link</TextM>
        <TextS>
          Invite people to your workspace by sharing this private link. This
          message will only appear to people with permission to invite members.
          Resetting the link will allow you to generate a new invite link.
        </TextS>
        <ContentTop>
          copy link
          <Button>copy link</Button>
        </ContentTop>
      </Wrapper>
      <Hr />
      <Wrapper>
        <TextM>Manage members</TextM>
        <TextS>
          In this section, you can manage your members or send invitations by
          writing down the emails of the people you want to invite.
        </TextS>
        <ContentTop>
          <Button>add members</Button>
          <div>search</div>
        </ContentTop>

      </Wrapper>
    </div>
  );
}

const Container = styled.div``;

const TextL = styled.div`
  font-size: 25px;
  font-weight: 600;
`;

const TextM = styled.div`
  font-size: 17.5px;
  font-weight: 600;
`;
const TextS = styled.div`
  font-size: 12px;
  font-weight: 400;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Hr = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.borderColor};
  margin-top: 20px;
  margin-bottom: 20px;
`;

const Button = styled.button`
  display: block;
`;

const ContentTop = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
`

