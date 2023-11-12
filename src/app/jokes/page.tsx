import { GeneralJokes } from "../../../public/jokes";
import { Navbar } from "../Navbar";
import { PageSlider } from "../PageSlider";

export default async function Jokes() {
  GeneralJokes;

  return (
    <div>
      <Navbar title="Jokes" />
      <PageSlider jokes={GeneralJokes} />
    </div>
  );
}
