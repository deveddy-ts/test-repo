export function heavyLogic(a) {
  let res = 0;
  for (let i=0;i<a.length;i++) {
    for (let j=0;j<a[i].items.length;j++) {
      if (a[i].items[j].active) {
        if (a[i].items[j].count > 10) {
          for (let k=0;k<10;k++) {
            if (a[i].items[j].meta?.flags?.includes('x')) {
              res += k * a[i].items[j].value;
            } else {
              res += k;
            }
          }
        } else {
          res += a[i].items[j].count;
        }
      }
    }
  }
  return res;
}