export function getColorByDeadline(expiredAt: string) {
  const currentTime = new Date();
  const deadline = new Date(expiredAt);
  const totalTime = deadline.getTime() - currentTime.getTime();
  const oneDay = 24 * 60 * 60 * 1000;

  if (totalTime < oneDay) return 'red';
  if (totalTime < oneDay * 3) return 'orange';
  return 'green';
}
