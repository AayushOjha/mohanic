import Head from "next/head";
import { GeneralJokes } from "../../../public/jokes";
import { Navbar } from "../Navbar";
import { PageSlider } from "../PageSlider";

export default async function Jokes() {
  const metadata = {
    title: "चुनिंदा दिवाली चुटकुले - इस दिवाली अपनी हंसी को करें दोगुना",
    description:
      "इस दिवाली अपने और अपने दोस्तों के साथ कुछ मज़ेदार चुटकुले शेयर करके अपनी हंसी को दोगुना करें। हम आपके लिए चुनिंदा दिवाली चुटकुले लेकर आए हैं, जो आपको ज़रूर हंसाएंगे।",
    ogImage:
      "https://res.cloudinary.com/dca1rzsyb/image/upload/v1699793383/mohannic/diwali_jokes_fjxgwp.jpg?w=300&h=800",
  };

  return (
    <div>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:image" content={metadata.ogImage} />
      </Head>
      <Navbar title="Jokes" />
      <PageSlider jokes={GeneralJokes} />
    </div>
  );
}
