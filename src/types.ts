export interface CampaignMetric {
  label: string;
  value: string;
  change: string;
  trend: "up" | "down";
}

export interface CaseStudyData {
  id: string;
  category: string;
  title: string;
  metric: string;
  metricLabel: string;
  quote: string;
  iconName: string;
  color: string; // Tailwind colors like 'orange' or 'cyan'
  expandedDetails: {
    overview: string;
    beforeValue: string;
    afterValue: string;
    growthPercentage: string;
    timeline: string;
    kpis: CampaignMetric[];
    channels: { name: string; percentage: number; color: string }[];
    timelineData: { month: string; value: number }[];
    strategySteps: string[];
    roiMultiplier: number;
  };
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  tags: string[];
  iconName: string;
}

