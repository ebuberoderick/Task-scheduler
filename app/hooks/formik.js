import React from "react"

const useFormik = (props) => {
    const [value, setValues] = React.useState(props.initialValues || {})
    const [error, setError] = React.useState([])
    const required = props.required
    const handlerChange = name => text => {
        setValues(prevValue => ({ ...prevValue, [name]: text }))
    }


    const handlerSubmit = async () => {
        setError([])
        for (const key in required) {
            if (value.hasOwnProperty(key) && value[key] === '') {
                setError(prevValue => ([...prevValue, { [key]: `${required[key]}` }]))
            }
        }

        return props.onSubmit(value, error)
    }

    const reset = name => {
        setValues(prevValue => ({ ...prevValue, [name]: props.initialValues }))
    }

    return { value, setValues, handlerChange, handlerSubmit, reset, error }
}

export default useFormik