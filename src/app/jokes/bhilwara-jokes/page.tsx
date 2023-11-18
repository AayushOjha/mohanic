import { Metadata } from "next";
import { BhilwaraJokes } from "@/../public/jokes";
import { Navbar } from "@app/Navbar";
import { PageSlider } from "@app/PageSlider";

export const metadata: Metadata = {
  title: "हँसी का ठिकाना: मजेदार भिलवाड़ा जोक्स (Funny Bhilwara Jokes)",
  description:
    "हँसी का ठिकाना ढूंढ रहे हैं? तो आप सही जगह आ गए हैं! हमने आपके लिए भिलवाड़ा के सबसे मजेदार और लोटपोट करने वाले जोक्स का संकलन किया है। इन जोक्स को पढ़कर आप अपनी हँसी नहीं रोक पाएंगे!",
  openGraph: {
    title: "हँसी का ठिकाना: मजेदार भिलवाड़ा जोक्स (Funny Bhilwara Jokes)",
    description:
      "हँसी का ठिकाना ढूंढ रहे हैं? तो आप सही जगह आ गए हैं! हमने आपके लिए भिलवाड़ा के सबसे मजेदार और लोटपोट करने वाले जोक्स का संकलन किया है। इन जोक्स को पढ़कर आप अपनी हँसी नहीं रोक पाएंगे!",
    images:
      "https://res.cloudinary.com/dca1rzsyb/image/upload/v1699793383/mohannic/diwali_jokes_fjxgwp.jpg?w=300&h=800",
    siteName: "भिलवाड़ा जोक्स",
    type: "website",
  },
};

export default async function Jokes() {
  return (
    <div>
      <Navbar title="भिलवाड़ा जोक्स" />
      <PageSlider jokes={BhilwaraJokes} />
    </div>
  );
}
