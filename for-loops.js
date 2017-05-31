// Increment by 10
for (var i = 5; i <= 120; i += 10) {
  console.log("Current value is " + i)
}

// Decrement by Division
for (var i = 4096; i >= 1; i /= 2) {
  console.log("Current value is " + i)
}

// Arryay iteration
var presidents = ["Washington", "Adams", "Jefferson", "Madison", "Monroe", "Quincy Adams", "Jackson", "Van Buren"]

for (var i = 0; i < presidents.length; i++) {
  console.log("President #" + (i + 1) + " was " + presidents[i]);
}


// Ant Species object iteration
var antSpecies = {
  argentine: {},
  army: {},
  bigHeaded: {},
  black: {},
  bull: {},
  carpenter: {},
  crazy: {},
  fire: {},
  glider: {},
  honeyPot: {},
  jackJumper: {}
};

for (var prop in antSpecies) {
  console.log(prop);
}







































