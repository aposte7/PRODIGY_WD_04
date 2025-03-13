const ProjectCard = ({ title, description, technologies, imageUrl, repoUrl, liveSite }) => (
    <a href={liveSite} target="_blank" rel="noopener noreferrer" className="block p-6 border rounded-lg shadow-md shadow-blue-400 hover:shadow-lg transition transform hover:scale-105">
        <div className="overflow-hidden rounded-md">
            <img src={imageUrl} alt="Project Image" className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110" />
        </div>
        <h3 className="text-2xl text-indigo-400 font-semibold mt-4">{title}</h3>
        <p className="mt-2 text-gray-200">{description}</p>
        <p className="mt-2 text-gray-400">Technologies: {technologies}</p>
        <a href={repoUrl} target="_blank" rel="noopener noreferrer" className="text-cyan-200 underline mt-2 block">View on GitHub</a>
    </a>
);

export default ProjectCard;
