import { Header } from "../../components/Header";
import { FinAndFormSection } from "../../section/FinanceAndFormSect";

export const HomePage = () => {

  return (
    <>
      <Header />
      <main className="main">
          <FinAndFormSection />
      </main>
    </>
   
  );
};
