import HeaderSito from "./componenti/layout/HeaderSito";
import FooterSito from "./componenti/layout/FooterSito";
import HeroPrincipale from "./componenti/sezioni/HeroPrincipale";
import SezioneProblemaSoluzione from "./componenti/sezioni/SezioneProblemaSoluzione";
import SezioneMetodo from "./componenti/sezioni/SezioneMetodo";
import SezioneAmbiti from "./componenti/sezioni/SezioneAmbiti";
import SezioneProfilo from "./componenti/sezioni/SezioneProfilo";
import SezionePercorso from "./componenti/sezioni/SezionePercorso";
import SezioneCtaFinale from "./componenti/sezioni/SezioneCtaFinale";

export default function App() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <HeaderSito />
      <main>
        <HeroPrincipale />
        <SezioneProblemaSoluzione />
        <SezioneMetodo />
        <SezioneAmbiti />
        <SezioneProfilo />
        <SezionePercorso />
        <SezioneCtaFinale />
      </main>
      <FooterSito />
    </div>
  );
}


