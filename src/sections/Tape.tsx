import StarIcon from "@/assets/icons/star.svg"
import { Fragment } from "react";

const words = [
  "Performance",
  "Accessible",
  "Secure",
  "Interactive",
  "Scalable",
  "User Friendly",
  "Responsive",
  "Maintainable",
  "Search Optimized",
  "Usable",
  "Reliable",
  "Reusable",
  "Modular",
  "Efficient",
  "Extensible",
  "Testable",
  "Optimized",
  "Readable",
  "Well-documented",
  "Type-safe",
  "Intuitive",
  "Aesthetic",
  "Fluid",
  "Fast-loading",
  "Cross-browser Compatible",
  "Mobile-first",
  "Animation-friendly",
  "Dark Mode Ready",
  "Component-driven",
  "Thread-safe",
  "Decoupled",
  "Error-handling Ready",
  "Transactional",
  "Cloud-ready",
  "Database-efficient",
  "Secure by Design",
  "Adaptable",
  "Team-oriented",
  "Problem-solving",
  "Growth-focused",
  "Detail-oriented",
  "Curious",
  "Proactive"
];

export const TapeSection = () => {
  return (
    <div className="py-16 lg:py-24">
      <div className="bg-gradient-to-r from-emerald-300 to-sky-300 overflow-x-clip -rotate-3 -mx-1">
        <div className="flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="flex flex-none gap-4 pr-4 py-3 animate-move-left [animation-duration:30s]" >
            {[...new Array(2)].fill(0).map((_, idx) => (
              <Fragment key={idx}>
                {words.map(word => (
                  <div key={word} className="inline-flex gap-4 items-center">
                    <span className="text-gray-900 uppercase font-extrabold text-sm">{word}</span>
                    <StarIcon className="size-6 text-gray-900 -rotate-12" />
                  </div>
                ))}
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
