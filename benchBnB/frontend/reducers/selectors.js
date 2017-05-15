

export const allBenches = (benches) => {
  let keys = Object.keys(benches);
  return keys.map( key => benches[key] );
};
