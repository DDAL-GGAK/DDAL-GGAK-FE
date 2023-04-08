import { TaskWebp, TeamWebp } from 'assets/wepb';

export const preload = () => {
  const assets = [TaskWebp, TeamWebp];

  assets.forEach((v) => {
    const img = new Image();
    img.src = v;
  });
};
