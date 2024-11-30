import { createRoot } from 'react-dom/client'

function App() {
	return (
		<form action="api/onboarding" method="POST">
			<div>
				<div>
					<label htmlFor="usernameInput">Username:</label>
					<input id="usernameInput" name="username" />
				</div>
				<div>
					<label htmlFor="passwordInput">Password:</label>
					<input name="password" type="password" id="passwordInput" />
				</div>
				<div>
					<label htmlFor="ageInput">Age:</label>
					<input name="age" type="number" min="0" max="200" id="ageInput" />
				</div>
				<div>
					<label htmlFor="photoInput">Photo:</label>
					<input name="photo" type="file" accept="image/*" id="photoInput" />
				</div>
				<div>
					<label htmlFor="colorInput">Favorite Color:</label>
					<input name="color" type="color" id="colorInput" />
				</div>
				<div>
					<label htmlFor="dateInput">Start Date:</label>
					<input name="date" type="date" id="dateInput" />
				</div>
			</div>
			{/* 🐨 add appropriate inputs for:
				- password
				- age (accepting numbers from 0 to 200)
				- photo (restricts the input to only accept image files)
				- color
				- startDate
			 */}
			<button type="submit">Submit</button>
		</form>
	)
}

const rootEl = document.createElement('div')
document.body.append(rootEl)
createRoot(rootEl).render(<App />)
