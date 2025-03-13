import NavBar from "../components/NavBar"
import Section from "../components/Section"


import coder from "../assets/coder.svg"


function HomePage() {
    return (
        <div className="bg-indigo-950 min-h-screen">
            <header className="py-4">
                <NavBar />
                <div className="py-24 mt-24 w-4/5 mx-auto grid gap-4 grid-cols-2 place-items-center">
                    <div className="place-self-start text-stone-300 animate-fade-in">
                        <p className="text-[1.2rem] py-2">Hello World 👋</p>
                        <h1 className="text-5xl bg-gradient-to-r from-blue-400 to-purple-600 inline-block text-transparent bg-clip-text py-2 font-medium px-0">I'm a Web Developer</h1>
                        <p className="w-[90%] text-[1.1rem]">Crafting beautiful and functional web experiences. Let's build something amazing together!</p>
                    </div>
                    <div className="animate-fade-in">
                        <img src={coder} className="h-[20rem] w-full" alt="Coder" />
                    </div>
                </div>
            </header>
            <main className="px-18">
                <Section title="About" id="about">
                    <p className="text-[1.1rem] text-stone-100">
                        I'm passionate Frontend Developer dedicated to building dynamic, user-friendly web applications. With a strong foundation in React, Tailwind CSS, Bootstrap, Redux, React Query, and React Hook Form, I create seamless and efficient user experiences.
                        I enjoy turning ideas into visually appealing and functional interfaces, always striving to write clean, maintainable, and scalable code. Whether it's crafting responsive designs, optimizing performance, or managing state effectively, I love the challenge of bringing web applications to life.
                        I'm always eager to learn new technologies and collaborate on exciting projects. Let's create something amazing together! 🚀
                    </p>
                </Section>
                
            </main>
        </div>
    )
}

export default HomePage
