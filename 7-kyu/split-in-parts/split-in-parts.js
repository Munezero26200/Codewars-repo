const splitInParts = (s, partLength) => {
  let chunks = [];
  for (let i = 0; i < s.length; i += partLength) {
    let slicing = s.slice(i, i + partLength);
    chunks.push(slicing);
  }
  return chunks.join(" ");
};
​