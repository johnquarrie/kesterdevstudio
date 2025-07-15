"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Props {
  showTerms: boolean;
  setShowTerms: (show: boolean) => void;
}

const Terms: React.FC<Props> = ({ showTerms, setShowTerms }) => {
  return (
    <AnimatePresence>
      {showTerms && (
        <motion.div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm p-4 flex items-center justify-center z-50"
          onClick={() => setShowTerms(false)}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-[#1A1A1A] max-w-2xl w-full max-h-[90vh] p-6 overflow-y-auto rounded-xl shadow-lg text-[#C6C6C6] relative"
            onClick={(e) => e.stopPropagation()}
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <button
              onClick={() => setShowTerms(false)}
              className="absolute top-4 right-5 text-white hover:text-red-400 text-xl"
              aria-label="Close"
            >
              ×
            </button>

            <h1 className="text-2xl font-bold text-white mb-4">
              Terms and Conditions
            </h1>
            <p className="text-xs text-gray-400 mb-6">
              Last Updated: July 15, 2025
            </p>

            <div className="space-y-5 text-sm leading-relaxed">
              <p>
                Welcome to <strong>KesterDevStudio.com</strong> (“we”, “our”,
                “us”). These Terms and Conditions govern your use of our website
                and any products or services we offer, including but not limited
                to digital design, development, animation, marketing, and
                consulting services.
              </p>

              <p>
                By accessing or using our website and services, you agree to be
                bound by these Terms and Conditions. If you do not agree, please
                do not use our website or services.
              </p>

              <h2 className="font-semibold text-white">1. Services</h2>
              <ul className="list-disc list-inside space-y-1">
                <li>Web & App Development</li>
                <li>Game Design & Development</li>
                <li>UI/UX Design</li>
                <li>2D/3D Animation</li>
                <li>Blockchain & Smart Contract Solutions</li>
                <li>Metaverse and AI-Driven Experiences</li>
                <li>Branding, Marketing & Strategy</li>
              </ul>

              <p>
                All services are provided based on the scope, pricing, and
                timeline agreed upon with each client.
              </p>

              <h2 className="font-semibold text-white">
                2. Use of the Website
              </h2>
              <ul className="list-disc list-inside space-y-1">
                <li>Violate any applicable laws or regulations</li>
                <li>Infringe on intellectual property rights</li>
                <li>
                  Attempt to gain unauthorized access to our systems or data
                </li>
                <li>Transmit harmful or malicious software</li>
              </ul>

              <h2 className="font-semibold text-white">
                3. Payments and Refunds
              </h2>
              <ul className="list-disc list-inside space-y-1">
                <li>
                  Payment terms are agreed upon before the project starts.
                </li>
                <li>Deposits may be required to begin.</li>
                <li>Refunds are case-by-case based on service and delivery.</li>
                <li>
                  Completed milestones or rendered services are non-refundable.
                </li>
              </ul>

              <h2 className="font-semibold text-white">
                4. Intellectual Property
              </h2>
              <p>
                All deliverables belong to the client upon full payment unless
                otherwise agreed. We may showcase completed work unless an NDA
                is in place.
              </p>

              <h2 className="font-semibold text-white">
                5. Client Responsibilities
              </h2>
              <p>
                Clients must provide timely feedback, approvals, and complete
                and accurate information. Delays caused by the client may affect
                project timelines and result in additional charges.
              </p>

              <h2 className="font-semibold text-white">
                6. Limitation of Liability
              </h2>
              <ul className="list-disc list-inside space-y-1">
                <li>
                  We are not liable for damages from using this site/services.
                </li>
                <li>We’re not liable for third-party platforms/tools.</li>
                <li>
                  We’re not liable for force majeure or external disruptions.
                </li>
              </ul>

              <h2 className="font-semibold text-white">7. Confidentiality</h2>
              <p>
                All client information is kept confidential. NDAs can be signed
                upon request.
              </p>

              <h2 className="font-semibold text-white">
                8. Modifications to the Terms
              </h2>
              <p>
                We may update terms at any time. Continued use after changes
                implies agreement.
              </p>

              <h2 className="font-semibold text-white">9. Termination</h2>
              <p>
                We may terminate access for users who violate terms or engage in
                harmful behavior.
              </p>

              <h2 className="font-semibold text-white">10. Governing Law</h2>
              <p>
                These Terms are governed by the laws of the{" "}
                <strong>Federal Republic of Nigeria</strong>.
              </p>

              <h2 className="font-semibold text-white">11. Contact Us</h2>
              <p>
                <strong>Kester Dev Studio</strong> <br />
                📧{" "}
                <a
                  href="mailto:info@kesterdevstudio.com"
                  className="underline text-blue-400"
                >
                  info@kesterdevstudio.com
                </a>
                <br />
                🌍{" "}
                <a
                  href="https://kesterdevstudio.com"
                  className="underline text-blue-400"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://kesterdevstudio.com
                </a>
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Terms;
