
export function Button(props) {
    return (
        <button className={`bg-${props.bg}`}>{props.text}</button>
    )
}

