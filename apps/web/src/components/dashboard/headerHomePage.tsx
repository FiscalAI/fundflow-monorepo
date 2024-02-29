import { WavyBackground } from "../ui-ani/wavyBackground";

const HeaderHomePage = () => {
  return (
    <WavyBackground className="max-w-4xl mx-auto pb-40">
      <p className="text-2xl md:text-4xl lg:text-7xl text-white font-bold inter-var text-center">
        FundFlowAI
      </p>
      <p className="text-base md:text-lg mt-4 text-white font-normal inter-var text-center">
        Leverage the power of AI to manage your expenses efficiently
      </p>
    </WavyBackground>
  );
};

export default HeaderHomePage;
