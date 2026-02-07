export type Language = 'vi' | 'en';

export interface TranslationData {
  hero: {
    title: string;
    subtitle: string;
    description: string;
    tags: {
      esg: string;
      growth: string;
      carbon: string;
    };
  };
  foundation: {
    title: string;
    description: string;
    stats: {
      land: string;
      pillars: string;
      yearsToIpo: string;
      exp: string;
    };
    chartTitle: string;
    chartLabels: string[];
  };
  culture: {
    title: string;
    description: string;
    items: Array<{ icon: string; title: string; desc: string }>;
  };
  team: {
    title: string;
    description: string;
    members: Array<{ role: string; name: string; exp: string }>;
  };
  ecosystem: {
    title: string;
    description: string;
    chartLabels: string[];
    pillars: Array<{ title: string; desc: string }>;
  };
  market: {
    leafTitle: string;
    leafDesc: string;
    carbonTitle: string;
    carbonDesc: string;
    carbonLabels: string[];
  };
  investment: {
    title: string;
    description: string;
    chartLabels: string[]; // [Investor, Founder]
    labels: string[]; // [Operating Profit, IPO Value]
    perks: Array<{ title: string; items: string[] }>;
  };
  roadmap: {
    title: string;
    steps: Array<{ year: string; items: string[] }>;
  };
  footer: {
    cta: string;
    btn: string;
  };
}

export interface ChartDataPoint {
  name: string;
  value: number;
  [key: string]: string | number;
}