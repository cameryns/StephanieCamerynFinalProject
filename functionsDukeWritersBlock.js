$(document).ready(function() {
	jQuery.fn.exists = function() {
		return this.length>0;
	}

	document.addEventListener(function(){}, true);


	inspoSwap();

   document.body.onkeyup = function(e){
     if(e.keyCode == 32){ 
       inspoSwap();
      }
	}

function inspoSwap() {

			var links = [{
				'text': 'Literally stop to smell the roses - Go for a walk in the gardens.'
				}, {
				'text': 'Treat yo&rsquo; self to vondy pumpkin bread'
				}, {
				'text': 'Snap the chapel like you&rsquo;re a pfrosh'
				}, {
				'text': 'See how productive you can be in the next half hour. Go!'
				}, {
				'text': 'What would Bey do?' 
				}, {
				'text': 'A little JVG wouldn&rsquo;t hurt.'
				}, {
				'text': 'Take a shower. It&rsquo;s been a while.'
				}, {
				'text': 'You deserve that nap.'
				}, {
				'text': 'You don&rsquo;t need that many tabs open. Promise.'
				}, {
				'text': 'Dance break - Bump some Yeezy'
				}, {
				'text': 'Don&rsquo;t stress that deadline - Kanye didn&rsquo;t finish his album when he turned it in either.'
				}, {
				'text': 'Red Mango free samples don&rsquo;t eat themselves.'
				}, {
				'text': 'Pro tip: Ciemas 3rd floor.'
				}, {
				'text': 'Pro tip: Div School basement.'
				}, {
				'text': 'Clear your space, clear your mind'
				}, {
				'text': 'Actually smile at that person you kinda-sorta-know for once.'
				}, {
				'text': 'Run for a bus. Own it.'
				}, {
				'text': 'Live like it&rsquo;s O-Week'
				},{
				'text': 'DDMF.'
				}
			];

			var randomlink = Math.floor(Math.random()*(links.length));
			//this returns a number between 0 and the length of our array

			function printlink() {
				var linkElem = $('#inspo');
				linkElem.html(links[randomlink].text);
			};

			printlink();
	    }


});