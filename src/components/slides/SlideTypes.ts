export interface SlideProps {
  isActive?: boolean;
  className?: string;
}

export interface ChartDataPoint {
  name: string;
  value: number;
  color?: string;
}

export interface SlideComponentProps extends SlideProps {
  chartData?: ChartDataPoint[];
}