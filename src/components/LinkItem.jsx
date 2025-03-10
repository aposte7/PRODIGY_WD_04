
function LinkItem ( { to, style } ) {
    return (
        <li className={`${style} hover:border-b px-0.5 w-fit hover:border-amber-700`}>
            <a className="capitalize" href={`#${to.toLowerCase()}`}>{to}</a>
        </li>
    )
}


export default LinkItem

