export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
  highlight?: boolean;
}

export interface ContentBoxProps {
  image: string;
  title: string;
  buttonText: string;
  buttonLink: string;
  reverse?: boolean;
}

export interface ActivityProps {
  title: string;
  description: string;
  price: string;
  image: string;
  link: string;
}

export interface ResultCardProps {
  image: string;
  placement: string;
  event: string;
  date: string;
}

export interface PriceItemProps {
  price: string;
  title: string;
  features: string[];
}