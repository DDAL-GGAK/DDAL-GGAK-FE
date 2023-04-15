export const getColorByLebel = (difficulty: number) => {
  if (difficulty === 5) return 'red';
  if (difficulty === 4) return 'orange';
  if (difficulty === 3) return 'purple';
  if (difficulty === 2) return 'green';
  return 'white';
};
