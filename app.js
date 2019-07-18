// Game Logic

let score = 0;
var playerChoice;

let readable = {
	'0': 'Rock',
	'1': 'Paper',
	'2': 'Scissors'
};

let cpuChoice = {
	init: function() {
		this.store = Math.floor(Math.random() * 3);
		this.text = readable[this.store];
	},
	store: '',
	text: '',
};

let order = [0, 1, 2, 0];

const chooseWinner = (player, cpu) => {
	if (order[player] === order[cpu]) {
		return 'The game is tied, Play again?';
	}
	if (order[player] === order[cpu + 1]) {
		score++;
		return 'You won! Play again?';
	} else {
		score--;
		return 'You lost :( Play again?';
	}
};

let paragraph = document.querySelector('p');

const assignClick = (tag, pos) => {
	tag.addEventListener('click', () => {
		playerChoice = pos;

		cpuChoice.init();
		paragraph.innerText = 'The computer chose: ' + cpuChoice.text;

		paragraph.innerText += '\n' + chooseWinner(playerChoice, cpuChoice.store);
		paragraph.innerText += '\n' + 'SCORE: ' + score;
	});
};

let images = {
	tags: document.getElementsByTagName('img'),
	init: () => {
		for(let step = 0; step < images.tags.length; step++) {
			assignClick(images.tags[step], step);
		}
	},
};

images.init();
