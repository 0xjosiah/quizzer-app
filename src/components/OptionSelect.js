import { useRef } from "react"

export default function OptionSelect({id, options, title}) {
    const selectRef = useRef()
    
    const optionsElmts = options.map(i => (
        <option id={i.id} key={i.id}>{i.name}</option>
    ))

    return (
        <>
            <label htmlFor={id}>{`Select a ${title}`}</label>
            <select ref={selectRef} id={id} name={id}>
                {optionsElmts}
            </select>
        </>
    )
}