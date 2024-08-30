'use client';
import Image from 'next/image';
import React, { useEffect, useId, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useOutsideClick } from '@/hooks/use-outside-click';

export function RecentProjects() {
  const [active, setActive] = useState<(typeof cards)[number] | boolean | null>(
    null
  );
  const ref = useRef<HTMLDivElement>(null);
  const id = useId();

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setActive(false);
      }
    }

    if (active && typeof active === 'object') {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  return (
    <>
      <AnimatePresence>
        {active && typeof active === 'object' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 h-full w-full z-10"
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {active && typeof active === 'object' ? (
          <div className="fixed inset-0  grid place-items-center z-[100]">
            <motion.button
              key={`button-${active.title}-${id}`}
              layout
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
                transition: {
                  duration: 0.05,
                },
              }}
              className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-white rounded-full h-6 w-6"
              onClick={() => setActive(null)}>
              <CloseIcon />
            </motion.button>
            <motion.div
              layoutId={`card-${active.title}-${id}`}
              ref={ref}
              className="w-full max-w-[500px]  h-full md:h-fit md:max-h-[90%]  flex flex-col bg-white dark:bg-neutral-900 sm:rounded-3xl overflow-hidden">
              <motion.div layoutId={`image-${active.title}-${id}`}>
                <Image
                  priority
                  width={200}
                  height={200}
                  src={active.src}
                  alt={active.title}
                  className="w-full h-80 lg:h-80 sm:rounded-tr-lg sm:rounded-tl-lg object-cover object-top"
                />
              </motion.div>

              <div>
                <div className="flex justify-between items-start p-4">
                  <div className="">
                    <motion.h3
                      layoutId={`title-${active.title}-${id}`}
                      className="font-bold text-neutral-700 dark:text-neutral-200">
                      {active.title}
                    </motion.h3>
                    <motion.p
                      layoutId={`description-${active.description}-${id}`}
                      className="text-neutral-600 dark:text-neutral-400">
                      {active.description}
                    </motion.p>
                  </div>

                  <motion.a
                    layoutId={`button-${active.title}-${id}`}
                    href={active.ctaLink}
                    target="_blank"
                    className="px-4 py-3 text-sm rounded-full font-bold bg-green-500 text-white">
                    {active.ctaText}
                  </motion.a>
                </div>
                <div className="pt-4 relative px-4">
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-neutral-600 text-xs md:text-sm lg:text-base h-40 md:h-fit pb-10 flex flex-col items-start gap-4 overflow-auto dark:text-neutral-400 [mask:linear-gradient(to_bottom,white,white,transparent)] [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]">
                    {typeof active.content === 'function'
                      ? active.content()
                      : active.content}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>
      <ul className="max-w-2xl mx-auto w-full gap-4">
        {cards.map((card, index) => (
          <motion.div
            layoutId={`card-${card.title}-${id}`}
            key={`card-${card.title}-${id}`}
            onClick={() => setActive(card)}
            className="p-4 flex flex-col md:flex-row justify-between items-center hover:bg-neutral-50 dark:hover:bg-neutral-800 rounded-xl cursor-pointer">
            <div className="flex gap-4 flex-col md:flex-row ">
              <motion.div layoutId={`image-${card.title}-${id}`}>
                <Image
                  width={100}
                  height={100}
                  src={card.src}
                  alt={card.title}
                  className="h-40 w-40 md:h-14 md:w-14 rounded-lg object-cover object-top"
                />
              </motion.div>
              <div className="">
                <motion.h3
                  layoutId={`title-${card.title}-${id}`}
                  className="font-medium text-neutral-800 dark:text-neutral-200 text-center md:text-left">
                  {card.title}
                </motion.h3>
                <motion.p
                  layoutId={`description-${card.description}-${id}`}
                  className="text-neutral-600 dark:text-neutral-400 text-center md:text-left">
                  {card.description}
                </motion.p>
              </div>
            </div>
            <motion.button
              layoutId={`button-${card.title}-${id}`}
              className="px-4 py-2 text-sm rounded-full font-bold bg-gray-100 hover:bg-green-500 hover:text-white text-black mt-4 md:mt-0">
              {card.ctaText}
            </motion.button>
          </motion.div>
        ))}
      </ul>
    </>
  );
}

export const CloseIcon = () => {
  return (
    <motion.svg
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.05,
        },
      }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-black">
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};

