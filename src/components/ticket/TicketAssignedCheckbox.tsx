import styled from 'styled-components';
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { DEFAULT_VARIANTS } from 'constants/';

export function AssignCheckBox() {
  const [checked, setChecked] = useState(false);

  const toggleCheck = (e: React.MouseEvent<HTMLInputElement>) => {
    e.stopPropagation();
    setChecked((prev) => !prev);
  };

  return (
    <CheckboxWrapper onClick={toggleCheck}>
      <AnimatePresence>
        {checked && (
          <CheckMark
            variants={DEFAULT_VARIANTS}
            initial="from"
            animate="to"
            exit="exit"
          />
        )}
      </AnimatePresence>
    </CheckboxWrapper>
  );
}

const CheckboxWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  border: 2px solid ${({ theme }) => theme.pointColor};
  border-radius: 4px;
  cursor: pointer;
`;

const CheckMark = styled(motion.div)`
  width: 12px;
  height: 12px;
  background-color: ${({ theme }) => theme.pointColor};
  border-radius: 2px;
`;
