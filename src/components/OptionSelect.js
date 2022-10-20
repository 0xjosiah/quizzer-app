import { useRef } from "react"

export default function OptionSelect({id, options, title, handleSelectChange}) {
    const selectRef = useRef(null)
    
    const optionsElmts = options.map(i => (
        <option id={i.id} key={i.id}>{i.name}</option>
    ))
    
    return (
        <>
            <label htmlFor={id}>{`Select a ${title}`}</label>
            <select className="title-card__select" id={id} name={id} ref={selectRef} onChange={() => handleSelectChange(id, selectRef.current.value)}>
                {optionsElmts}
            </select>
        </>
    )
}