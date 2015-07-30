function clearFields (){
	document.getElementById("atBats").value = 0;
	document.getElementById("newHits").value = 0;
	document.getElementById("todays-error").innerHTML = "";
	document.getElementById("ab-error").innerHTML = "";
	document.getElementById("ba").innerHTML = "<h1>" + ".000" + "</h1>";
	
}

function myAverage() {

    var atBats     = document.getElementById("atBats").value;
    var newHits    = document.getElementById("newHits").value;
    var abText;
    var newText;
	
    if (isNaN(atBats) || atBats < 1) {
        abText = "Off Day";
        document.getElementById("ab-error").innerHTML = abText;
        return false;
    } else {
	    abText = "Game ABs";
        document.getElementById("ab-error").innerHTML = abText;
    }   
    
    if (isNaN(newHits)) {
        newText = "Todays Hits must be a number";
        document.getElementById("todays-error").innerHTML = newText;
        return false;
    } else if (newHits === 0) {
	    newText = "Not Ted Williams!";
        document.getElementById("todays-error").innerHTML = newText;
    } else {
	    newText = "Way to go!";
        document.getElementById("todays-error").innerHTML = newText;
    }   
    //alert(newHits);
    var average = newHits / atBats * 1000; 
    //alert(average);
    if (isNaN(average)) {
	    document.getElementById("ba").innerHTML = "<h1>" + ".000" + "</h1>";
    } else {
	    document.getElementById("ba").innerHTML = "<h1>" + "." + average + "</h1>";
    }
    var seasonAtBats = (atBats); 
    document.getElementById("seasonAtBats").innerHTML = seasonAtBats;
    var seasonHits = (newHits); 
    document.getElementById("seasonHits").innerHTML = seasonHits;   
}

document.getElementById("btnAverage").addEventListener("click", function(){
    myAverage();
}); 

document.getElementById("clearFields").addEventListener("click", function(){
    clearFields();
});

var atBatsField    = document.getElementById("atBats");
var newHitsField   = document.getElementById("newHits");

atBatsField.onfocus = function() {
	if ( atBatsField.value === "0") {
		atBatsField.value = "";
	}
};

atBatsField.onblur = function() {
	var abText = "";
	if ( atBatsField.value === "") {
		atBatsField.value = "0";
	} 
	else if (isNaN(atBatsField.value)) {
        abText = "Really? A letter?";
        document.getElementById("ab-error").innerHTML = abText;	
        return false;	
	}
	else if ( atBatsField.value < 1) {
        abText = "At Bats cannot less than zero";
        document.getElementById("ab-error").innerHTML = abText;
        return false;	
        }	
};	


newHitsField.onfocus = function() {
	if ( newHitsField.value === "0") {
		newHitsField.value = "";
	}
};

newHitsField.onblur = function() {
	var abText = "";
	if ( newHitsField.value === "") {
		newHitsField.value = "0";
	} 
	else if (isNaN(newHitsField.value)) {
        abText = "Really? Not a number?";
        document.getElementById("todays-error").innerHTML = abText;	
        return false;	
	}
	else if ( newHitsField.value < 1) {
        abText = "New hits cannot less than zero";
        document.getElementById("todays-error").innerHTML = abText;	
        return false;	
	}
};



