'use strict';

QUnit.module('Тестируем функцию format', function () {
	QUnit.test('format работает правильно c одной колонкой и положительными числами', function (assert) {
		const input = [ 0, 1, 2, 10, 100, 1000, 10000 ];

		const expected =
			'    0\n' +
			'    1\n' +
			'    2\n' +
			'   10\n' +
			'  100\n' +
			' 1000\n' +
			'10000';

		assert.strictEqual(format(input, 1), expected);
	});

	QUnit.test('format работает правильно c одной колонкой и числами разного знака', function (assert) {
		const input = [ 0, 1, 2, 10, 100, -100, 1000, 10000, -10000 ];

		const expected =
			'     0\n' +
			'     1\n' +
			'     2\n' +
			'    10\n' +
			'   100\n' +
			'  -100\n' +
			'  1000\n' +
			' 10000\n' +
			'-10000';

		assert.strictEqual(format(input, 1), expected);
	});

	QUnit.test('format работает правильно c несколькими колонками', function (assert) {
		const input = [ 0, 1, 2, 10, 100, -100, 1000, 10000, -10000 ];

		const expected2 =
			'     0     1\n' +
			'     2    10\n' +
			'   100  -100\n' +
			'  1000 10000\n' +
			'-10000';

		const expected3 =
			'   0     1      2\n' +
			'  10   100   -100\n' +
			'1000 10000 -10000';

		const expected4 =
			'     0    1    2    10\n' +
			'   100 -100 1000 10000\n' +
			'-10000';

		const expected5 = 
			'   0    1     2     10 100\n' +
			'-100 1000 10000 -10000';

		assert.strictEqual(format(input, 2), expected2);
		assert.strictEqual(format(input, 3), expected3);
		assert.strictEqual(format(input, 4), expected4);
		assert.strictEqual(format(input, 5), expected5);
	});

	QUnit.test('format работает правильно с другими типами данных', function (assert) {
		const input = ['a', 'b', 'c', 'd', 'e', '-f', 'gg'];
		const input2 = [1.25, 2.29, 3.81, 9.1];

		const expected =
			' a b  c\n' +
			' d e -f\n' +
			'gg';

		const expected2 =
			'1.25 2.29\n' +
			'3.81  9.1' 

		assert.strictEqual(format(input, 3), expected);
		assert.strictEqual(format(input2, 2), expected2);
	});

	QUnit.test('format выводит пустую строку при некорректных данных', function (assert) {
		const input = [1.25, 2.29, 3.81, 9.1];
		const input2 = "";
		const input3 = 3;

		const expected = '';

		assert.strictEqual(format(input, ''), expected);
		assert.strictEqual(format(input2, 3), expected);
		assert.strictEqual(format(input3, ''), expected);
		assert.strictEqual(format(NaN, 3), expected);
		assert.strictEqual(format(input, NaN), expected);
		assert.strictEqual(format(Infinity, 3), expected);
		assert.strictEqual(format(input, Infinity), expected);
	});
});
