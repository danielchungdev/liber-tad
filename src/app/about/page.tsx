import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import Image from "next/image";

export default function AboutHome() {
    return (
        <main>
            <div className="mx-40 mb-10">
                <Navbar type="general" />
                <div className="my-4 mx-auto w-2/5  font-source text-paragraph">
                    <section>
                        <h1 className="text-header font-libre mb-4">About</h1>
                        <p className="mb-2"><i>Liber</i> stands for "book" in Latin and <i>libertad</i> in Spanish means "freedom". So the name stands for the freedom of books as I believe education should be free.</p>
                        <p>This website is for the Troy Web Development technical assessment. Due to the time limit, I was unable to make it mobile responsive, in the future I will keep in mind to design mobile first. That being said I was able to accomplish all the features that were required and add the bonus requirements. On top of that, I also came up with a interesting way of developing this application, however, it wouldn't have satisfied a lot of the features that were required, so instead, I had to scratch it and work on this simpler interface. I will attach a small demo of what it looked like as I think it was interesting.</p>
                    </section>
                    <section>
                        <h1 className="text-header font-libre my-4">User Flow</h1>
                        <p className="mb-2">This is the userflow created with Figma, representing the user's journey throughout the application.</p>
                        <Image className="m-auto" src="/images/userflow.png" height={200} width={700} alt={"User flow diagram of the app"} />
                    </section>
                    <section>
                        <h1 className="text-header font-libre my-4">Design System</h1>
                        <p className="mb-2">Here's the design system to follow throughout the application, I ended up changing the way tags look as it had poor readability.</p>
                        <Image className="m-auto" src="/images/Design-system.png" height={200} width={700} alt={"Design system for the app"} />
                    </section>
                    <section>
                        <h1 className="text-header font-libre my-4">Wireframes</h1>
                        <p className="mb-2">Here are the wireframes for the application. I Ended up ditching the mobile implementation as for time constraints.</p>
                        <Image className="m-auto" src="/images/wireframes.png" height={200} width={700} alt={"Wireframes for the app"} />
                    </section>
                    <section>
                        <h1 className="text-header font-libre my-4">Final Design</h1>
                        <Image className="m-auto" src="/images/Designs.png" height={200} width={700} alt={"Final design for the app"} />
                    </section>
                    <section>
                        <h1 className="text-header font-libre my-4">Potential Application (Failed implementation)</h1>
                        <p className="mb-2">This is the original idea I tried implementing. It uses this new web design element that makes it very interactive. The idea was to have all the titles to the right as a list, and as you scrolled down it would go down the titles and show the book to the right. Due to the lack of features and not sure how to implement them I decided to go the simpler route, but this idea is archieved and I will be working on it as a personal project.</p>
                        <Image className="m-auto" src="/gif/original-idea.gif" height={200} width={700} alt={"Original app idea"} />
                    </section>
                    <section>
                        <h1 className="text-header font-libre my-4">Branching Strategy</h1>
                        <p className="mb-2">For branching strategy I went with the standard master, development and feature branches. Only commiting to master after a completing a feature(pages).</p>
                        <Image className="m-auto" src="/images/branches.png" height={200} width={700} alt={"Final design for the app"} />
                    </section>
                </div>
            </div>
            <Footer />
        </main>
    );
}