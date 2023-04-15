import { REGISTER_TYPE, ERROR_MESSAGE, CONFIG } from 'constants/';
import { TicketCreateRegister } from 'types';
import { LabelWrapper, LabelText, ErrorMessage } from 'components/containers';
import { RadioInput, RadioLabel, RadioGroup } from '../RadioComponent';

export function TicketPriorityRadio({
  register,
  errors,
}: TicketCreateRegister) {
  return (
    <>
      <LabelWrapper>
        <LabelText>Priority:</LabelText>
        {errors.priority && (
          <ErrorMessage>{errors.priority.message}</ErrorMessage>
        )}
      </LabelWrapper>
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
    </>
  );
}
