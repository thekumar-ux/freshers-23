'use client';
import Image from 'next/image';
import { FollowerPointerCard } from './ui/following-pointer';

export function RecentProjects() {
  return (
    <div className="w-full mx-auto flex flex-wrap gap-6 justify-center">
      {blogContents.map((content, index) => (
        <div key={index} className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4">
          <FollowerPointerCard
            title={
              <TitleComponent
                title={content.author}
                avatar={content.authorAvatar}
              />
            }>
            <div className="relative overflow-hidden rounded-2xl transition duration-200 group bg-white hover:shadow-xl border border-zinc-100">
              <div className="w-full h-64 bg-gray-100 rounded-tr-lg rounded-tl-lg overflow-hidden relative">
                <Image
                  src={content.image}
                  alt="thumbnail"
                  layout="fill"
                  style={{ objectFit: 'cover' }}
                  className="group-hover:scale-95 group-hover:rounded-2xl transform object-cover transition duration-200"
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                />
              </div>
              <div className="p-4">
                <h2 className="font-bold my-4 text-lg text-zinc-700">
                  {content.title}
                </h2>
                <h2 className="font-normal my-4 text-sm text-zinc-500">
                  {content.description}
                </h2>
                <div className="flex flex-row justify-between items-center mt-10">
                  <span className="text-sm text-gray-500">{content.date}</span>
                  <div className="relative z-10 px-6 py-2 bg-black text-white font-bold rounded-xl block text-xs">
                    Read More
                  </div>
                </div>
              </div>
            </div>
          </FollowerPointerCard>
        </div>
      ))}
    </div>
  );
}

