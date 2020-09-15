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
facts[8] = 'Will Smith was originally offered the role of Neo in the Matrix over Keanu Reeves, but he turned it down.';
facts[9] = 'Actress Gal Gadot was five months pregnant while she filmed the DC film Wonder Woman.';
facts[10] = 'OJ Simpson was originally considered for The Terminator over Arnold Schwarzeneggar.';
facts[11] = 'Straight Outta Compton stars Ice Cubes son OShea Jackson Jr playing the role of his father.';
facts[12] = 'The AI name J.A.R.V.I.S. is also an acronym, meaning Just A Rather Very Intelligent System in the Iron Man films.';
facts[13] = 'NASA shows the film Armageddon during their training programs.';
facts[14] = 'Heath Ledger hid for six weeks in isolation to get into character while filming as the Joker in the Dark Knight.';
facts[15] = 'Keanu Reeves filmed 95% of his own fight scenes in John Wick: Chapter 2.';
facts[16] = 'During a break in filming the Terminator, Arnold Schwarnezenggar sat down to lunch with his full costume still on.';
facts[17] = 'In Star Trek, the sounds of the doors opening on the USS Enterprise actually came from a toilet flushing on a train.';
facts[18] = 'Will Smith unsuccessfully tried to adopt his canine costar, Abbey, after the filming of I Am Legend was complete.';
facts[19] = 'Henry Cavill refused digital trickery when shooting as Superman, instead choosing to develop his physique.';
facts[20] = 'Actor Tim Sizemore was battling drug addiction while he was filming Saving Private Ryan.';
facts[21] = 'Angelina Jolie claimed that her Maleficent outfit scared children.';
facts[22] = 'The cast of Fantastic Beasts and Where to Find Them had to learn how to properly use wands before filming.';
facts[23] = 'For authenticity, Sylvester Stallone encouraged Dolph Lundgren to actually punch him during the boxing scenes of Rocky IV.';
facts[24] = 'Natalie Portman paid for dance training out of pocket in preparation for her role in Black Swan.';
facts[25] = 'Brad Pitt and Edward Norton learned how to make their own soap for the filming of Fight Club.';
facts[26] = 'In Forrest Gump, Tom Hanks was not paid for the film. Instead, he was paid in percentage points and he made forty million dollars.';
facts[27] = 'Kate Winslet decided to flash Leonardo DiCaprio the first time they met after learning she had to be naked in front of him for the film Titanic.';
facts[28] = 'The sound the Velociraptors made Jurassic Park is the same sound tortoises make when having sex. ; 

//create a way to send the random facts back to the user when the button is pressed
function newFact() {
    var randomFact = Math.floor(Math.random()*(facts.length));
    document.getElementById('movieDisplay').innerHTML = facts[randomFact];
}