const cards = [
  {
    description: 'Dance (Group)',
    title: 'Group Dance',
    src: 'https://img.freepik.com/free-vector/party-people-dancing-abstract-background_1048-12817.jpg?size=626&ext=jpg&ga=GA1.1.960563148.1720785351&semt=ais_hybrid',
    ctaText: 'Join',
    ctaLink: 'https://forms.gle/RYoc3zsN2WeTxLBE6',
    content: () => {
      return (
        <p>
          The Group Dance Extravaganza brings together dancers from various
          backgrounds to showcase their talent in a thrilling and energetic
          performance. Teams will compete in a battle of choreography, style,
          and creativity. <br /> <br /> Whether it's hip-hop, contemporary, or
          traditional dance, this event promises to be a visual feast,
          highlighting the beauty of group coordination and the power of
          teamwork. Join us and experience the passion and artistry that dance
          can bring.
        </p>
      );
    },
  },
  {
    description: 'Ramp Walk (Miss / Mister Freshers)',
    title: 'Miss/Mister Fresher',
    src: 'https://t3.ftcdn.net/jpg/05/90/43/48/240_F_590434810_FH5IMvWzL90MBGhsSeThGwIqGn5pgRmz.jpg',
    ctaText: 'Join',
    ctaLink: 'https://forms.gle/RYoc3zsN2WeTxLBE6',
    content: () => {
      return (
        <p>
          The Miss Elegance Ramp Walk is a celebration of grace, poise, and
          style. Participants will take to the runway, showcasing their unique
          fashion sense and confidence. <br /> <br /> This event is not just
          about beauty; it's about expressing individuality and empowerment
          through fashion. Join us for a night of glamour, where elegance meets
          attitude in a spectacular display of haute couture.
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
          The Solo Dance Showdown is an event where individual dancers have the
          chance to shine on stage, showcasing their unique style and passion.{' '}
          <br /> <br /> From contemporary to classical, each performer will
          bring their best moves, aiming to captivate the audience and judges
          with their rhythm and creativity. This is a celebration of personal
          expression through dance, where every step tells a story.
        </p>
      );
    },
  },
  {
    description: 'Couple Dance',
    title: 'Couple Dance Delight',
    src: 'https://i.pinimg.com/originals/b2/fc/36/b2fc362364fba9cd6782cdcba0a1d4dd.jpg',
    ctaText: 'Join',
    ctaLink: 'https://forms.gle/RYoc3zsN2WeTxLBE6',
    content: () => {
      return (
        <p>
          The Couple Dance Delight is an enchanting event where duos take the
          stage to perform mesmerizing dance routines. Whether it's ballroom,
          salsa, or a modern duet, this event highlights the beauty of
          synchronization and chemistry between partners. <br /> <br /> Watch as
          couples move in perfect harmony, telling a story through their
          coordinated steps and shared energy. It's a dance of love, trust, and
          expression.
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
          The Melodic Voices Singing Competition is an event that brings
          together vocalists from all genres to showcase their talent. Whether
          it's classical, pop, or rock, each singer will have the chance to
          captivate the audience with their voice. <br /> <br /> This
          competition is a celebration of music and the power of vocal
          expression. Join us to hear the next generation of singing talent and
          enjoy a night filled with unforgettable performances.
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
          The Laugh Out Loud Stand-Up Comedy event is where humor takes center
          stage. Comedians will have the audience in stitches with their witty
          observations and hilarious anecdotes. <br /> <br /> From everyday life
          to absurd scenarios, no topic is off-limits as performers deliver
          punchlines that resonate with everyone. It's a night of laughter and
          fun, where the only rule is to keep the audience entertained.
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
          The Soulful Shayari Night is an evening dedicated to the art of
          poetry. Participants will recite their verses, bringing emotions to
          life with their words. <br /> <br /> This event is a journey through
          love, pain, joy, and introspection, as each poet shares their unique
          perspective on life. Join us for a night of deep reflections, where
          words are the stars of the show.
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
          The Instrumental Magic event is a showcase of musical talent where
          instrumentalists perform pieces that range from classical to
          contemporary. <br /> <br /> Each performance will highlight the beauty
          of different instruments, creating a symphony of sound that resonates
          with the soul. Whether it's the piano, guitar, or violin, this event
          celebrates the power of music without words.
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
          The Kabbadi Championship is an intense and thrilling competition where
          teams showcase their strength, agility, and strategy in this
          traditional Indian sport. <br /> <br /> Known for its physical and
          fast-paced nature, Kabbadi requires quick reflexes and teamwork.
          Whether you're a seasoned player or a newcomer, this event promises to
          be an exhilarating experience filled with nail-biting moments and
          spectacular displays of skill.
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
          of matches where power, precision, and teamwork are key. <br /> <br />{' '}
          Players will battle it out on the court, spiking and blocking their
          way to victory. This event is a celebration of athleticism and
          strategy, offering a thrilling experience for both participants and
          spectators.
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
          The Artistic Drawing Competition is an event that allows participants
          to express their creativity and talent through visual art. <br />{' '}
          <br /> Whether it's sketching, painting, or digital art, this
          competition is a platform for artists of all levels to showcase their
          skills and imagination. Join us for a day of inspiration, where art
          comes to life on paper and canvas.
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
          against time to solve puzzles and save the cube. <br /> <br /> This
          event tests problem-solving skills, speed, and precision, making it a
          thrilling competition for puzzle enthusiasts. Join us and put your
          skills to the test in this brain-teasing challenge.
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
          a series of matches, celebrating the spirit of this beloved sport.{' '}
          <br /> <br /> From powerful batting to strategic bowling, this
          tournament promises to deliver thrilling moments on the field. Whether
          you're a player or a fan, join us for a day of exciting cricket
          action.
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
          games. <br /> <br /> This event tests mental agility, foresight, and
          tactical prowess, making it a must-attend for chess enthusiasts. Join
          us to witness or participate in a game of pure intellect and strategy.
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
          players showcase their agility, speed, and precision on the court.{' '}
          <br /> <br /> Whether you're smashing the shuttle or defending against
          your opponent, this tournament offers a fast-paced and exciting
          experience for all badminton enthusiasts. Join us for a day of
          thrilling matches and sportsmanship.
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
          demonstrate their reflexes, strategy, and skill. <br /> <br /> This
          competition offers intense rallies and quick exchanges, making it a
          thrilling spectacle for both players and spectators. Join us and
          experience the excitement of this high-speed game.
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
          their precision and skill in this popular board game. <br /> <br />{' '}
          Aiming for the perfect strike, players will compete in a test of
          accuracy and strategy. Whether you're a seasoned player or a beginner,
          this tournament promises a day of fun and competition.
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
          strategies in this popular battle royale game. <br /> <br /> With
          intense gameplay and tactical battles, this tournament offers
          thrilling action for both players and fans. Join us for a day of
          gaming excitement and see who will emerge as the champion.
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
          outlast their opponents. <br /> <br /> This tournament promises
          thrilling moments and intense competition as players vie for the top
          spot. Join us and experience the excitement of Free Fire esports.
        </p>
      );
    },
  },
];
