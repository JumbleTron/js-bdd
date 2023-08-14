const assert = require('assert');
const { Given, When, Then, After, Before} = require('@cucumber/cucumber');
const pactum = require('pactum');

let spec = pactum.spec();

Before(() => {
	spec = pactum.spec();
});

function isItFriday(today) {
	if (today === "Friday") {
		return "TGIF";
	} else {
		return "Nope";
	}
}

Given('today is {string}', function (givenDay) {
	this.today = givenDay;
});

Given('today is Sunday', function () {
	this.today = 'Sunday';
});

When('I ask whether it\'s Friday yet', function () {
	this.actualAnswer = isItFriday(this.today);
});

Then('I should be told {string}', function (expectedAnswer) {
	assert.strictEqual(this.actualAnswer, expectedAnswer);
});


Given('GET Request to the url {string}', async function (url) {
	await spec.get(url);
});

Given('I set query param key {string} to {string}', function (key, value) {
	spec.withQueryParams(key, value);
});

When('I receive a response', async function () {
	await spec.toss();
});

Then('Response code should be {int}', function (statusCode) {
	spec.response().should.have.status(statusCode);
});

After(() => {
	spec.end();
});
