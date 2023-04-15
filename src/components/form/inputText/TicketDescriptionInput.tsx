import { LabelWrapper, LabelText, ErrorMessage } from 'components/containers';
import { REGISTER_TYPE, ERROR_MESSAGE } from 'constants/';
import { TicketCreateRegister } from 'types';

export function TicketDescriptionInput({
  register,
  errors,
}: TicketCreateRegister) {
  return (
    <>
      <LabelWrapper>
        <LabelText>Ticket Description:</LabelText>
        {errors.ticketDescription && (
          <ErrorMessage>{errors.ticketDescription.message}</ErrorMessage>
        )}
      </LabelWrapper>
      <textarea
        {...register(REGISTER_TYPE.TICKET_DESCRIPTION, {
          required: ERROR_MESSAGE.TICKET_DESCRIPTION.REQUIRED,
        })}
      />
    </>
  );
}
