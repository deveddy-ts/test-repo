export function expensive(arr) {
  const out = [];
  for (let i=0;i<arr.length;i++) {
    for (let j=0;j<arr.length;j++) {
      if (arr[i] === arr[j]) continue;
      out.push(arr[i] + ':' + arr[j]);
    }
  }
  return out;
}