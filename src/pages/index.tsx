import Navbar from "@/components/Navbar";
import Header from "@/components/Header";
import { Inter } from "next/font/google";
import MainLayout from "@/components/MainLayout";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="bg-[#f8faf8] w-full h-screen text-[#000000]">
      <MainLayout>
        
      </MainLayout>
    </main>
  );
}
