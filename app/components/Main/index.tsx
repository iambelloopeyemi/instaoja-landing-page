import WaitlistFormContainer from "../WaitlistFormContainer";
import WaitlistForm from "../WaitlistForm";

export default function Main() {
  return (
    <div className="container min-h-screen py-20">
      <main className="container-sm text-center">
        <h1 className="font-semibold text-5xl mb-8">
          Where <span className="text-olive">Freshness</span> Meets&nbsp;
          <span className="text-yellow-green">Convenience</span>, Right at Your
          Doorstep
        </h1>
        <p className="font-medium text-lg mb-10">
          InstaÒjà promises to delivers the Essence of Local Markets! Fresh,
          Affordable, and Swift Grocery Delivery in Lagos, Nigeria. Experience
          Convenience Like Never Before.
        </p>
        <WaitlistFormContainer>
          <WaitlistForm />
        </WaitlistFormContainer>
      </main>
    </div>
  );
}
