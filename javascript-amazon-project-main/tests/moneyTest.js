import {formatCurrency} from '../scripts/utils/money.js';
  console.log('test suite: formatCurrency');
  console.log('convert cents to dollars');

if (formatCurrency(2029) === '$20.29') {
  console.log('formatCurrency test passed');
} else {
  console.error('formatCurrency test failed');
}   

console.log('works with 0');

if (formatCurrency(0) === '$0.00') {
  console.log('formatCurrency test passed');
} else {
  console.error('formatCurrency test failed');
}
console.log('rounds to nearest cent');
if (formatCurrency(2000.5) === '$20.01') {
  console.log('formatCurrency test passed');
} else {
  console.error('formatCurrency test failed');
}