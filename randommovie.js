//create the list of random movie facts for the user to be presented
var facts = []
facts[0] = 'Disney actually turned down making Back to the Future, claiming it to be too risque.'; 
facts[1] = 'The original Toy Story was the first film completely computer animated film.';
facts[2] = 'After the release of Ratatouille, pet rats became much more popular.'; 
facts[3] = 'Taxi Driver creator Paul Schrader claims to have written the film in two weeks.';
facts[4] = 'The oldest action series in history is the James Bond 007 films.';
facts[5] = 'The snow used in the Wizard of Oz film was actually asbestos.'; 
facts[6] = 'The infamous "Gonna need a bigger boat" line from Jaws was improvised.';
facts[7] = 'The Star Wars character Chewbacca was inspired by series creator George Lucas pet dog.';

//create a way to send the random facts back to the user when the button is pressed
function newFact() {
    var randomFact = Math.floor(Math.random()*(facts.length));
    document.getElementById('movieDisplay').innerHTML = facts[randomFact];
}