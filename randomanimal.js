//create the list of random animal facts that will be presented to the user when they press the button
var facts = []
facts[0] = 'Did you know the heart of a shrimp is located inside of its head?';
facts[1] = 'A slug has four noses. Imagine the smells!';
facts[2] = 'Elephants are the only animals in the world that lack the ability to jump.';
facts[3] = 'Did you know that it can take a sloth an entire two weeks to digest food?';
facts[4] = 'A dairy cow can provide up to 200,000 glasses of milk in its life.';
facts[5] = 'Due to their keen ability to fall out of trees, many orangutans have fractured bones.';
facts[6] = 'Did you know that luna moths lack mouths or stomachs, and therefore cannot eat?';
facts[7] = 'Gorillas can actually catch human illnesses, like the common cold.';
facts[8] = 'Half of all the pigs in the world are kept by Chinese farmers.';
facts[9] = 'Dogs have better eyesight than humans, though much less colorful!'; 
facts[10] = 'Deer do not have gallbladders.';
facts[11] = 'There is usually an average of at least 50,000 spiders per acre in woodland areas.';
facts[12] = 'The bat is the only mammal on the planet with the ability to fly.';
facts[13] = 'A tarantula can survive for up to two years with no food.';
facts[14] = 'For every human on the planet, there are at least one million ants.';
facts[15] = 'The average fox weighs around 14 pounds.'; 
facts[16] = 'Alligators can live anywhere from 30 to 50 years!';
facts[17] = 'An elephant tooth can weigh up to nine pounds!';
facts[18] = 'Houseflies hum in the key of F.';
facts[19] = 'Like deer, male rabbits are known as bucks, while their female counterparts are known as does.';
facts[20] = 'Did you know that ants never sleep, and they also possess no lungs?';
facts[21] = 'A group of owls is known as a parliament.';
facts[22] = 'The seeds of pears and apples contain arsenic, which can be toxic to dogs.';
facts[23] = 'The odor of a skunk can be smelled by a human up to one mile away!';
facts[24] = 'At this point in history, cats have lived with humans for only 7000 years.';
facts[25] = 'Baby horses are able to walk and run merely hours after their birth.';

//create a way to pass the random facts back to the user
function newFact() {
    var randomFact = Math.floor(Math.random()*(facts.length));
    document.getElementById('animalDisplay').innerHTML = facts[randomFact];
}
