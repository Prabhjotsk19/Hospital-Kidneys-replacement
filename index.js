// hospital game
// kidneys replacement

const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

const users = [{
	name: "John Marshal",
	kidneys: [{
		healthy: false
	}]
}];

app.get('/', (req, res) => {
	const johnKidneys = users[0].kidneys;
	const numberOfKidneys = johnKidneys.length;
	let numberOfHealthyKidneys = 0;
	for (let i=0; i<johnKidneys.length; i++) {
		if (johnKidneys[i].healthy) {
			numberOfHealthyKidneys++;
		}
	}
	const numberOfUnHealthyKidneys = numberOfKidneys - numberOfHealthyKidneys;

	res.json({
		numberOfKidneys,
		numberOfHealthyKidneys,
		numberOfUnHealthyKidneys
	})
});

app.post('/', (req, res) => {
	const isHealthy = req.body.isHealthy;
	users[0].kidneys.push({
		healthy: isHealthy
	});
	res.json({
		msg: "Done"
	})
})

app.put('/', (req, res) => {
	for (let i=0; i<users[0].kidneys.length; i++) {
		users[0].kidneys[i].healthy = true;
	}
	res.json({});
}) 

app.delete('/', (req, res) => {
	const newKidneys = [];
	for (let i=0; i<users[0].kidneys.length; i++) {
		if (users[i].kidneys[i].healthy) {
			newKidneys.push({
				healthy: true
			})
		}
	}
	users[0].kidneys = newKidneys;
	res.json({
		msg: "Done"
	});
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});