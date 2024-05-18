export default function User({ user }) {
    return (
        <div className="bg-white p-5 m-5 rounded-lg shadow-md items-center">
            <center>
                <p className="text-gray-600">{user.displayName}</p>
                <img src={user.photoURL} />
            </center>
        </div>
    );
}