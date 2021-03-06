/**
 * This file is auto-generated, by Emberate
 * (https://www.npmjs.org/package/emberate)
 *
 * DO NOT MODIFY
 */
'use strict';

var Ember = require('ember');
var App = require('./app');

App.Router = require('./router');


Ember.TEMPLATES['application'] = require('./pods/application/template.hbs');
App.TestInitializer = require('./initializers/test');
App.TestMixin = require('./mixins/test');
App.ObjectTransform = require('./transforms/object');
App.UserSerializer = require('./serializers/user');
App.UserAdapter = require('./adapters/user');
App.UserModel = require('./models/user');
App.XPlayerComponent = require('./components/x-player');
App.ApplicationController = require('./controllers/application');
App.UserIndexController = require('./controllers/user/index');
App.ApplicationRoute = require('./routes/application');
App.ApplicationView = require('./views/application');

module.exports = App;
