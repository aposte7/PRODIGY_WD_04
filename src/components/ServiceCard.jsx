const ServiceCard = ({ title, description }) => (
    <div className="p-6 border rounded-lg shadow-md shadow-blue-400 hover:shadow-lg transition transform hover:scale-105">
        <h2 className="text-xl text-indigo-400 font-semibold">{title}</h2>
        <p className="mt-2 text-gray-200">{description}</p>
    </div>
);

export default ServiceCard;
