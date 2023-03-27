import { Input } from './Input';

export default function EmailInput({ data }: any) {
  const { type, register, errorMessage } = data;

  return (
    <Input
      errorId={!!errorMessage}
      {...register('email', {
        required: 'is required',
        validate: {
          hasAlpha: (value: string) => {
            const hasAlpha = !!value.match(/[a-zA-Z]/g);

            return hasAlpha ? true : 'must be include alpha';
          },
          isEmail: (value: string) => {
            const isEmail = !!value.match(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g);

            return isEmail ? true : 'Is not Email Form';
          },
        },
      })}
      type="text"
      placeholder={type}
    />
  );
}
