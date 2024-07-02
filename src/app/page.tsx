import { Logo } from "@/components/Logo";
import { SearchBar } from "@/components/SearchBar";

export default function Home() {
  return (
    <main>
      {/* {Pushing for development branch} */}
      <p className="text-header font-libre">Hello world</p>
      <p className="text-paragraph font-source">Hello world</p>
      <p className="text-small-body">Hello world</p>
      <Logo/>
      <SearchBar/>
    </main>
  );
}
