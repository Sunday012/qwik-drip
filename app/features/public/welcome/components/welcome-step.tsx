export function WelcomeStep() {
  return (
    <div className="mx-auto flex w-[704px] flex-col items-center">
      <div className="flex h-[238px] w-[624px] flex-col items-center justify-start text-center">
        <h2 className="sm:leading-11 mb-4 text-[32px] font-bold leading-9 text-[#1E293B] sm:text-[40px]">
          Explore weight loss plans.
        </h2>
        <p className="text-xl text-[#516178]">
          Learn about treatment options based on your goals, habits, and health
          history.
        </p>
      </div>
      <div className="mb-4 w-[624px]">
        <p className="text-justify text-[#516178]">
          By clicking Get started, you agree that Proxymed may use your
          responses to personalize your experience and other purposes as
          described in our Privacy Policy. Responses prior to account creation
          will not be used as part of your medical assessment.
        </p>
      </div>
    </div>
  );
}
