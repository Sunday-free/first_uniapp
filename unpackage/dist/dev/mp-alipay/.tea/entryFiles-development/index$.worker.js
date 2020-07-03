if(!self.__appxInited) {
self.__appxInited = 1;


require('./config$');


  var AFAppX = self.AFAppX.getAppContext
    ? self.AFAppX.getAppContext().AFAppX
    : self.AFAppX;
  self.getCurrentPages = AFAppX.getCurrentPages;
  self.getApp = AFAppX.getApp;
  self.Page = AFAppX.Page;
  self.App = AFAppX.App;
  self.my = AFAppX.bridge || AFAppX.abridge;
  self.abridge = self.my;
  self.Component = AFAppX.WorkerComponent || function(){};
  self.$global = AFAppX.$global;
  self.requirePlugin = AFAppX.requirePlugin;
          

if(AFAppX.registerApp) {
  AFAppX.registerApp({
    appJSON: appXAppJson,
  });
}



function success() {
require('../../app');
require('../../components/index/index-list?hash=ec7c5687c7f2ffa836caf3a93e877914426baff6');
require('../../components/index/swiper-tab-head?hash=ec7c5687c7f2ffa836caf3a93e877914426baff6');
require('../../pages/index/index?hash=5982ece748a2759c8fb88dc62a9e77422c293ee8');
require('../../pages/news/news?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/paper/paper?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/home/home?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
}
self.bootstrapApp ? self.bootstrapApp({ success }) : success();
}