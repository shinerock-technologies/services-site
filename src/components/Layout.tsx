"use client";
import Header from "./ui-components/Header";
import Footer from "./ui-components/Footer";
import BookingModal from "./ui-components/BookingModal";
import { Figtree } from "next/font/google";
import { ModalProvider, useModal } from "../contexts/ModalContext";

const figtree = Figtree({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-figtree",
});

interface Item {
  children: React.ReactNode;
}

function LayoutContent({ children }: Item) {
  const { isModalOpen, closeModal } = useModal();

  return (
    <main className={`font-Figtree`}>
      <Header />
      <div>{children}</div>
      <Footer />
      <BookingModal isOpen={isModalOpen} onClose={closeModal} />
    </main>
  );
}

export default function Layout({ children }: Item) {
  return (
    <ModalProvider>
      <LayoutContent>{children}</LayoutContent>
    </ModalProvider>
  );
}
