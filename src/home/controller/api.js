'use strict';

import Base from './base.js';
import jsonfile from 'jsonfile';
import path from 'path';

export default class extends Base {
  /**
   * index action
   * @return {Promise} []
   */
  indexAction(){
      //auto render template file index_index.html
      var jsonpath = path.join("/Users/lbc/Sites/zhilizhili-project/zhilizhili-mockdata", "mock.json");
      return this.json(jsonfile.readFileSync(jsonpath));
  }
}