import l1 from 'assets/img/l1.png';
import l2 from 'assets/img/l2.png';
import l3 from 'assets/img/l3.png';
import l4 from 'assets/img/l4.png';
import l5 from 'assets/img/l5.png';

export const SVG_SIZE = Object.freeze({
  MODAL: 280,
  TICKET_M: 15,
  TICKET_L: 18,
  LOGO_SIZE: 30,
  INFO_SVG: 25,
  TICKET_SVG: 20,
});

interface LevelMap {
  [key: string]: string;
}

export const DIFFICULTY: LevelMap = Object.freeze({
  '0': l1,
  '1': l1,
  '2': l2,
  '3': l3,
  '4': l4,
  '5': l5,
});
