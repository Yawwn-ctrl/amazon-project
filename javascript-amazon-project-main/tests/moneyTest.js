import {formatCurrency} from '../scripts/utils/money.js';
  console.log('test suite: formatCurrency');
if (formatCurrency(2029) === '$20.29') {
  console.log('formatCurrency test passed');
} else {
  console.error('formatCurrency test failed');
}


if (formatCurrency(0) === '$0.00') {
  console.log('formatCurrency test passed');
} else {
  console.error('formatCurrency test failed');
}

if (formatCurrency(2000.5) === '$20.01') {
  console.log('formatCurrency test passed');
} else {
  console.error('formatCurrency test failed');
}