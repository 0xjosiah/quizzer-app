export default function OptionSelect(props) {
    const {id, options} = props
    const optionsElmts = options.map(i => (
        <option id={i}>{i}</option>
    ))
    return (
        <>
            <label for={id}>{`Select a ${id}`}</label>
            <select id={id} name={id}>
                {optionsElmts}
            </select>
        </>
    )
}