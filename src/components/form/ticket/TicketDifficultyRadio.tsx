import { REGISTER_TYPE, ERROR_MESSAGE, CONFIG } from 'constants/';
import { TicketCreateRegister } from 'types';
import { LabelWrapper, LabelText, ErrorMessage } from 'components/containers';
import { RadioInput, RadioLabel, RadioGroup } from '../RadioComponent';

export function TicketDifficultyRadio({
  register,
  errors,
}: TicketCreateRegister) {
  return (
    <>
      <LabelWrapper>
        <LabelText>Difficulty:</LabelText>
        {errors.ticketDifficulty && (
          <ErrorMessage>{errors.ticketDifficulty.message}</ErrorMessage>
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
            />
            <label htmlFor={`difficulty${i + 1}`}>{i + 1}</label>
          </RadioLabel>
        ))}
      </RadioGroup>
    </>
  );
}
