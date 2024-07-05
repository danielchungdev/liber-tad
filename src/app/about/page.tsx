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
                        <p>This website is for the Troy Web Development technical assessment. Due to the timelimit I was unable to make it mobile responsive, in the future will keep in mind to design mobile first then. That being said I was able to accomplish all the features that were required and adding the bonus requirements. On top of that I also came up with a very interesting way of developing this application, however, it wouldn't have satisfied a lot of the features that were required, so instead I had to scratch it and work on this simpler interface. That being said I will attach a small demo of what it looked like as I think it was very interesting.</p>
                    </section>
                    <section>
                        <h1 className="text-header font-libre my-4">User Flow</h1>
                        <p className="mb-2">This is the userflow created with Figma, representing the user's journey throughout the application.</p>
                        <Image className="m-auto" src="/images/userflow.png" height={200} width={700} alt={"User flow diagram of the app"}/>
                    </section>
                    <section>
                        <h1 className="text-header font-libre my-4">Design System</h1>
                        <p className="mb-2">Here's the design system to follow throughout the application, ended up changing the way tags look as it had poor readability.</p>
                        <Image className="m-auto" src="/images/Design-system.png" height={200} width={700} alt={"Design system for the app"}/>
                    </section>
                    <section>
                        <h1 className="text-header font-libre my-4">Wireframes</h1>
                        <p className="mb-2">Here's the wireframes for the application. Ended up ditching the mobile implementation as for time constraints.</p>
                        <Image className="m-auto" src="/images/wireframes.png" height={200} width={700} alt={"Wireframes for the app"}/>
                    </section>
                    <section>
                        <h1 className="text-header font-libre my-4">Final Design</h1>
                        <Image className="m-auto" src="/images/Designs.png" height={200} width={700} alt={"Final design for the app"}/>
                    </section>
                    <section>
                        <h1 className="text-header font-libre my-4">Potential Application (Failed implementation)</h1>
                        <p className="mb-2">This is the original idea I tried implementing. It uses this new web design element that makes it very interactive. The idea was to have all the titles to the right as a list, and as you scrolled down it would go down the titles and show the book to the right. Due to the lack of features and not sure how to implement them I decided to go the simpler route, but this idea is archieved and I will be working on it as a personal project.</p>
                        <Image className="m-auto" src="/gif/original-idea.gif" height={200} width={700} alt={"Original app idea"}/>
                    </section>
                </div>
            </div>
            <Footer/>
        </main>
    );
}