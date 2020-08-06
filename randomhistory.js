//create the list of random history facts
var facts = []
facts[1] = 'Paul Revere never actually shouted the infamous "The British are coming!" line.';
facts[2] = 'For a time, women were actually banned from smoking in public.';
facts[3] = 'Up to 600,000 people perceived as witches were burned at the stake throughout midieval times.';
facts[4] = 'Until the mid-1800s, dentures were made from the teeth of dead soldiers.';
facts[5] = 'The Britons of the Ice Age were known for using human skulls as drinking mugs.';
facts[6] = 'In ancient Rome, it was not uncommon to see people using human urine as mouthwash.';
facts[7] = 'In the Midieval Ages, animals were sometimes put on trial, and often sentenced to death.';
facts[8] = 'Famed President Abraham Lincoln and evolutionist Charles Darwin were both born on Feb. 12, 1809.';
    
    
//create a way to send the facts back to the user
function newFact() {
    var randomFact = Math.floor(Math.random()*(facts.length));
    document.getElementById('historyDisplay').innerHTML = facts[randomFact];
}