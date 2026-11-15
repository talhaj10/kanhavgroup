"use client";

import React, { createContext, useContext, useState } from "react";
import { RFQModal } from "@/components/ui/RFQModal";

interface RFQContextType {
  openRFQ: (productSlug?: string) => void;
  closeRFQ: () => void;
}

const RFQContext = createContext<RFQContextType>({
  openRFQ: () => {},
  closeRFQ: () => {},
});

export const useRFQ = () => useContext(RFQContext);

export const RFQProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [productSlug, setProductSlug] = useState<string | null>(null);

  const openRFQ = (slug?: string) => {
    setProductSlug(slug || null);
    setIsOpen(true);
  };

  const closeRFQ = () => {
    setIsOpen(false);
    setProductSlug(null);
  };

  return (
    <RFQContext.Provider value={{ openRFQ, closeRFQ }}>
      {children}
      <RFQModal isOpen={isOpen} onClose={closeRFQ} initialProductSlug={productSlug} />
    </RFQContext.Provider>
  );
};
