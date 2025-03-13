const SkillCard = ({ icon: Icon, color, name }) => (
    <div className="flex flex-col items-center">
        <Icon className={`h-16 w-16 ${color}`} />
        <p className="text-stone-100 mt-2">{name}</p>
    </div>
);

export default SkillCard;
