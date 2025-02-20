export function TailwindIndicator() {
  if (import.meta.env.NODE_ENV === "production") return null;

  return (
    <div className="fixed bottom-3 right-3 z-50 flex h-8 w-8 items-center justify-center rounded-full bg-black p-4 font-mono text-lg text-white">
      <div className="block sm:hidden">xs</div>
      <div className="hidden sm:block md:hidden lg:hidden xl:hidden 2xl:hidden">
        sm
      </div>
      <div className="hidden md:block lg:hidden xl:hidden 2xl:hidden">md</div>
      <div className="hidden lg:block xl:hidden 2xl:hidden">lg</div>
      <div className="hidden xl:block 2xl:hidden">xl</div>
      <div className="hidden 2xl:block">2xl</div>
    </div>
  );
}
