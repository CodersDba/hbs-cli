// copied from hbs-cli template for using a custom helper with hbs-cli
// https://github.com/keithamus/hbs-cli
//
// Originally a similar helper module was used, but it has dependency problems now
// eslint-disable-next-line func-style, no-empty-function
const times = () => {};
function onceOrMany(HowManyRepeats) {
  if (!HowManyRepeats) {
    return 1;
  }
  HowManyRepeats = Number.parseInt(HowManyRepeats, 10);
  if (Number.isNaN(HowManyRepeats)) {
    return 1;
  }
  if (Number.isSafeInteger(HowManyRepeats) && HowManyRepeats > 0) {
    return HowManyRepeats;
  }
  return 1;
}

times.register = (Handlebars) =>
  Handlebars.registerHelper(
    'br',
    (HowManyRepeats) =>
      new Handlebars.SafeString('<br>'.repeat(onceOrMany(HowManyRepeats)))
  );

module.exports = times;
