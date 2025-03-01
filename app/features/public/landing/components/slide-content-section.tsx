import React, { useEffect, useRef, useState } from "react";

// Define types for slide data
interface SlideData {
  id: number;
  title: string;
  description: string;
  icon: string;
  image: string;
}

// Define props for slide text content component
interface SlideTextContentProps {
  title: string;
  description: string;
  icon: string;
}

// Separate component for text content that changes
const SlideTextContent: React.FC<SlideTextContentProps> = ({
  title,
  description,
  icon,
}) => {
  return (
    <div className="flex w-full flex-col items-center md:items-start gap-4">
      <div className="flex size-10 flex-col items-center justify-center rounded-full bg-[#2E2047] transition-transform duration-300 hover:scale-110">
        <img src={icon} alt="" />
      </div>
      <h1
        style={{
          backgroundImage: `linear-gradient(to right, rgba(255, 255, 255, 0.65), rgba(255, 255, 255, 0.65)), url("/images/cloud.png")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
        className="font-geist bg-clip-text text-2xl font-bold"
      >
        {title}
      </h1>
    <p className="font-geist text-base text-center md:text-left text-[#A1A1AA]">{description}</p>
    </div>
  );
};

export const SlideSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [scrollPosition, setScrollPosition] = useState<number>(0);
  const [sectionVisible, setSectionVisible] = useState<boolean>(false);

  // Sample slide data
  const slides: SlideData[] = [
    {
      id: 1,
      title: "AI-Powered Style Analysis",
      description:
        "Get personalized style insights and recommendations based on your preferences and fashion choices.",
      icon: "/icons/star.svg",
      image: "/images/stats.gif",
    },
    {
      id: 2,
      title: "Smart Wardrobe",
      description:
        "Organize and track your outfits with intelligent bookmarking and categorization.",
      icon: "/icons/hanger.svg",
      image: "/images/wardrobe.gif",
    },
    {
      id: 3,
      title: "Climb Leaderboards",
      description:
        "Active creators earn bonus rewards and exclusive partnership opportunities.",
      icon: "/icons/rank.svg",
      image: "/images/leaderboard.gif",
    },
    {
      id: 4,
      title: "Buy & Sell Drips Instantly",
      description:
        "Turn your style into success. Buy trending outfits or sell your fashion combinations instantly on our marketplace.",
      icon: "/icons/cart.svg",
      image: "/images/my-video.gif",
    },
  ];

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const handleScroll = (): void => {
      const scrollY = window.scrollY;
      setScrollPosition(scrollY);

      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const viewportHeight = window.innerHeight;

      // Check if section is in viewport
      const sectionBottom = sectionTop + sectionHeight;
      const isVisible =
        scrollY < sectionBottom && scrollY + viewportHeight > sectionTop;

      setSectionVisible(isVisible);

      if (!isVisible) return;

      // Calculate normalized scroll position within the section (0 to 1)
      const effectiveHeight = sectionHeight - viewportHeight;
      const normalizedScroll = Math.max(
        0,
        Math.min(1, (scrollY - sectionTop) / effectiveHeight),
      );

      // Determine active slide based on normalized scroll position
      // Use a more gradual transition approach
      const numSlides = slides.length;

      // Create segmented progress with smooth transitions between segments
      // Instead of sharp jumps between slides, we'll have smooth cross-fades
      const segmentSize = 1 / numSlides;

      // Add padding to first and last segments to ensure they're fully visible
      // at the section boundaries
      let adjustedProgress = normalizedScroll;

      // For the first 10% of scroll, ensure first slide is fully visible
      if (normalizedScroll < 0.1) {
        adjustedProgress = 0;
      }
      // For the last 10% of scroll, ensure last slide is fully visible
      else if (normalizedScroll > 0.9) {
        adjustedProgress = 1;
      }
      // For the middle, create a more gradual easing between slides
      else {
        // Rescale the middle 80% to the full range
        adjustedProgress = (normalizedScroll - 0.1) / 0.8;
      }

      // Calculate the active slide index
      const calculatedIndex = Math.min(
        Math.floor(adjustedProgress * numSlides),
        numSlides - 1,
      );

      if (calculatedIndex !== activeIndex) {
        setActiveIndex(calculatedIndex);
      }
    };

    window.addEventListener("scroll", handleScroll);
    // Initialize on mount
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeIndex, slides.length]);

  // Calculate inter-slide transition progress
  const getSlideOpacity = (index: number): number => {
    // Handle section entry/exit
    if (!sectionVisible) {
      return index === 0 ? 1 : 0; // Show only first slide when section not in view
    }

    // When fully visible, handle normal slide transitions
    if (index === activeIndex) return 1;
    return 0;
  };

  // Get transform for slide based on its position relative to active
  const getSlideTransform = (index: number): string => {
    if (!sectionVisible) {
      return "translateY(0)"; // No transform when section not in view
    }

    if (index === activeIndex) return "translateY(0)";
    if (index < activeIndex) return "translateY(-16px)";
    return "translateY(16px)";
  };

  // Get the z-index for proper stacking
  const getSlideZIndex = (index: number): number => {
    if (index === activeIndex) return 10;
    return 0;
  };

  return (
    <div
      ref={sectionRef}
      className="relative h-[400vh] px-8"
      // Add padding at top and bottom for smoother entry/exit
      style={{
        paddingTop: "10vh",
        paddingBottom: "10vh",
      }}
    >
      {/* Fixed container for the visible slide */}
      <div className="sticky top-0 flex h-screen items-center justify-center py-40">
        <div className="flex w-full flex-col-reverse justify-center gap-4 py-[60px] md:flex-row md:items-start">
          {/* Left side with changing content */}
          <div className="relative h-[165px] w-full md:w-[40%]">
            {slides.map((slide, index) => (
              <div
                key={slide.id}
                className="slide-content duration-4000 absolute w-full transition-all"
                style={{
                  opacity: getSlideOpacity(index),
                  transform: getSlideTransform(index),
                  zIndex: getSlideZIndex(index),
                }}
              >
                <SlideTextContent
                  title={slide.title}
                  description={slide.description}
                  icon={slide.icon}
                />
              </div>
            ))}
          </div>

          {/* Right side with fixed container but changing image */}
          <div className="flex w-full items-center justify-center md:w-[50%]">
            <div className="relative mt-6 flex h-[430px] w-[80%] items-center justify-center overflow-hidden rounded-[59px] border-t-[9px] border-t-[#FFFFFF05] bg-[#6600FF0D] md:mt-0">
              {slides.map((slide, index) => (
                <img
                  key={slide.id}
                  src={slide.image}
                  alt=""
                  className="duration-4000 absolute h-[390px] w-[219px] transition-all"
                  style={{
                    opacity: getSlideOpacity(index),
                    transform: `scale(${index === activeIndex ? 1 : index < activeIndex ? 0.95 : 1.05})`,
                    zIndex: getSlideZIndex(index),
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
