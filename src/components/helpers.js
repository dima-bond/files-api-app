export const dateFromString = (str) => {
  const separated = str.split(' ');
  const formated = separated[0].split('.').reverse().join('-').concat(['T'], separated[1]);

  return new Date(formated);
};

export const compareSize = (str) => {
  const separated = str.split(' ');
  const unit = separated[1].toLowerCase();

  switch (unit) {
    case 'mb':
      return +separated[0] * 1024;
    case 'gb':
      return +separated[0] / 1e-6;
    default:
      return +separated[0]
  }
};
