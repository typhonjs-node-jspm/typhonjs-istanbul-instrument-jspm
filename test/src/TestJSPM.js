import { assert }                from 'chai';
import fs                        from 'fs-extra';
import jspm                      from 'jspm';

import instrumentIstanbulSystem  from '../../src/instrumentIstanbulSystem.js';

// Set the package path to the local root where config.js is located.
jspm.setPackagePath(process.cwd());

// Create SystemJS Loader
const System = new jspm.Loader();

instrumentIstanbulSystem(System);

describe('JSPM', () =>
{
   let test;

   // Empty coverage directory
   before(() =>
   {
      fs.emptyDirSync('./coverage');
   });

   // Execute `run` method of `Test` class and verify result.
   it('esm', () =>
   {
      return System.import('test/fixture/src/esm/esm.js').then((module) =>
      {
         test = module['default'];

         const result = test.run();

         assert(result.test === 'testvalue');
         assert(result.test2 === 'testvalue2');
      });
   });

   // Execute `run` method of `Test` class and verify result.
   it('cjs', () =>
   {
      return System.import('test/fixture/src/cjs/cjs.js').then((module) =>
      {
         test = module;

         const result = test.run();

         assert(result.test === 'testvalue');
         assert(result.test2 === 'testvalue2');
      });
   });
});