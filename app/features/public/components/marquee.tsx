import { cn } from "~/lib/utils";

type MarqueeProps = React.HTMLAttributes<HTMLDivElement> & {
  images: string[];
};

export function Marquee(props: MarqueeProps) {
  const { images, className, ...rest } = props;
  return (
    <div className={cn("relative mt-[3%]", className)} {...rest}>
      <div className="overflow-hidden">
        <div className="marquee-wrapper relative before:pointer-events-none before:absolute before:-left-[3px] before:bottom-0 before:top-0 before:z-[1] before:inline-block before:w-1/5 before:bg-[linear-gradient(89.03deg,#FFFFFF_10.48%,rgba(255,255,255,0)_77.67%)] after:pointer-events-none after:absolute after:-right-[3px] after:bottom-0 after:top-0 after:z-[1] after:inline-block after:w-1/5 after:scale-[-1] after:bg-[linear-gradient(89.03deg,#FFFFFF_10.48%,rgba(255,255,255,0)_77.67%)]">
          <div className="marquee flex">
            <div className="marquee-group flex">
              {images.map((image, index) => (
                <div
                  key={index}
                  className="h-[400px] w-[367px] overflow-clip rounded-3xl"
                >
                  <img src={image} alt={`marquee-image-${index}`} />
                </div>
              ))}
            </div>
            <div className="aria-hidden marquee-group flex">
              {images.map((image, index) => (
                <div
                  key={index}
                  className="h-[400px] w-[367px] overflow-clip rounded-3xl"
                >
                  <img src={image} alt={`marquee-image-${index}`} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
