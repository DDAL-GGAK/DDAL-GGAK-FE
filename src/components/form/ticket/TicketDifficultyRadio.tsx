import styled from 'styled-components';
import { REGISTER_TYPE, ERROR_MESSAGE, CONFIG } from 'constants/';
import { TicketCreateRegister } from 'types';
import { LabelWrapper, LabelText, ErrorMessage } from 'components/containers';

export function TicketDifficultyRadio({
  register,
  errors,
}: TicketCreateRegister) {
  return (
    <>
      <LabelWrapper>
        <LabelText>Difficulty:</LabelText>
        {errors.difficulty && (
          <ErrorMessage>{errors.difficulty.message}</ErrorMessage>
        )}
      </LabelWrapper>
      <RadioGroup>
        {Array.from({ length: CONFIG.TICKET_DIFFICULTY.LENGTH }, (_, i) => (
          <RadioLabel key={`difficulty${i + 1}`}>
            <RadioInput
              type="radio"
              id={`difficulty${i + 1}`}
              value={i + 1}
              {...register(REGISTER_TYPE.TICKET_DIFFICULTY, {
                required: ERROR_MESSAGE.TICKET_DIFFICULTY.REQUIRED,
              })}
              name={REGISTER_TYPE.TICKET_DIFFICULTY}
            />
            <label htmlFor={`difficulty${i + 1}`}>{i + 1}</label>
          </RadioLabel>
        ))}
      </RadioGroup>
    </>
  );
}

export const RadioGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const RadioLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 4px;
  color: ${({ theme }) => theme.color};
  font-size: 14px;
`;

export const RadioInput = styled.input`
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
