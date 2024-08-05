import React from 'react';
import NavigationCard from './NavigationCard';

interface CardProps {
  img: string;  
  href: string;
  title: string;
  description: string;
}

const cardData: CardProps[] = [
  {
    img: "https://www.svgrepo.com/show/111745/samples.svg",
    href: "/Sample Tracking",
    title: "Sample Tracking",
    description: "Track your samples efficiently and ensure proper management.",
  },
  {
    img: "https://www.svgrepo.com/show/486223/data-management-backup.svg",
    href: "/Data Management",
    title: "Data Management",
    description: "Manage your data with ease and precision.",
  },
  {
    img: "https://www.svgrepo.com/show/308663/inventory-logistics-warehouse.svg",
    href: "/Inventory Management",
    title: "Inventory Management",
    description: "Keep track of your inventory with our intuitive system.",
  },
  {
    img: "https://www.svgrepo.com/show/532390/users.svg",
    href: "/User Account Management",
    title: "User Account Management",
    description: "Manage user accounts and permissions effortlessly.",
  },
  {
    img: "https://www.svgrepo.com/show/390451/analytics-business-chart-finance-graph-money.svg",
    href: "/Reporting",
    title: "Reporting",
    description: "Generate comprehensive reports with ease.",
  }
];

const NavigationCardsList: React.FC = () => (
  <div className="flex flex-wrap justify-center font-semibold gap-7 md:flex flex-wrap justify-center">
    {cardData.map((card, index) => (
      <NavigationCard
        key={index}
        img={card.img}
        href={card.href}
        title={card.title}
        description={card.description}
      />
    ))}
  </div>
);

export default NavigationCardsList;
