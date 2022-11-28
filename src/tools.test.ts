import { expect } from '@jest/globals';
import { surround } from './tools';

test('test that surround() is correctly implemented', () => {
	expect(surround('test', '[]')).toBe('[test]');
	expect(surround('test', '()')).toBe('(test)');
	expect(surround('test', '**')).toBe('*test*');
	expect(surround('test', '***')).toBe('test'); // fail gracefully
	expect(surround('test', '')).toBe('test');
	expect(surround('', '[]')).toBe('[]');
	expect(surround('', '')).toBe('');
});