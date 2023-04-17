import { LabelWrapper, LabelText, ErrorMessage } from 'components/containers';
import { REGISTER_TYPE, ERROR_MESSAGE } from 'constants/';
import styled from 'styled-components';
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
      <Textarea
        {...register(REGISTER_TYPE.TICKET_DESCRIPTION, {
          required: ERROR_MESSAGE.TICKET_DESCRIPTION.REQUIRED,
        })}
      />
    </>
  );
}

const Textarea = styled.textarea`
  border: none;
  border-radius: 3px;
  max-height: 100px;
  min-height: 100px;
  max-width: 514px;
  min-width: 514px;

  border: none;
  outline: none;

  :focus {
    border: none;
    outline: none;
  }
`;
