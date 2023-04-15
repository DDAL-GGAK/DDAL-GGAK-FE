import styled from 'styled-components';
import { UseFormRegister } from 'react-hook-form';
import { REGISTER_TYPE, ERROR_MESSAGE, CONFIG } from 'constants/';

interface TicketScoreRadioProps {
  register: UseFormRegister<any>;
}

export function TicketScoreRadio({ register }: TicketScoreRadioProps) {
  return (
    <RadioGroup>
      {Array.from({ length: CONFIG.TICKET_PRIORITY.LENGTH }, (_, i) => (
        <RadioLabel key={`priority${i + 1}`}>
          <RadioInput
            type="radio"
            id={`priority${i + 1}`}
            value={i + 1}
            {...register(REGISTER_TYPE.TICKET_SCORE, {
              required: ERROR_MESSAGE.TICKET_PRIORITY.REQUIRED,
            })}
          />
          <label htmlFor={`priority${i + 1}`}>{i + 1}</label>
        </RadioLabel>
      ))}
    </RadioGroup>
  );
}

const RadioGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const RadioLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 4px;
  color: ${({ theme }) => theme.color};
  font-size: 14px;
`;

const RadioInput = styled.input`
  appearance: none;
  width: 16px;
  height: 16px;
  background-color: ${({ theme }) => theme.transparentBackground};
  border: 1px solid ${({ theme }) => theme.color};
  border-radius: 50%;
  outline: none;

  &:checked {
    background-color: ${({ theme }) => theme.pointColor};
    border-color: ${({ theme }) => theme.pointColor};
  }

  &:checked::after {
    content: '';
    display: block;
    width: 8px;
    height: 8px;
    background-color: ${({ theme }) => theme.background};
    border-radius: 50%;
    position: relative;
    left: 3px;
    top: 3px;
  }
`;
