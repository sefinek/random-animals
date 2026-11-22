const { test } = require('node:test');
const assert = require('node:assert/strict');
const random = require('../index.js');
const { version } = require('../package.json');

test('Random cats', async () => {
	await random.cat().then(data => {
		assert.equal(data.success, true);
	});
});

test('Random dogs', async () => {
	await random.dog().then(data => {
		assert.equal(data.success, true);
	});
});

test('Random foxes', async () => {
	await random.fox().then(data => {
		assert.equal(data.success, true);
	});
});

test('Random fishes', async () => {
	await random.fish().then(data => {
		assert.equal(data.success, true);
	});
});

test('Random alpacas', async () => {
	await random.alpaca().then(data => {
		assert.equal(data.success, true);
	});
});

test('Random birds', async () => {
	await random.bird().then(data => {
		assert.equal(data.success, true);
	});
});


test('Get module version', () => {
	assert.equal(random.version, version);
});

test('Get API version', async () => {
	await random.apiVersion().then(data => {
		assert.equal(typeof data, 'string');
	});
});