import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Mohannic.com",
  description:
    "mohannic is a creative platform which combines creativity and technology. It is base out of bhilwara, Rajasthan",
};

export default function Home() {
  return (
    <div className="h-screen">
      <Navbar />
      <main className="mt-10 px-4 lg:px-0 lg:w-10/12 lg:max-w-[1200px] lg:mx-auto min-h-full">
        <span className="text-center block text-xl font-bold mb-3">
          About Us
        </span>
        <h2 className="text-center text-gray-800 font-medium">
          {`
        Welcome to Mohannic, a creative hub in the heart of Bhilwara, Rajasthan.
        We fuse creativity with technology to digitize and empower the rich
        traditions of Rajasthan. Dedicated to a niche audience of Rajasthanis
        who speak Hindi, we strive to capture the essence of our cultural
        heritage through innovative content. Mohannic is not just a brand; it's
        a digital celebration of Rajasthan's vibrant traditions and a testament
        to the seamless integration of tradition and technology. Join us on this
        journey as we bridge the gap between the past and the digital future,
        where every creation tells a story of Rajasthan's cultural richness.
        `}
        </h2>

        <div className="my-10">
          <span className="text-center block text-xl font-bold mb-3">Apps</span>
          <div className="grid lg:grid-cols-2 gap-5 mt-8">
            <Link href={"/jokes/bhilwara-jokes"}>
              <div className="shadow-md rounded-md border p-4 bg-gray-200">
                <span className="font-bold mb-2 block">भीलवाड़ा जोक्स</span>
                <p className="font-medium">
                  हँसी का ठिकाना ढूंढ रहे हैं? तो आप सही जगह आ गए हैं! हमने आपके
                  लिए भिलवाड़ा के सबसे मजेदार और लोटपोट करने वाले जोक्स का संकलन
                  किया है। इन जोक्स को पढ़कर आप अपनी हँसी नहीं रोक पाएंगे!
                </p>
              </div>
            </Link>
            <Link href={"/diwali-jokes"}>
              <div className="shadow-md rounded-md border p-4 bg-gray-200">
                <span className="font-bold mb-2 block">दिवाली पर चुटकुले</span>
                <p className="font-medium">
                  इस दिवाली अपने और अपने दोस्तों के साथ कुछ मज़ेदार चुटकुले शेयर
                  करके अपनी हंसी को दोगुना करें। हम आपके लिए चुनिंदा दिवाली
                  चुटकुले लेकर आए हैं, जो आपको ज़रूर हंसाएंगे।
                </p>
              </div>
            </Link>
            <Link href={"/wishes/ram-mandir"}>
              <div className="shadow-md rounded-md border p-4 bg-gray-200">
                <span className="font-bold mb-2 block">राम मंदिर की बधाई</span>
                <p className="font-medium">
                  Wish your friend and family with uniques wising page
                  personalized with your name, wish Ram Mandir Stanphana
                </p>
              </div>
            </Link>
            <Link href={"/wishes/makar-sankranti"}>
              <div className="shadow-md rounded-md border p-4 bg-gray-200">
                <span className="font-bold mb-2 block">
                  मकर संक्रान्ति की बधाई
                </span>
                <p className="font-medium">
                  Wish your friend and family with uniques wising page
                  personalized with your name, wish Makar Sankranti
                </p>
              </div>
            </Link>
          </div>
          <span className=" block italic mt-4">more apps coming soon...</span>
        </div>
      </main>
      <Footer />
    </div>
  );
}
