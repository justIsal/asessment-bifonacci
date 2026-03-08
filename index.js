const fibonacci = (n) => {
  if (n <= 1) return n;
  let curr = 0;
  let res = 1;

  for (let i = 2; i <= n; i++) {
    let temp = curr + res;
    curr = res;
    res = temp;
  }
  return res;
};
