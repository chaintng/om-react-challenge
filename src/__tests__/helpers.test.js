import { summaryDonations, numberWithCommas } from '../helpers';

describe('helpers', function() {
  test('`summaryDonations` should calculate donations correctly', function() {
    expect(summaryDonations([1, 2, 3, 4])).toEqual(10);
  });

  test('`numberWithCommas` should display comma correctly', function() {
    expect(numberWithCommas(100)).toEqual('100');
    expect(numberWithCommas(1000)).toEqual('1,000');
    expect(numberWithCommas(1000000)).toEqual('1,000,000');
  });
});
