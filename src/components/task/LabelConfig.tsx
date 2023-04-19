import styled from 'styled-components';
import { Title } from 'components/containers';
import { TagIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { LabelDataForm } from 'types';

export function LabelConfig({ labels, handleOpenModal }: any) {
  console.log(labels);

  return (
    <LabelList>
      <Title>
        <TagIcon style={{ width: 20 }} />
        Labels
      </Title>
      {labels?.map((label: LabelDataForm) => {
        const { labelId, labelTitle } = label;

        return (
          <Label key={labelId}>
            <LabelName>{labelTitle}</LabelName>
            <DeleteButton
              onClick={() => {
                handleOpenModal(label);
              }}
            >
              <XMarkIcon style={{ width: 20 }} />
            </DeleteButton>
          </Label>
        );
      })}
    </LabelList>
  );
}

const LabelList = styled.div`
  background: ${({ theme }) => theme.borderColor};
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  gap: 10px;
`;

const LabelName = styled.div`
  padding: 0.5rem 1rem;
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Label = styled.div`
  position: relative;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: ${({ theme }) => theme.transitionOption};
  background: ${({ theme }) => theme.background};
  :hover {
    cursor: pointer;
    background: rgba(0, 0, 0, 0.5);
  }
  padding: 10px 5px;
`;

const DeleteButton = styled.button`
  color: ${({ theme }) => theme.accentColor};
  background: ${({ theme }) => theme.background};
  height: 100%;
  border-radius: 0 6px 6px 0;
  font-size: 14px;
  transition: ${({ theme }) => theme.transitionOption};
  position: absolute;
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  right: 0;
  :hover {
    background: ${({ theme }) => theme.accentColor};
    color: #111;
    cursor: pointer;
  }
`;
