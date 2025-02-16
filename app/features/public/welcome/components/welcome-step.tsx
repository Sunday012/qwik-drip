export function WelcomeStep() {
  return (
    <div className="mx-auto flex w-full max-w-[704px] flex-col items-center px-4">
      <div className="flex w-full max-w-[624px] flex-col items-center justify-start py-8 text-center">
        <h2 className="mb-4 text-[28px] font-bold leading-tight text-[#1E293B] sm:text-[32px] md:text-[40px] md:leading-[44px]">
          Explore weight loss plans.
        </h2>
        <p className="text-lg sm:text-xl text-[#516178]">
          Learn about treatment options based on your goals, habits, and health
          history.
        </p>
      </div>
      <div className="mb-4 w-full max-w-[624px]">
        <p className="text-sm sm:text-base text-[#516178]">
          By clicking Get started, you agree that Proxymed may use your
          responses to personalize your experience and other purposes as
          described in our Privacy Policy. Responses prior to account creation
          will not be used as part of your medical assessment.
        </p>
      </div>
    </div>
  );
}
