# react-modal-component-library
A library of React components created using `create-react-app`.

## Installation
Run the following command:
`npm i hr-modal`

## Using

Import Modal component and the hook useModal. Props isShowing and toggle are required. 

```jsx
import Modal, { useModal } from 'hr-modal'

function App() {
  const { isShowing, toggle } = useModal()

  return (
    <div>
			{/* the triggering of the modal needs the toggle previously defined */}
      <button onClick={toggle}>Bouton</button>
			{/*here you insert the modal you need to display on triggered event */}
      <Modal isShowing={isShowing} hide={toggle} />
    </div>
  )
}

export default App
```

### Setup for publish
- npm run build
- edit version in package.json
- npm publish


### Link
[NPM](https://www.npmjs.com/package/hr-modal)