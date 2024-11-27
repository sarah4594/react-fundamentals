import { createRoot } from 'react-dom/client'

function App() {
	return (
		// 🐨 render a form
		<form>
			<div>
				{/* 🐨 render a "Username" label */}
				<label htmlFor="username">Username</label>
				{/* 💯 associate the label to the input using htmlFor and id attributes */}
				{/* 🐨 render an input with the name "username" */}
				<input id="username" name="username" />
				<div>
					{/* 🐨 render a button */}
					{/* explicitly set the button type appropriately */}
					<button type="submit">Submit</button>
				</div>
			</div>
		</form>
	)
}

const rootEl = document.createElement('div')
document.body.append(rootEl)
createRoot(rootEl).render(<App />)
