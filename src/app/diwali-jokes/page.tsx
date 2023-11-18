import { Metadata } from "next";
import { GeneralJokes } from "@/../public/jokes";
import { Navbar } from "@app/Navbar";
import { PageSlider } from "@app/PageSlider";

export const metadata: Metadata = {
  title: "चुनिंदा दिवाली चुटकुले - इस दिवाली अपनी हंसी को करें दोगुना",
  description:
    "इस दिवाली अपने और अपने दोस्तों के साथ कुछ मज़ेदार चुटकुले शेयर करके अपनी हंसी को दोगुना करें। हम आपके लिए चुनिंदा दिवाली चुटकुले लेकर आए हैं, जो आपको ज़रूर हंसाएंगे।",
  openGraph: {
    title: "चुनिंदा दिवाली चुटकुले - इस दिवाली अपनी हंसी को करें दोगुना",
    description:
      "इस दिवाली अपने और अपने दोस्तों के साथ कुछ मज़ेदार चुटकुले शेयर करके अपनी हंसी को दोगुना करें। हम आपके लिए चुनिंदा दिवाली चुटकुले लेकर आए हैं, जो आपको ज़रूर हंसाएंगे।",
    images:
      "https://res.cloudinary.com/dca1rzsyb/image/upload/v1699793383/mohannic/diwali_jokes_fjxgwp.jpg?w=300&h=800",
  },
};

export default async function Jokes() {
  return (
    <div>
      <Navbar title="Jokes" />
      <PageSlider jokes={GeneralJokes} />
    </div>
  );
}
