export interface SlideProps {
  isActive?: boolean;
  className?: string;
}

export interface ChartDataPoint {
  name: string;
  value: number;
  color?: string;
  [key: string]: any; // Allow additional properties for chart data
}

export interface SlideComponentProps extends SlideProps {
  chartData?: ChartDataPoint[];
}