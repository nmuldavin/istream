import chai, { expect } from 'chai';
import sinonChai from 'sinon-chai';

chai.use(sinonChai);
chai.should();

global.expect = expect;

/**
 * Throw any console errors so that jest catches them
 */
global.console.error = message => {
  throw new Error(message);
};
