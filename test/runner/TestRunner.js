import { assert } from 'chai';
import cp         from 'child_process';
import fs         from 'fs';

describe('Test Runner', () =>
{
   // Execute `npm run test-coverage` and verify coverage report results.
   it('npm run test-coverage', () =>
   {
      cp.execSync('npm run test-coverage', { stdio: 'inherit' });

      const reportEsmHTML = fs.readFileSync('./coverage/lcov-report/test/fixture/src/esm/esm.js.html', 'utf-8');

      // Verify that the report includes the source code
      assert(reportEsmHTML.includes("run() { return _.extend({ test: 'testvalue' }, { test2: 'testvalue2' }); }"));

      const reportCjsHTML = fs.readFileSync('./coverage/lcov-report/test/fixture/src/cjs/cjs.js.html', 'utf-8');

      // Verify that the report includes the source code
      assert(reportCjsHTML.includes("function() { return _.extend({ test: 'testvalue' }, { test2: 'testvalue2' });"));
   });
});