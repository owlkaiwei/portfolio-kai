'use strict';

var _expect = require('expect');

var _expect2 = _interopRequireDefault(_expect);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('useHistoryRestoreScroll', function () {
  it('exits correctly', function () {
    (0, _expect2.default)(true).toBe(true);
  });
  describe('intial history entry', function () {
    it('restores window scroll when going back to it');
    it('restores window scroll when going back from a different domain');
    it('restores different positions for different entries in the history of the same url');
  });

  describe('second history entry', function () {
    // we don't control location.state on the first entry but we do for the
    // rest of them, so we have to have some code to workaround that, thus, two
    // sets of tests for the same stuff since
    it('restores window scroll when going back');
    it('restores window scroll when going back from a different domain');
    it('restores different positions for different entries in the history of the same url');
  });
}); /*eslint-env mocha*/


describe('RestoreScroll', function () {
  it('restores scroll positions of scrollable elements');
});