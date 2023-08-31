import OurTrust from "../components/financialInstitution/ourTrust";
import DefaultLayout from "../components/layout/defaultLayout";
import Header from "../components/layout/header";

export default function FinancialInstitution() {
  return (
    <DefaultLayout>
      <header>
        <Header
          pageName="Financial Institution"
          firstText="Originate more"
          imgUrl="https://www.google.com/imgres?imgurl=https%3A%2F%2Fimg.freepik.com%2Fpremium-photo%2Fteam-young-african-people-office-work_219728-4722.jpg&tbnid=K-fFHQyVSi2pQM&vet=12ahUKEwjbifWhtoaBAxWupycCHd50Bd4QMygDegQIARBV..i&imgrefurl=https%3A%2F%2Fwww.freepik.com%2Fpremium-photo%2Fteam-young-african-people-office-work_13357128.htm&docid=n5fFep-1lbJR6M&w=626&h=417&q=african%20office%20working%20environment&ved=2ahUKEwjbifWhtoaBAxWupycCHd50Bd4QMygDegQIARBV"
          firstTextSpan=" "
          secondText="loans faster and easier."
          secondTextSpan=" "
          firstBtnText="get onboarded"
          secondBtnText="connect with us"
        />
      </header>
      <main>
        <section>
          <OurTrust />
        </section>
      </main>
    </DefaultLayout>
  );
}
