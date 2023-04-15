import { JoinProjectInputProps } from 'types';
import { REGISTER_TYPE, ERROR_MESSAGE, CONFIG } from 'constants/';
import { TextInput } from 'components/containers';

export function JoinProjectInput({ register }: JoinProjectInputProps) {
  return (
    <TextInput
      placeholder="Enter with invite code"
      register={register(REGISTER_TYPE.INVITE_CODE, {
        required: ERROR_MESSAGE.INVITE_CODE.REQUIRED,
        maxLength: {
          value: CONFIG.INVITE_CODE.MAX_LENGTH,
          message: ERROR_MESSAGE.INVITE_CODE.MAX_LENGTH,
        },
      })}
    />
  );
}
