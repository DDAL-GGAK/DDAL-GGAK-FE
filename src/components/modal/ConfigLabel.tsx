import styled from 'styled-components';
import { motion } from 'framer-motion';
import { DEFAULT_VARIANTS } from 'constants/';
import { ConfigLabelProps, LabelDataForm } from 'types';
import { Title } from 'components/containers';

export function ConfigLabel({ closeModal, labels }: ConfigLabelProps) {
  console.log(closeModal);
  console.log(labels);

  const dummyLabel = [
    {
      labelId: 1,
      labelTitle: 'labelTitle1',
    },
    {
      labelId: 2,
      labelTitle: 'labelTitle2',
    },
    {
      labelId: 3,
      labelTitle: 'labelTitle3',
    },
  ];
  return (
    <ModalContainer
      variants={DEFAULT_VARIANTS}
      initial="from"
      animate="to"
      exit="exit"
    >
      <Title>labelList</Title>
      <LabelList>
        {(labels[0] ? labels : dummyLabel)?.map((label: LabelDataForm) => {
          const { labelId, labelTitle } = label;

          return (
            <Label>
              {labelId} : {labelTitle}
            </Label>
          );
        })}
      </LabelList>
    </ModalContainer>
  );
}

const ModalContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 16px;
  background: ${({ theme }) => theme.background};
  border-radius: 4px;
  width: 300px;
  max-width: 100%;
`;

const LabelList = styled.div`
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 1rem;
`;

const Label = styled.div`
  padding: 0.5rem;
  background: rgba(0, 0, 0, 0.5);
`;
