import React from "react";

const Modal = ({ isOpen, onClose, title, children }) => {

if (!isOpen) return null; // don't render if not open

  return (
    <div className="w-full fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="bg-white rounded-2xl shadow-lg w-96 p-6 relative">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
        >
          ✕
        </button>
        {/* Dynamic Title */}
        <h2 className="text-xl font-semibold mb-4">{title}</h2>
        {/* Dynamic Content */}
        <div className="text-gray-600">{children}</div>
        <div className="mt-6 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;