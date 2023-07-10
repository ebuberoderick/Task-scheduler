import React from "react"

const useFormHandler = (props) => {
    const [value, setValues] = React.useState(props.initialValues || {})
    const [error, setError] = React.useState([])
    const required = props.required
    const handlerChange = name => text => {
        setValues(prevValue => ({ ...prevValue, [name]: text }))
    }

    const validator = async () => {
        let error = []
        for (const key in required) {
            if (value.hasOwnProperty(key) && value[key] === '') {
                error = [{ ...error[0], [key]: `${required[key]}` }]
            }
        }
        setError(error[0])
        return error
    }

    const submit = async () => {
        let err = await validator()
        if (err.length <= 0){
            return props.onSubmit(value)
        }
    }

    const reset = name => {
        setValues(prevValue => ({ ...prevValue, [name]: props.initialValues }))
    }

    return { value, setValues, handlerChange, submit, reset, error }
}

export default useFormHandler