myApp.controller('HeroController', function (HeroService) {
  var vm = this;

  // TODO: Bind the something on the view model to the hero data in ther service
  // HINT: check out the ng-repeat in index.html: ng-repeat="hero in hc.heroObject.data
  vm.heroObject = HeroService.heroObject;

  // TODO: Add code here to get heros on controller load
  // function to add hero
  vm.addHero = function () {
    var objectToSend = {
      alias: vm.alias,
      city: vm.city,
      power: vm.power
    }

    console.log('hero object from dom ->', objectToSend);
    // TODO: Add code here, using the service to add data to hero db
    HeroService.addHeroToDB( objectToSend );
  }

  HeroService.getHeroFromDB()
});
