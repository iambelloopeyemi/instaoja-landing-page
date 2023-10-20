import WaitlistFormContainer from "../WaitlistFormContainer";
import WaitlistForm from "../WaitlistForm";

export default function Main() {
  return (
    <div className="container min-h-screen py-20">
      <main className="container-sm text-center">
        <h1 className="font-semibold text-5xl mb-8">
          Get connected with a personal shopper to fulfill your shopping list
        </h1>
        <p className="font-medium text-lg mb-10">
          We know how valuable your time is. Our platform is dedicated to
          assisting busy individuals, especially working professionals, as well
          as those who lack the motivation to shop for groceries and other
          essential items. We connect them with personal shoppers who fulfill
          their orders.
        </p>
        <WaitlistFormContainer>
          <WaitlistForm />
        </WaitlistFormContainer>
      </main>
    </div>
  );
}
