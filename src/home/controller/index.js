'use strict';

import Base from './base.js';

export default class extends Base {
    /**
    * index action
    * @return {Promise} []
    */
    indexAction(){
        //auto render template file index_index.html
        return this.display();
    }

    aniAction(){
        //auto render template file index_index.html
        return this.display();
    }

    successAction(){
        //auto render template file index_index.html
        return this.display();
    }
}