"use client";
import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppBubble() {
  const [show, setShow] = useState(false);
  const phone = "524611046818"; // Reemplaza con tu número en formato internacional
  const message = encodeURIComponent(
    "Hi, I would like more information on your services as a frontend developer"
  ); // Predefined message

  return (
    <div
      className="fixed z-50 bottom-6 right-18"
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
      style={{ width: "4rem", height: "4rem", position: "fixed" }}
    >
      {/* Tooltip en posición absoluta, NO desplaza el icono */}
      {show && (
        <span className="absolute px-3 py-1 text-xs text-white -translate-x-1/2 bg-green-600 rounded shadow-lg pointer-events-none bottom-20 left-1/2 whitespace-nowrap">
          Click to chat on WhatsApp
        </span>
      )}
      <a
        href={`https://wa.me/${phone}?text=${message}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-16 h-16 transition bg-green-500 rounded-full shadow-lg hover:bg-green-600"
        aria-label="Abrir chat de WhatsApp"
      >
        <FaWhatsapp className="text-4xl text-white" />
      </a>
    </div>
  );
}
