import { TaskTitleInputProps } from 'types';
import { REGISTER_TYPE, CONFIG, ERROR_MESSAGE } from 'constants/';
import { TextInput } from 'components/containers';

export function TaskTitleInput({ register }: TaskTitleInputProps) {
  return (
    <TextInput
      type="text"
      placeholder="Task name"
      register={register(REGISTER_TYPE.TASK_TITLE, {
        required: ERROR_MESSAGE.TASK_TITLE.REQUIRED,
        maxLength: {
          value: CONFIG.TASK_TITLE.MAX_LENGTH,
          message: ERROR_MESSAGE.TASK_TITLE.MAX_LENGTH,
        },
      })}
    />
  );
}
