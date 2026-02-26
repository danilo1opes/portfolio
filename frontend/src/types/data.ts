interface CardTech {
  one: string;
  two: string;
  three: string;
}

export interface GlowConfig {
  width?: string;
  height?: string;
  top?: string;
  left?: string;
}

export interface CardData {
  id: number;
  subtitle: string;
  title: string;
  description: string;
  isGlow?: boolean;
  isGlowMobile?: boolean;
  isGlowDesktop?: boolean;
  glow?: GlowConfig;
  tech: CardTech;
}

export interface PortfolioCardProps {
  card: CardData;
  imageHeight?: string;
}
