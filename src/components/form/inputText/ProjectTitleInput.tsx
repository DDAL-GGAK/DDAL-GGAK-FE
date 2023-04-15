import { ProjectTitleInputProps } from 'types';
import { REGISTER_TYPE, CONFIG, ERROR_MESSAGE } from 'constants/';
import { TextInput } from 'components/containers';

export function ProjectTitleInput({ register }: ProjectTitleInputProps) {
  return (
    <TextInput
      type="text"
      placeholder="Task Name"
      register={register(REGISTER_TYPE.PROJECT_TITLE, {
        required: ERROR_MESSAGE.PROJECT_TITLE.REQUIRED,
        maxLength: {
          value: CONFIG.PROJECT_TITLE.MAX_LENGTH,
          message: ERROR_MESSAGE.PROJECT_TITLE.MAX_LENGTH,
        },
      })}
    />
  );
}
