/**
 * Surrounds a string with two letters
 *
 * tools.surrounds('primary', '[]');
 *
 * '[primary]'
 */
export const surround = (text: string, twoLetters: string) => {
	if (twoLetters.length != 3) {
		return text;
	} else {
		const first = twoLetters[0];
		const second = twoLetters[1];
		return first + text + second;
	}
}