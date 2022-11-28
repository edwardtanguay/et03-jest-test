import './App.css';
import * as tools from './tools';

const message = 'this is a sentence';

function App() {
	return (
		<div className="App">
			<p>Message: {tools.surround(message, '[]')}</p>
			<p>Message: {tools.surround(message, '()')}</p>
			<p>Message: {tools.surround(message, '{}')}</p>
			<p>Message: {tools.surround(message, '__')}</p>
			<p>Message: {tools.surround(message, '><')}</p>
			<p>Message: {tools.surround(message, 'ksjdfskdfj')}</p>
		</div>
	);
}

export default App;