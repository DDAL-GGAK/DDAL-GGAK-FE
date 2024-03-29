import {
  LabelWrapper,
  LabelText,
  ErrorMessage,
  TextInput,
} from 'components/containers';
import { REGISTER_TYPE, ERROR_MESSAGE } from 'constants/';
import { TicketCreateRegister } from 'types';

export function TicketTitleInput({ register, errors }: TicketCreateRegister) {
  return (
    <>
      <LabelWrapper>
        <LabelText>Ticket Title:</LabelText>
        {errors.ticketTitle && (
          <ErrorMessage>{errors.ticketTitle.message}</ErrorMessage>
        )}
      </LabelWrapper>
      <TextInput
        type="text"
        register={{
          ...register(REGISTER_TYPE.TICKET_TITLE, {
            required: ERROR_MESSAGE.TICKET_TITLE.REQUIRED,
          }),
        }}
      />
    </>
  );
}
