//create the list of random animal facts that will be presented to the user when they press the button
var facts = []
facts[0] = 'Did you know the heart of a shrimp is located inside of its head?';
facts[1] = 'A slug has four noses. Imagine the smells!';
facts[2] = 'Elephants are the only animals in the world that lack the ability to jump.';
facts[3] = 'Did you know that it can take a sloth an entire two weeks to digest food?';
facts[4] = 'A dairy cow can provide up to 200,000 glasses of milk in its life.';
facts[5] = 'Due to their keen ability to fall out of trees, many orangutans have fractured bones.';
    

//create a way to pass the random facts back to the user
function newFact() {
    var randomFact = Math.floor(Math.random()*(facts.length));
    document.getElementById('animalDisplay').innerHTML = facts[randomFact];
}