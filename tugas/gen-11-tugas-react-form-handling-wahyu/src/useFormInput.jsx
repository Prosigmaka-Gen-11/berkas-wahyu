import { useState } from "react";

export default function useFormInput (dataInput) {
	const [formInput, setFormInput] = useState(dataInput)

	function handleFormInput(evt, propName) {
		setFormInput({ ...formInput, [propName]: evt.target.value })
	}

	return {
		formInput,
		handleFormInput,
	}
}