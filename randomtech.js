//create the list of random technology facts
var facts = []
facts[1] = '40 percent of the worlds population uses the internet today, an amazing 3.8 billion people!';
facts[2] = 'As of the year 2020, over 8 billion devices around the world are conected to the internet.';
facts[3] = 'Did you know that there are over 3.5 billion Google searches every single day?';
facts[4] = 'Every single minute, over 24 hours of footage is uploaded onto YouTube, the worlds largest video sharing site!';
facts[5] = 'More than 570 new websites are added to the internet every minute of the day.';
facts[6] = 'Senior citizens who surf the internet regularly are known as "Silver Surfers.';
facts[7] = 'The very first "smartphone" as we know it today was the first iPhone, introduced by Apple in 2007.';
facts[8] = 'Googles Android mobile operating system is now the most popular OS on the planet.';
facts[9] = 'Over the next decade, we could see major advancements in quantum computing.';
facts[10] = 'The wildly popular Candy Crush mobile game earns upwards of $1.7 million in ad revenue per day.';
facts[11] = 'In late 2017, the Bitcoin cryptocurrency hit the $20,000 value for the first time in its history.';
facts[12] = 'More than 56 million hours worth of music are streamed online every day.';
facts[13] = '1 in 7 divorces are blamed on Facebook and other social media sites.';
    
    
//create a way to send the facts back to the user
function newFact() {
    var randomFact = Math.floor(Math.random()*(facts.length));
    document.getElementById('techDisplay').innerHTML = facts[randomFact];
}