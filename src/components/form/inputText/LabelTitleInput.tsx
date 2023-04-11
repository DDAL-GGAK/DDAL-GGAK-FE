import { LabelTitleInputProps } from 'types';
import { REGISTER_TYPE, ERROR_MESSAGE, CONFIG } from 'constants/';
import { TextInput } from 'components/containers';

export function LabelTitleInput({ register }: LabelTitleInputProps) {
  return (
    <TextInput
      placeholder="Team name"
      register={register(REGISTER_TYPE.LABEL_TITLE, {
        required: ERROR_MESSAGE.LABEL_TITLE.REQUIRED,
        maxLength: {
          value: CONFIG.LABEL_TITLE.MAX_LENGTH,
          message: ERROR_MESSAGE.LABEL_TITLE.MAX_LENGTH,
        },
      })}
    />
  );
}
