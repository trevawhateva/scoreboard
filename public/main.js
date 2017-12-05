var config = {
  apiKey: "",
  authDomain: "",
  databaseURL: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: ""
};
firebase.initializeApp(config);

var firebaseRef = firebase.database().ref();
var competition = [];

firebaseRef.on('value', function(snapshot){
    competition.push(snapshot.val());
    console.log(competition[0].results.valueRanges);

    if (competition.length > 0) {
      //ADVANCED MALE
      for (var i = 0; i < competition[0].results.valueRanges[0].values.length; i++) {
        document.getElementById('adv-name-' + (i+1)).innerHTML = competition[0].results.valueRanges[0].values[i];
        document.getElementById('adv-score-' + (i+1)).innerHTML = competition[0].results.valueRanges[1].values[i];
      }

      //ADVANCED FEMALE
      for (var i = 0; i < 2; i++) {
        document.getElementById('adv-f-name-' + (i+1)).innerHTML = competition[0].results.valueRanges[2].values[i];
        document.getElementById('adv-f-score-' + (i+1)).innerHTML = competition[0].results.valueRanges[3].values[i];
      }

      //INTERMEDIATE MALE
      for (var i = 0; i < 11; i++) {
        document.getElementById('int-name-' + (i+1)).innerHTML = competition[0].results.valueRanges[4].values[i];
        document.getElementById('int-score-' + (i+1)).innerHTML = competition[0].results.valueRanges[5].values[i];
      }

      //INTERMEDIATE FEMALE
      for (var i = 0; i < 4; i++) {
        document.getElementById('int-f-name-' + (i+1)).innerHTML = competition[0].results.valueRanges[6].values[i];
        document.getElementById('int-f-score-' + (i+1)).innerHTML = competition[0].results.valueRanges[7].values[i];
      }

      //BEGINNER MALE
      for (var i = 0; i < 2; i++) {
        document.getElementById('beg-name-' + (i+1)).innerHTML = competition[0].results.valueRanges[8].values[i];
        document.getElementById('beg-score-' + (i+1)).innerHTML = competition[0].results.valueRanges[9].values[i];
      }

      //BEGINNER FEMALE
      for (var i = 0; i < 8; i++) {
        document.getElementById('beg-f-name-' + (i+1)).innerHTML = competition[0].results.valueRanges[10].values[i];
        document.getElementById('beg-f-score-' + (i+1)).innerHTML = competition[0].results.valueRanges[11].values[i];
      }
    }
});
