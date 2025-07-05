"use client";

import React from "react";
import { FloatingWhatsApp } from "react-floating-whatsapp";
import images from "../../public/images";

interface WhatsAppChatbotProps {
  phoneNumber: string; // Phone number with country code (e.g., "1234567890")
  welcomeMessage?: string;
}

const WhatsAppChatbot: React.FC<WhatsAppChatbotProps> = ({
  phoneNumber,
  welcomeMessage = "Hello! Thank you for contacting us. What can we help you with?",
}) => {
  return (
    <FloatingWhatsApp
      accountName="Kester Studio"
      phoneNumber={phoneNumber}
      avatar={"/images/logo.png"}
      allowClickAway={false}
      notification={true}
      notificationDelay={60}
      notificationSound={true}
      statusMessage="Typically replies within 1 hour"
      chatMessage={welcomeMessage}
      darkMode={true}
      placeholder="Type a message"
    />
  );
};

export default WhatsAppChatbot;
