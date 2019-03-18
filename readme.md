# present

## About

My personal slidedeck, deployed at: [present.florisschippers.nl](https://present.florisschippers.nl/)

Use the ⬅️ and ➡️ arrow keys to navigate slides  
Use the ⬆️ and ⬇️ arrow keys to navigate cards


## Getting started

Run `npm install` in the root directory to install the development modules  
Run `npm run dev` to start webpack to watch all source-files for compilation
Run `npm run prod` to use webpack to minify all source-files for deployment


## Loading & Saving files

Slides can be loaded into the slidedeck, the following structure is used:
```json
[
  [
		[
			"<h1>First Slide</h1>",
			"<p>First Card</p>"
		],
		[
			"<h1>First Slide</h1>",
			"<p>Second Card</p>"
		]
	],
	[
		[
			"<h1>Second Slide</h1>",
			"<p>First Card</p>"
		],
		[
			"<h1>Second Slide</h1>",
			"<p>Second Card</p>"
		]
	]
]
```
This structure can be broken down where the entire structure is an array of slides, each slide itself is an array of cards, each card itself is an array of HTML elements that all are displayed on the respective card.
