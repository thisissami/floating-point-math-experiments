const { add, create, all, bignumber } = require('mathjs');

const testOutput = (type, var1, var2, result) => {
  console.log(`Adding ${var1} to ${var2} using ${type}:\n`);
  console.log(`${result}\n\n`);
};

const v1 = 0.1;
const v2 = 0.2;

testOutput('normal javascript', v1, v2, v1 + v2);
testOutput('mathjs no configuration', v1, v2, add(v1, v2));
testOutput('mathjs no configuration, v1 as bignumber', v1, v2, add(bignumber(v1), v2));

const precision = 8;
const config = {
  number: 'BigNumber',
  precision
};

const math = create(all, config);

testOutput(`mathjs with bignumber config precision ${precision} using add`, v1, v2, math.add(v1, v2));
testOutput(`mathjs with bignumber config precision ${precision} using eval`, v1, v2, math.evaluate(`${v1}+${v2}`));