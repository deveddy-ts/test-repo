import leftPad from 'left-pad';
export function pad(s) {
  return leftPad(s, 10, '-');
}