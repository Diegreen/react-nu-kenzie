import { FinanceList } from "../../components/Finance-List";
import { FormSection } from "../../components/Form";
import { Header } from "../../components/Header";

export const HomePage = () => {
  return (
    <>
      <Header />
      <main className="main">
          <FormSection />
          <FinanceList />
      </main>
    </>
   
  );
};
