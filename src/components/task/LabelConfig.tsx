import styled from 'styled-components';
import { BorderWrapper, ListCard, Title } from 'components/containers';
import { TagIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { LabelDataForm } from 'types';

interface LabelConfigProps {
  labels: LabelDataForm[];
  handleOpenModal: (label: LabelDataForm) => void;
}

export function LabelConfig({ labels, handleOpenModal }: LabelConfigProps) {
  return (
    <>
      <Title>
        <TagIcon style={{ width: 20 }} />
        Labels
      </Title>
      <ListWrapper>
        {labels?.map((label: LabelDataForm) => {
          const { labelId, labelTitle } = label;

          return (
            <ListCard key={labelId}>
              <LabelName>{labelTitle}</LabelName>
              <RightWrapper>
                <DeleteButton
                  onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                    e.stopPropagation();
                    handleOpenModal(label);
                  }}
                >
                  <XMarkIcon style={{ width: 20 }} />
                </DeleteButton>
              </RightWrapper>
            </ListCard>
          );
        })}
      </ListWrapper>
    </>
  );
}

const ListWrapper = styled(BorderWrapper)`
  max-height: 40vh;
  overflow-y: auto;
`;

const LabelName = styled.div`
  padding: 0.5rem 1rem;
  display: flex;
  align-items: center;
  gap: 10px;
  font-weight: 600;
  font-size: 1.125rem;
`;

const DeleteButton = styled.button`
  color: ${({ theme }) => theme.color};
  background: transparent;
  font-size: 14px;
  transition: ${({ theme }) => theme.transitionOption};
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  :hover {
    color: ${({ theme }) => theme.accentColor};
    cursor: pointer;
  }
`;

const RightWrapper = styled.div``;
