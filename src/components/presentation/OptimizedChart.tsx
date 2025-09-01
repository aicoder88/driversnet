import React, { useMemo } from 'react';
import { ChartDataPoint } from '../slides/SlideTypes';

interface OptimizedChartProps {
  data: ChartDataPoint[];
  children: (data: ChartDataPoint[]) => React.ReactNode;
  shouldOptimize?: boolean;
}

export const OptimizedChart: React.FC<OptimizedChartProps> = ({
  data,
  children,
  shouldOptimize = true
}) => {
  const optimizedData = useMemo(() => {
    if (!shouldOptimize) return data;
    
    // Memoize the chart data to prevent unnecessary re-renders
    return data.map(item => ({
      ...item,
      // Ensure consistent object references
      name: String(item.name),
      value: Number(item.value)
    }));
  }, [data, shouldOptimize]);

  return <>{children(optimizedData)}</>;
};