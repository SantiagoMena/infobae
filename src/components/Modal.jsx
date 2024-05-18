export default function Modal ({ isVisible, onClose, children }) {
    // Si no es visible retornar NULL
    if (!isVisible) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
                <button
                    className="relative float-right hover:text-gray-700 size-4 text-black"
                    onClick={onClose}
                >
                    {/* Botón de cerrar */}
                    &times;
                </button>
                <hr className="mt-8"/>
                {children}
            </div>
        </div>
    );
};