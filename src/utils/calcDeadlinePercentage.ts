interface CalcDeadlinePercentageProps {
  expiredAt: string;
  createdAt: string;
}

export const calcDeadlinePercentage = ({
  expiredAt,
  createdAt,
}: CalcDeadlinePercentageProps) => {
  const currentDate = new Date();
  const expiredDate = new Date(expiredAt);
  const createdDate = new Date(createdAt);
  const remainingTime = expiredDate.getTime() - currentDate.getTime();
  const totalTime = expiredDate.getTime() - createdDate.getTime();
  const deadLinePercentage = (remainingTime / totalTime) * 100;

  return deadLinePercentage;
};