const cards = [
  {
    description: 'Dance (Group)',
    title: 'Group Dance',
    src: '/groupdance.jpg',
    ctaText: 'Join',
    ctaLink: 'https://forms.gle/RYoc3zsN2WeTxLBE6',
    content: () => {
      return (
        <p>
          The Group Dance Extravaganza features diverse dancers showcasing
          talent in a thrilling performance.
        </p>
      );
    },
  },
  {
    description: 'Ramp Walk (Miss / Mister Freshers)',
    title: 'Miss/Mister Fresher',
    src: '/rampwalk.jpg',
    ctaText: 'Join',
    ctaLink: 'https://forms.gle/RYoc3zsN2WeTxLBE6',
    content: () => {
      return (
        <p>
          The Miss Elegance Ramp Walk celebrates grace and style as participants
          showcase their unique fashion sense and confidence on the runway.
        </p>
      );
    },
  },
  {
    description: 'Solo Dance',
    title: 'Solo Dance Showdown',
    src: 'https://plus.unsplash.com/premium_photo-1720798652051-6fa4e380a010?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c29sbyUyMGRhbmNlJTIwaW5kaWFuJTIwaW1hZ2V8ZW58MHx8MHx8fDA%3D',
    ctaText: 'Join',
    ctaLink: 'https://forms.gle/RYoc3zsN2WeTxLBE6',
    content: () => {
      return (
        <p>
          The Solo Dance Showdown lets individual dancers shine on stage,
          showcasing their unique style and passion.{' '}
        </p>
      );
    },
  },
  {
    description: 'Couple Dance',
    title: 'Couple Dance Delight',
    src: '/coupledance.jpg',
    ctaText: 'Join',
    ctaLink: 'https://forms.gle/RYoc3zsN2WeTxLBE6',
    content: () => {
      return (
        <p>
          The Couple Dance Delight features duos performing mesmerizing
          routines, highlighting synchronization and chemistry.
        </p>
      );
    },
  },
  {
    description: 'Singing',
    title: 'Melodic Voices Singing Competition',
    src: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHNpbmd8ZW58MHx8MHx8fDA%3D',
    ctaText: 'Join',
    ctaLink: 'https://forms.gle/RYoc3zsN2WeTxLBE6',
    content: () => {
      return (
        <p>
          The Melodic Voices Singing Competition unites vocalists from all
          genres, offering each singer a chance to captivate with their voice.
        </p>
      );
    },
  },
  {
    description: 'Stand-Up Comedy',
    title: 'Laugh Out Loud Stand-Up Comedy',
    src: 'https://sosimg.sgp1.cdn.digitaloceanspaces.com/artist-gallery/9067487_1701950323.webp',
    ctaText: 'Join',
    ctaLink: 'https://forms.gle/RYoc3zsN2WeTxLBE6',
    content: () => {
      return (
        <p>
          The Laugh Out Loud Stand-Up Comedy event features comedians delivering
          witty observations and hilarious anecdotes to keep the audience in
          stitches.
        </p>
      );
    },
  },
  {
    description: 'Shayari',
    title: 'Soulful Shayari Night',
    src: 'https://images.unsplash.com/photo-1473186505569-9c61870c11f9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHBvZXRyeXxlbnwwfHwwfHx8MA%3D%3D',
    ctaText: 'Join',
    ctaLink: 'https://forms.gle/RYoc3zsN2WeTxLBE6',
    content: () => {
      return (
        <p>
          The Soulful Shayari Night is an evening celebrating poetry, with
          participants reciting verses that bring emotions to life.
        </p>
      );
    },
  },
  {
    description: 'Instrumentation Play',
    title: 'Instrumental Magic',
    src: 'https://media.istockphoto.com/id/520690051/photo/hands-of-the-man-playing-the-cello.jpg?s=612x612&w=0&k=20&c=jVBiXek3tHG2BC3uImP5iGZg701U7YTGwDu8SDn9HLY=',
    ctaText: 'Join',
    ctaLink: 'https://forms.gle/RYoc3zsN2WeTxLBE6',
    content: () => {
      return (
        <p>
          The Instrumental Magic event showcases musical talent with
          instrumentalists performing pieces from classical to contemporary.
        </p>
      );
    },
  },
  {
    description: 'Kabbadi',
    title: 'Kabbadi Championship',
    src: 'https://www.prokabaddi.com/static-assets/waf-images/4c/80/65/16-9/CeWEWZn7hD.png?v=2.18&w=600',
    ctaText: 'Join',
    ctaLink: 'https://ui.aceternity.com/templates',
    content: () => {
      return (
        <p>
          The Kabbadi Championship features teams showcasing their strength,
          agility, and strategy in an intense competition of this traditional
          Indian sport.
        </p>
      );
    },
  },
  {
    description: 'Volley Ball',
    title: 'Volleyball Tournament',
    src: 'https://plus.unsplash.com/premium_photo-1661963404614-74802f16a7a0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dm9sbGV5YmFsbHxlbnwwfHwwfHx8MA%3D%3D',
    ctaText: 'Join',
    ctaLink: 'https://ui.aceternity.com/templates',
    content: () => {
      return (
        <p>
          The Volleyball Tournament brings together teams for an exciting series
          of matches where power, precision, and teamwork are key.
        </p>
      );
    },
  },
  {
    description: 'Drawing',
    title: 'Artistic Drawing Competition',
    src: 'https://plus.unsplash.com/premium_photo-1673514503010-58c013e17aae?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZHJhd2luZ3xlbnwwfHwwfHx8MA%3D%3D',
    ctaText: 'Join',
    ctaLink: 'https://ui.aceternity.com/templates',
    content: () => {
      return (
        <p>
          The Artistic Drawing Competition lets participants showcase their
          creativity and talent through visual art.
        </p>
      );
    },
  },
  {
    description: 'Cube Solving',
    title: 'Cube Solving Challenge',
    src: 'https://images.unsplash.com/photo-1539627831859-a911cf04d3cd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y3ViZSUyMHNvbHZpbmd8ZW58MHx8MHx8fDA%3D',
    ctaText: 'Join',
    ctaLink: 'https://ui.aceternity.com/templates',
    content: () => {
      return (
        <p>
          The Cube Saving Challenge is an exciting event where participants race
          against time to solve puzzles and save the cube.
        </p>
      );
    },
  },
  {
    description: 'Cricket',
    title: 'Cricket Tournament',
    src: 'https://media.gettyimages.com/id/111436497/photo/mumbai-india-ms-dhoni-and-sachin-tendulkar-of-india-celebrate-their-teams-win-during-the-2011.jpg?s=612x612&w=0&k=20&c=ZnvgDC8Vx1EGiCijGRt2-XZ4SVtB1W62sQY9N29OhJ0=',
    ctaText: 'Join',
    ctaLink: 'https://ui.aceternity.com/templates',
    content: () => {
      return (
        <p>
          The Cricket Tournament is a grand event that brings together teams for
          a series of matches, celebrating the spirit of this beloved sport.
        </p>
      );
    },
  },
  {
    description: 'Chess',
    title: 'Chess Championship',
    src: 'https://plus.unsplash.com/premium_photo-1675762226695-bec5748d4d00?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y2hlc3N8ZW58MHx8MHx8fDA%3D',
    ctaText: 'Join',
    ctaLink: 'https://ui.aceternity.com/templates',
    content: () => {
      return (
        <p>
          The Chess Championship is a battle of wits and strategy, where
          participants compete in one of the oldest and most respected board
          games.
        </p>
      );
    },
  },
  {
    description: 'Badminton',
    title: 'Badminton Tournament',
    src: 'https://images.unsplash.com/photo-1721760886982-3c643f05813d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGJhZG1pbnRvbnxlbnwwfHwwfHx8MA%3D%3D',
    ctaText: 'Join',
    ctaLink: 'https://ui.aceternity.com/templates',
    content: () => {
      return (
        <p>
          The Badminton Tournament is an energetic and competitive event where
          players showcase their agility, speed, and precision on the court.
        </p>
      );
    },
  },
  {
    description: 'Table Tennis',
    title: 'Table Tennis Championship',
    src: 'https://images.unsplash.com/photo-1609710228159-0fa9bd7c0827?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGFibGUlMjB0ZW5uaXN8ZW58MHx8MHx8fDA%3D',
    ctaText: 'Join',
    ctaLink: 'https://ui.aceternity.com/templates',
    content: () => {
      return (
        <p>
          The Table Tennis Championship is a fast-paced event where participants
          demonstrate their reflexes, strategy, and skill.
        </p>
      );
    },
  },
  {
    description: 'Carrom',
    title: 'Carrom Tournament',
    src: 'https://images.unsplash.com/photo-1652558973232-f1c4ca08528a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y2Fycm9tJTIwYm9hcmR8ZW58MHx8MHx8fDA%3D',
    ctaText: 'Join',
    ctaLink: 'https://ui.aceternity.com/templates',
    content: () => {
      return (
        <p>
          The Carrom Tournament is a classic event where participants showcase
          their precision and skill in this popular board game.
        </p>
      );
    },
  },
  {
    description: 'BGMI',
    title: 'BGMI Esports Tournament',
    src: 'https://t3.ftcdn.net/jpg/08/22/67/22/240_F_822672277_ZxIoP5Tswz38tUgk4SbrB9kXB5AZNr41.jpg',
    ctaText: 'Join',
    ctaLink: 'https://ui.aceternity.com/templates',
    content: () => {
      return (
        <p>
          The BGMI Esports Tournament is a high-octane event where gamers
          compete in Battlegrounds Mobile India, showcasing their skills and
          strategies in this popular battle royale game.
        </p>
      );
    },
  },
  {
    description: 'Free Fire',
    title: 'Free Fire Championship',
    src: 'https://wallpapers.com/images/high/free-fire-alok-game-concert-zdz2y3i7qir6091h.webp',
    ctaText: 'Join',
    ctaLink: 'https://ui.aceternity.com/templates',
    content: () => {
      return (
        <p>
          The Free Fire Championship is a competitive event where players battle
          it out in this popular mobile game. With fast-paced action and
          tactical gameplay, participants must use their skills and strategy to
          outlast their opponents.
        </p>
      );
    },
  },
];

const blogContents = cards.map((card) => ({
  slug: card.title.toLowerCase().replace(/ /g, '-'), // Generating a slug from the title
  author: card.title, // Using the title as the author name
  date: new Date().toLocaleDateString(), // Setting the current date for demonstration
  title: card.title,
  description: card.content(),
  image: card.src,
  authorAvatar: card.src, // Placeholder for authorAvatar
}));

const TitleComponent = ({
  title,
  avatar,
}: {
  title: string;
  avatar: string;
}) => (
  <div className="flex space-x-2 items-center">
    <Image
      src={avatar}
      height={20}
      width={20}
      alt="thumbnail"
      className="rounded-full border-2 border-white"
    />
    <p>{title}</p>
  </div>
);
