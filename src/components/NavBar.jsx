import LinkItem from "./LinkItem"

function NavBar() {
    return (
        <nav className="flex  items-center w-4/5 mx-auto rounded-2xl py-3 px-12 bg-sky-400/10 text-[1.1rem] justify-between">
            <div className="text-4xl font-medium text-blue-400">OG</div>

            <ul className="flex w-1/2 text-stone-200 items-center justify-between">       
                <LinkItem to="home" />
                <LinkItem to="about" />
                <LinkItem to="service" />
                <LinkItem to="project" />
                <LinkItem to="contact" />
            </ul>
        </nav>
    )
}

export default NavBar
