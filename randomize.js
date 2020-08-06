//create the entire database of facts from every other category, update as needed
var facts = []
facts[1] = 'Can you believe human babies have around 100 more bones than adults?';
facts[2] = 'A whopping 20 percent of oxygen on Earth is consumed by the Amazon rainforest.';
facts[3] = 'There is enough DNA in the human body to make 17 trips to Pluto and back.';
facts[4] = 'During the summertime, the Eiffel Tower can actually be 15cm taller.';
facts[5] = 'Did you know that the heart of a slug is located inside of its head?';
facts[6] = 'The Star Wars character Chewbacca was inspired by series creator George Lucas pet dog.';
facts[7] = 'Due to their keen ablility to fall out of trees, many organutans have fractured bones.';
    
    
//create a way to send the facts back to the user
function newFact() {
    var randomFact = Math.floor(Math.random()*(facts.length));
    document.getElementById('randomDisplay').innerHTML = facts[randomFact];
}