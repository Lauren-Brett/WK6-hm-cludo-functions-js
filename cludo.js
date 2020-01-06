//Episode 1
const scenario = {
  murderer: 'Miss Scarlet',
  room: 'Library',
  weapon: 'Rope'
};

const declareMurderer = function() {
  return `The murderer is ${scenario.murderer}.`;
}

const verdict = declareMurderer();
console.log(verdict);

//ANSWERE: Miss Scarlet, it is the only place the murderer has been defined, declareMurderer calls murderer which
//is saved in verdict, verdict is logged.



//Episode 2
const murderer = 'Professor Plum';

const changeMurderer = function() {
  murderer = 'Mrs. Peacock';
}

const declareMurderer = function() {
  return `The murderer is ${murderer}.`;
}

changeMurderer();
const verdict = declareMurderer();
console.log(verdict);

//ANSWERE: Proff Plum
//wrong, undefined because changeMurderer has been called but is already defined

//Episode 3
let murderer = 'Professor Plum';

const declareMurderer = function() {
  let murderer = 'Mrs. Peacock';
  return `The murderer is ${murderer}.`;
}

const firstVerdict = declareMurderer();
console.log('First Verdict: ', firstVerdict);

const secondVerdict = `The murderer is ${murderer}.`;
console.log('Second Verdict: ', secondVerdict);

//ANSWERE 1: Mrs. Peacock, because the murderer is defined within the scope of the const declareMurderer
//which is saved in firstVerdict, let can be changed
//ANSWERE 2: Mr Plum, because murderer is defined by let outside declareMurderer so the call from secondVerdict
//looks to this


//Episode 4
let suspectOne = 'Miss Scarlet';
let suspectTwo = 'Professor Plum';
let suspectThree = 'Mrs. Peacock';

const declareAllSuspects = function() {
  let suspectThree = 'Colonel Mustard';
  return `The suspects are ${suspectOne}, ${suspectTwo}, ${suspectThree}.`;
}

const suspects = declareAllSuspects();
console.log(suspects);
console.log(`Suspect three is ${suspectThree}.`);

//ANSWERE 1: Miss Scarlet, Prof Plum, Colonel Mustard. because suspects one and two are declared as let variable outside
//the const so can be called on, suspect 3 has been defined inside the const function so the funciton looks to that
//ANSWERE 2: Mrs Peacock. because its the only accessable one! because suspectThree in declareAllSuspects is only
//visible inside that function


//Episode 5
const scenario = {
  murderer: 'Miss Scarlet',
  room: 'Kitchen',
  weapon: 'Candle Stick'
};

const changeWeapon = function(newWeapon) {
  scenario.weapon = newWeapon;
}

const declareWeapon = function() {
  return `The weapon is the ${scenario.weapon}.`;
}

changeWeapon('Revolver');
const verdict = declareWeapon();
console.log(verdict);
//ANSWERE: Candle Stick
//wrong --- but i understand now having done the number 8 as to why, just didnt go through it well enough here

//Episode 6
let murderer = 'Colonel Mustard';

const changeMurderer = function() {
  murderer = 'Mr. Green';

  const plotTwist = function() {
    murderer = 'Mrs. White';
  }
  plotTwist();
}

const declareMurderer = function () {
  return `The murderer is ${murderer}.`;
}

changeMurderer();
const verdict = declareMurderer();
console.log(verdict);
//ANSWERE: Mrs White, because original let murderer can be changed, it is changed once in changeMurderer, then again in another
//deeper scope of plotTwist, plotTwist is then called to intatiate it, changeMurderer is called(which now has Mrs White as
//the murderer) before verdict, verdict called(through declareMurderer). Basically when changeMurderer is called it then hits plotTwist?

// Episode 7
let murderer = 'Professor Plum';

const changeMurderer = function() {
  murderer = 'Mr. Green';

  const plotTwist = function() {
    let murderer = 'Colonel Mustard';

    const unexpectedOutcome = function() {
      murderer = 'Miss Scarlet';
    }

    unexpectedOutcome();

  }
  plotTwist();
}

const declareMurderer = function() {
  return `The murderer is ${murderer}.`;
}

changeMurderer();
const verdict = declareMurderer();
console.log(verdict);
//ANSWERE: Mr GREEN, trying to explain this in words is not easy! because at changeMurderer it is reassigned globally,
//i understand it. because 'let murderer' in plotTwist is only changed within the scope of plotTwist, not changeMurderer

//Episode 8
const scenario = {
  murderer: 'Mrs. Peacock',
  room: 'Conservatory',
  weapon: 'Lead Pipe'
};

const changeScenario = function() {
  scenario.murderer = 'Mrs. Peacock';
  scenario.room = 'Dining Room';

  const plotTwist = function(room) {
    if (scenario.room === room) {
      scenario.murderer = 'Colonel Mustard';
    }

    const unexpectedOutcome = function(murderer) {
      if (scenario.murderer === murderer) {
        scenario.weapon = 'Candle Stick';
      }
    }

    unexpectedOutcome('Colonel Mustard');
  }

  plotTwist('Dining Room');
}

const declareWeapon = function() {
  return `The weapon is ${scenario.weapon}.`
}

changeScenario();
const verdict = declareWeapon();
console.log(verdict);
//ANSWERE: Candle Stick, all the conditionals pass true, so it gets to changing the weapon

//Episode 9
let murderer = 'Professor Plum';

if (murderer === 'Professor Plum') {
  let murderer = 'Mrs. Peacock';
}

const declareMurderer = function() {
  return `The murderer is ${murderer}.`;
}

const verdict = declareMurderer();
console.log(verdict);

//ANSWERE: Prof Plum, the if statement only changes the variable within its scope
