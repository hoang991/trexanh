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
  visionMission: {
    slogan: string;
    vision: {
      title: string;
      content: string;
    };
    mission: {
      title: string;
      items: Array<{ title: string; desc: string }>;
    };
    coreValues: {
      title: string;
      subtitle: string; // TRE - TÂM - TÍN - TUỆ
      items: Array<{
        char: string;
        title: string;
        content: string;
        action: string;
      }>;
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
    title: string; // TRỤC VĂN HÓA
    subtitle: string; // GỐC TRE VỮNG CHÃI
    description: string;
    items: Array<{ title: string; desc: string }>;
  };
  operations: {
    title: string; // HỆ THỐNG VẬN HÀNH
    subtitle: string; // BỘ MÁY TỰ VẬN HÀNH
    description: string;
    items: Array<{ title: string; desc: string }>;
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
  digital: {
    game: {
      title: string;
      subtitle: string;
      description: string;
      items: Array<{ title: string; desc: string }>;
    };
    app: {
      title: string;
      description: string;
      items: Array<{ title: string; desc: string }>;
    };
    rewards: {
      title: string;
      subtitle: string;
      items: Array<{ title: string; desc: string }>;
    };
  };
  gamePlan: {
    title: string;
    subtitle: string;
    objectives: string[];
    principles: Array<{ title: string; desc: string }>;
    stages: {
      offline: {
        title: string;
        subtitle: string;
        games: Array<{
          title: string;
          target?: string;
          content: string; // Represents Activity/Gameplay
          value: string;
          product?: string; // Related product
        }>;
      };
      online: {
        title: string;
        subtitle: string;
        games: Array<{
          title: string;
          target: string;
          content: string;
          value: string;
        }>;
      };
      rewards: {
        title: string;
        subtitle: string;
        description: string;
        items: Array<{
          title: string;
          desc: string;
        }>;
      };
    };
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