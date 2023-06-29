import Audit from "../components/Audit";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Intro from "../components/Intro";
import Social from "../components/Social";
import Supporting from "../components/Supporting";
import Team from "../components/Team";

export default function Home() {
  return (
    <div className="min-w-fit">
      <Header></Header>
      <Hero></Hero>
      <Audit></Audit>
      <Intro></Intro>
      <Supporting></Supporting>
      <Team></Team>
      <Social></Social>
      <Footer></Footer>
    </div>
  );
}
