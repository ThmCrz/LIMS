import React from 'react';

interface CardProps {
  img: string;
  href: string;
  title: string;
  description: string;
}

const NavigationCard: React.FC<CardProps> = ({ img, href, title, description }) => (
  <a href={href} className="block relative flex flex-col mt-6 text-gray-700 bg-gradient-to-br from-gray-200 to-gray-300 shadow-lg bg-clip-border rounded-xl w-96 hover:bg-gray-100 transition-all">
    <div className="vertical-line bg-clip-border rounded-xl w-96">
      <div className="flex flex-col items-center p-6">
        <img src={img} alt={img} style={{ maxWidth: '75px', height: 'auto' }} />
        <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">{title}</h5>
        <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">{description}</p>
      </div>
    </div>
  </a>
);

export default NavigationCard;