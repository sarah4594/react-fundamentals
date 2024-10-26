import { createRoot } from 'react-dom/client'

export function Box({
	size,
	...otherProps
}: React.ComponentProps<'div'> & { size?: 'small' | 'medium' | 'large' }) {
	console.log(otherProps) // holds classname, styles, and text
	const sizeClassName = size ? `box box--${size}` : 'box'
	return (
		<div
			{...otherProps}
			className={`${otherProps.className} ${sizeClassName}`}
			style={{ fontStyle: 'italic', ...otherProps.style }}
		/>
	)
}

function App() {
	return (
		<div>
			<Box size="small" style={{ backgroundColor: 'lightblue' }}>
				small lightblue box
			</Box>
			<Box
				size="medium"
				className="box--medium"
				style={{ backgroundColor: 'pink' }}
			>
				medium pink box
			</Box>
			<Box
				size="large"
				className="box--large"
				style={{ backgroundColor: 'orange' }}
			>
				large orange box
			</Box>
			<Box>sizeless colorless box</Box>
		</div>
	)
}

const rootEl = document.createElement('div')
document.body.append(rootEl)
createRoot(rootEl).render(<App />)
