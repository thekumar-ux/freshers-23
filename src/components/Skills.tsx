'use client';
import Image from 'next/image';
import React from 'react';
import { Carousel, Card } from '@/components/ui/apple-cards-carousel';

export function AppleCardsCarouselDemo() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="w-full h-full py-20">
      <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
        Our Sponser
      </h2>
      <Carousel items={cards} />
    </div>
  );
}

const Computerneex = () => {
  const contentArray = [
    {
      description:
        'Welcome to ComputroneeX, the ultimate destination for all your tech needs.',
      imageUrl: '/cx3.jpg',
      location:
        'https://www.google.com/maps/place/Computroneex/@25.7745075,87.4783936,17z/data=!4m6!3m5!1s0x39eff97306cf20d9:0x80d6f33aaa893522!8m2!3d25.7751316!4d87.4769227!16s%2Fg%2F1v6qg0sk?entry=ttu&g_ep=EgoyMDI0MDkwOS4wIKXMDSoASAFQAw%3D%3D',
    },
    {
      description:
        'The future is here. ComputroneeX offers the latest in tech, from laptops to accessories, to help you stay ahead of the curve.',
      imageUrl: '/cx2.jpg',
      location:
        'https://www.google.com/maps/place/Computroneex/@25.7745075,87.4783936,17z/data=!4m6!3m5!1s0x39eff97306cf20d9:0x80d6f33aaa893522!8m2!3d25.7751316!4d87.4769227!16s%2Fg%2F1v6qg0sk?entry=ttu&g_ep=EgoyMDI0MDkwOS4wIKXMDSoASAFQAw%3D%3D',
    },
    {
      description:
        'Get the best of both worlds with ComputroneeX. Our products are designed to be powerful and efficient, so you can get more done in less time.',
      imageUrl: '/cx4.jpg',
      location:
        'https://www.google.com/maps/place/Computroneex/@25.7745075,87.4783936,17z/data=!4m6!3m5!1s0x39eff97306cf20d9:0x80d6f33aaa893522!8m2!3d25.7751316!4d87.4769227!16s%2Fg%2F1v6qg0sk?entry=ttu&g_ep=EgoyMDI0MDkwOS4wIKXMDSoASAFQAw%3D%3D',
    },
    {
      description:
        'ComputroneeX is your one-stop shop for all things tech. Whether you’re a student, a professional, or a creator, we have everything you need to succeed.',
      imageUrl: '/cx1.jpg',
      location:
        'https://www.google.com/maps/place/Computroneex/@25.7745075,87.4783936,17z/data=!4m6!3m5!1s0x39eff97306cf20d9:0x80d6f33aaa893522!8m2!3d25.7751316!4d87.4769227!16s%2Fg%2F1v6qg0sk?entry=ttu&g_ep=EgoyMDI0MDkwOS4wIKXMDSoASAFQAw%3D%3D',
    },
    {
      description:
        'Upgrade your workspace with ComputroneeX. Our sleek and stylish products are designed to enhance your productivity and creativity.',
      imageUrl: '/cx5.jpg',
      location:
        'https://www.google.com/maps/place/Computroneex/@25.7745075,87.4783936,17z/data=!4m6!3m5!1s0x39eff97306cf20d9:0x80d6f33aaa893522!8m2!3d25.7751316!4d87.4769227!16s%2Fg%2F1v6qg0sk?entry=ttu&g_ep=EgoyMDI0MDkwOS4wIKXMDSoASAFQAw%3D%3D',
    },
    {
      description:
        'Experience the future of tech with ComputroneeX. Our cutting-edge products are designed to help you work smarter, not harder.',
      imageUrl: '/cx6.jpg',
      location:
        'https://www.google.com/maps/place/Computroneex/@25.7745075,87.4783936,17z/data=!4m6!3m5!1s0x39eff97306cf20d9:0x80d6f33aaa893522!8m2!3d25.7751316!4d87.4769227!16s%2Fg%2F1v6qg0sk?entry=ttu&g_ep=EgoyMDI0MDkwOS4wIKXMDSoASAFQAw%3D%3D',
    },
  ];

  return (
    <>
      {contentArray.map((content, index) => (
        <div
          key={'dummy-content' + index}
          className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
          <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
            <span className="font-bold text-neutral-700 dark:text-neutral-200">
              {content.description.split('.')[0] + '.'}
            </span>{' '}
            {content.description.split('.').slice(1).join('.')}
          </p>
          <Image
            src={content.imageUrl}
            alt={`Macbook mockup ${index + 1}`}
            height="500"
            width="500"
            className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
          />
          <div className="text-center mt-4">
            <a
              href={content.location}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline">
              View location on Google Maps
            </a>
          </div>
        </div>
      ))}
    </>
  );
};

const data = [
  {
    category: 'hp World',
    title: 'ComputroneeX',
    src: '/computerneex_thumbnail.jpg',
    content: <Computerneex />,
  },
];
