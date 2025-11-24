import { twMerge } from "tailwind-merge";
import Marquee from "../components/Marquee";
import { reviews } from "../constants";
const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({ img, name, username, body }) => {
  return (
    <figure
      className={twMerge(
        "relative h-36 w-64 cursor-pointer overflow-hidden rounded-xl border border-gray-50/[.1] bg-gradient-to-r bg-indigo to-storm hover:bg-royal hover-animation group"
      )}
    >
      {/* Full background image */}
      <img
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        src={img}
        alt={name}
      />
      
      {/* Overlay with gradient and text */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="absolute bottom-4 left-4 right-4">
          <figcaption className="text-sm font-medium text-white mb-1">
            {name}
          </figcaption>
          <p className="text-xs font-medium text-white/80 mb-2">{username}</p>
          <blockquote className="text-xs text-white/70">{body}</blockquote>
        </div>
      </div>
    </figure>
  );
};

export default function Testimonial() {
  return (
    <div className="items-start mt-25 md:mt-35 c-space">
      <h2 className="text-heading">Certificates and Badges</h2>
      <div className="relative flex flex-col items-center justify-center w-full mt-12 overflow-hidden">
        <Marquee pauseOnHover className="[--duration:20s]">
          {firstRow.map((review) => (
            <ReviewCard key={review.username} {...review} />
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover className="[--duration:20s]">
          {secondRow.map((review) => (
            <ReviewCard key={review.username} {...review} />
          ))}
        </Marquee>
        <div className="absolute inset-y-0 left-0 w-1/4 pointer-events-none bg-gradient-to-r from-primary"></div>
        <div className="absolute inset-y-0 right-0 w-1/4 pointer-events-none bg-gradient-to-l from-primary"></div>
      </div>
    </div>
  );
}