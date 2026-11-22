const { test } = require('node:test');
const assert = require('node:assert/strict');
const random = require('../index.js');
const { version } = require('../package.json');

test('Random cats', async () => {
	const data = await random.cat();
	assert.equal(data.success, true);
});

test('Random dogs', async () => {
	const data = await random.dog();
	assert.equal(data.success, true);
});

test('Random foxes', async () => {
	const data = await random.fox();
	assert.equal(data.success, true);
});

test('Random fishes', async () => {
	const data = await random.fish();
	assert.equal(data.success, true);
});

test('Random alpacas', async () => {
	const data = await random.alpaca();
	assert.equal(data.success, true);
});

test('Random birds', async () => {
	const data = await random.bird();
	assert.equal(data.success, true);
});


test('Get module version', () => {
	assert.equal(random.version, version);
});

test('Get API version', async () => {
	const data = await random.apiVersion();
	assert.equal(typeof data, 'string');
});