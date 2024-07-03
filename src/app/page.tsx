import { Footer } from "@/components/Footer";
import { Logo } from "@/components/Logo";
import { Navbar } from "@/components/Navbar";
import { SearchBar } from "@/components/SearchBar";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <Navbar className="m-4"/>
      <div className="grid place-content-center h-[70vh]">
        <Logo className="text-center"/>
        <SearchBar className="my-4"/>
        <p className="text-center">Not sure what to read? <Link href={"/books"} className="text-primary hover:text-accent transition duration-700 ease-in-out">Click here to browse</Link></p>
      </div>
      <Footer/>
    </main>
  );
}