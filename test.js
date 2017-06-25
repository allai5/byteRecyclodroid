const Clarifai = require('clarifai');
var app = new Clarifai.App(
  'qgD-rkVrruBdy4uR_t12c0gYBZNs2HT3em7N_Wyt',
  'enM6B5weFHksA89hQ6GERzkbfpatbwl9D8kXizue'
);

// predict the contents of an image by passing in a url

app.models.predict(Clarifai.GENERAL_MODEL, 'https://sha.org/bottle/Body/bodyshapes.jpg').then(
  function(response) {
    var data = JSON.stringify(response);
	 var n = false;
	 if (data.includes("ljksadf")) {
		 n = true;
	 }
	 console.log(n);
  },
  function(err) {
    console.error(err);
  }
);
