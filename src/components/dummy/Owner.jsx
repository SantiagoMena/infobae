export default function Owner({ owner }) {
    return (
        <div className="flex items-center mt-4">
            <div>
                <img src={owner.picture} alt="Owner Picture" className="w-12 h-12 rounded-full"/>
            </div>
            <div className="ml-4">
                <h1 className="text-gray-800 font-semibold">{owner.title}. {owner.firstName} {owner.lastName}</h1>
            </div>
        </div>
    );
}