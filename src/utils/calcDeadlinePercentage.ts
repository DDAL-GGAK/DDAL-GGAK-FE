interface CalcDeadlinePercentageProps {
  expiredAt: string;
  createAt: string;
}

export const calcDeadlinePercentage = ({
  expiredAt,
  createAt,
}: CalcDeadlinePercentageProps) => {
  const currentDate = new Date();
  const expiredDate = new Date(expiredAt);
  const createdDate = new Date(createAt);
  const remainingTime = expiredDate.getTime() - currentDate.getTime();
  const totalTime = expiredDate.getTime() - createdDate.getTime();
  const deadLinePercentage = (remainingTime / totalTime) * 100;

  return deadLinePercentage;
};
