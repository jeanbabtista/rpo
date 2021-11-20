const log = (a, b, numTabs = 1) => {
  let tabs = '';
  for (let i = 0; i < numTabs; i++) tabs += '\t';

  console.log(`${a}:${tabs}${b}`);
};

module.exports = log;
