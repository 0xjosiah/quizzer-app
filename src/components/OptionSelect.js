export default function OptionSelect({id, options, title}) {
    // const {id, options, title} = props
    const optionsElmts = options.map(i => (
        <option id={i} key={i}>{title}</option>
    ))
    return (
        <>
            <label htmlFor={id}>{`Select a ${id}`}</label>
            <select id={id} name={id}>
                {optionsElmts}
            </select>
        </>
    )
}