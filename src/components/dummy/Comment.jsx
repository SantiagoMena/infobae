import Owner from "@/components/dummy/Owner";

export default function Comment({ comment }) {
    return (
        <div className="border border-gray-300 p-5 rounded-lg shadow-md bg-gray-50 mb-4">
            <p className="text-gray-800 mb-4">{comment.message}</p>
            <Owner owner={comment.owner} />
        </div>
    );
}