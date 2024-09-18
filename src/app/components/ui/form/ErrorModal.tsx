// Modal.tsx
"use client";
import React from "react";

type ErrorModalProps = {
  showErrorModal: boolean;
  onClose: () => void;
  message: string;
};

const ErrorModal: React.FC<ErrorModalProps> = ({
  showErrorModal,
  onClose,
  message,
}) => {
  if (!showErrorModal) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm">
        <h3 className="text-lg font-semibold mb-4">Validation Error</h3>
        <p>{message}</p>
        <button
          onClick={onClose}
          className="mt-4 bg-red-500 text-white px-4 py-2 rounded-md"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default ErrorModal;
