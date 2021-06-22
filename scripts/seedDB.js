const mongoose = require('mongoose');
const db = require('../models');

// This file empties the Books collection and inserts the books below

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/googlebooks');

const bookSeed = [
	{
		id: 'HksgDQAAQBAJ',
		volumeInfo: {
			title: "Harry Potter and the Philosopher's Stone",
			authors: ['J. K. Rowling'],
			publisher: 'Bloomsbury Publishing',
			publishedDate: '2014-01-09',
			description:
				"Celebrate 20 years of Harry Potter magic! Harry Potter has never even heard of Hogwarts when the letters start dropping on the doormat at number four, Privet Drive. Addressed in green ink on yellowish parchment with a purple seal, they are swiftly confiscated by his grisly aunt and uncle. Then, on Harry's eleventh birthday, a great beetle-eyed giant of a man called Rubeus Hagrid bursts in with some astonishing news: Harry Potter is a wizard, and he has a place at Hogwarts School of Witchcraft and Wizardry. An incredible adventure is about to begin!These new editions of the classic and internationally bestselling, multi-award-winning series feature instantly pick-up-able new jackets by Jonny Duddle, with huge child appeal, to bring Harry Potter to the next generation of readers. It's time to PASS THE MAGIC ON ...",
			imageLinks: {
				thumbnail:
					'http://books.google.com/books/content?id=35rHBAAAQBAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api',
			},
			previewLink:
				'http://books.google.com/books?id=35rHBAAAQBAJ&dq=harrypotter&hl=&cd=5&source=gbs_api',
		},
	},
	{
		id: 'L2EQuwEACAAJ',
		volumeInfo: {
			title: 'Harry Potter and the Half-Blood Prince',
			authors: ['J. K. Rowling'],
			publishedDate: '2005',
			description:
				'As Harry enters his sixth year at Hogwarts, a storm is brewing in the battle between good and evil, a battle that promises to have incredible consequences for the magic world.',
			imageLinks: {
				thumbnail:
					'http://books.google.com/books/content?id=L2EQuwEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api',
			},
			previewLink:
				'http://books.google.com/books?id=L2EQuwEACAAJ&dq=harrypotter&hl=&cd=6&source=gbs_api',
		},
	},
	{
		id: 'axkVPwAACAAJ',
		volumeInfo: {
			title: "Frightful's Mountain",
			authors: ['Jean Craighead George'],
			publishedDate: '2000-11-01',
			description:
				'Frightful the Falcon tells her own story since leaving her partner, Sam Gribley. With no idea how to migrate, mate, or be a mother, will Frightful beat the odds of famine, winter, and human destruction?',
			imageLinks: {
				thumbnail:
					'http://books.google.com/books/content?id=axkVPwAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api',
			},
			previewLink:
				'http://books.google.com/books?id=axkVPwAACAAJ&dq=frightfulmountain&hl=&cd=1&source=gbs_api',
		},
	},
];

db.Book.remove({})
	.then(() => db.Book.collection.insertMany(bookSeed))
	.then((data) => {
		console.log(data.result.n + ' records inserted!');
		process.exit(0);
	})
	.catch((err) => {
		console.error(err);
		process.exit(1);
	});
