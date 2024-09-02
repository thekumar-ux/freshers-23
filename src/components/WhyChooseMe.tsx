'use client';
import React from 'react';
import { StickyScroll } from './ui/sticky-scroll-reveal';
import Image from 'next/image';

const content = [
  {
    title: 'Become a sponser',
    description:
      'Support us and connect with over 1,000 students at our exciting fresher’s event! Your brand will be featured in cultural and sports activities.',
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="https://media.istockphoto.com/id/1320739633/photo/become-a-sponsor-message-on-a-puzzle-piece-apart-form-the-assembled-pieces-financial.jpg?s=612x612&w=0&k=20&c=Udy8TP4FGwJcTp9oeHTWRXNPMNl-51HklCKIaVoL7_8="
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: 'Brand Exposure',
    description:
      'Get noticed! We’ll feature your shop’s live location during the event and keep it on our website for a full year.',
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="https://t4.ftcdn.net/jpg/07/88/47/55/240_F_788475599_0nXOIktUFCJuox8CaiqWP1QRI8GQkYAe.jpg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: 'Why Partner With Us?',
    description:
      'Boost your brand’s visibility, make new connections, and get long-term exposure. Be a key part of a memorable event!',
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="https://img.freepik.com/free-vector/partnership-concept-illustration_114360-5954.jpg?size=626&ext=jpg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: 'Special Perks and Networking Opportunity',
    description:
      'Enjoy early access to future events, special shout-outs, and great opportunities to connect with students and other sponsors.',
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="https://cdn.pixabay.com/photo/2018/11/29/21/51/social-media-3846597_1280.png"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
];

function WhyChooseMe() {
  return (
    <div className="p-0">
      <StickyScroll content={content} />
    </div>
  );
}

export default WhyChooseMe;
