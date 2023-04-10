import { NicknameInputProps } from 'types';
import { REGISTER_TYPE, CONFIG, ERROR_MESSAGE } from 'constants/';
import { TextInput } from 'components/containers';

export function UserNicknameInput({ register }: NicknameInputProps) {
  return (
    <TextInput
      type="text"
      placeholder="Enter your nickname"
      register={register(REGISTER_TYPE.NICKNAME, {
        required: ERROR_MESSAGE.NICKNAME.REQUIRED,
        maxLength: {
          value: CONFIG.NICKNAME.MAX_LENGTH,
          message: ERROR_MESSAGE.NICKNAME.MAX_LENGTH,
        },
      })}
    />
  );
}
