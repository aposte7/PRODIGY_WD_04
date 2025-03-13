const Section = ({ title, id, children }) => (
    <section id={id} className="py-24 w-4/5 mx-auto">
        <div className="text-center space-y-14">
            <h2 className="text-4xl py-12 font-medium text-indigo-400">{title}</h2>
            {children}
        </div>
    </section>
);

export default Section;
