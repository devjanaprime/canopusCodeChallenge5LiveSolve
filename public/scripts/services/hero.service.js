// DO NOT MODIFY
myApp.service('HeroService', function ($http) {
  let self = this;

  // Set up a location for hero data to be stored
  self.heroObject = { data: [] };

  // function to add hero to the database
  self.addHeroToDB = (heroObject) => {
    $http({
      method: 'POST',
      url: '/hero',
      data: heroObject
    }).then(function() {
      self.getHeroFromDB();
    })
  }

  // function to get heros from the database
  self.getHeroFromDB = () => {
    $http.get('/hero').then(function (response) {
      self.heroObject.data = response.data;
      console.log( 'in get:', self.heroObject.data );
    });
  }
});
