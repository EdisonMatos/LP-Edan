import React from "react";
import WhatsappForm from "./WhatsappForm";
import { X } from "lucide-react";

export default function Modal({ isOpen, setCloseModal }) {
  const closeModal = () => {
    setCloseModal(false);
  };

  const stopPropagation = (event) => {
    event.stopPropagation();
  };

  if (isOpen) {
    return (
      <div>
        <button
          className="relative grid items-center justify-center bg-[#ece5dd] shadow-2xl rounded-xl"
          onClick={stopPropagation}
        >
          <div className="bg-[#075E54] h-10 rounded-t-xl flex justify-end items-center px-2">
            <div className="text-zinc-100">
              <X onClick={closeModal} />
            </div>
          </div>

          <div className="p-4 m-2 text-left text-black">
            <WhatsappForm />
          </div>
        </button>
      </div>
    );
  }
  return null;
}
