import React from 'react';
import styled from 'styled-components';
import { BarChart } from '@mui/x-charts/BarChart';

const Card = styled.div`
  flex: 1;
  min-width: 280px;
  padding: 24px;
  border: 1px solid ${({ theme }) => theme.text_primary + 20};
  border-radius: 14px;
  box-shadow: 1px 6px 20px 0px ${({ theme }) => theme.primary + 15};
  display: flex;
  flex-direction: column;
  gap: 6px;
  @media (max-width: 600px) {
    padding: 16px;
  }
`;
const Title = styled.div`
  font-weight: 600;
  font-size: 16px;
  color: ${({ theme }) => theme.primary};
  @media (max-width: 600px) {
    font-size: 14px;
  }
`;

const WeeklyStatCard = ({ data }) => {
  return (
    <Card>
      <Title>Weekly Calories Burned</Title>
      {data?.totalWeeksCaloriesBurnt && (
       <BarChart
  xAxis={[
    {
      scaleType: "band",
      data: data?.totalWeeksCaloriesBurnt?.weeks,
      tickLabelStyle: { fill: "#FFFFFF" },
    },
  ]}
  yAxis={[
    {
      tickLabelStyle: { fill: "#FFFFFF" },
    },
  ]}
  series={[{ data: data?.totalWeeksCaloriesBurnt?.caloriesBurned }]}
  height={300}
  sx={{
    "& .MuiChartsAxis-line": {
      stroke: "#FFFFFF", // axis lines
    },
    "& .MuiChartsAxis-tick": {
      stroke: "#FFFFFF", // tick marks
    },
    "& .MuiChartsAxis-root .MuiChartsAxis-tickLabel": {
      fill: "#FFFFFF", // tick labels (fallback if needed)
    },
    "& .MuiBarElement-root": {
      fill: "#00ff6a", // optional: bar color for better contrast
    },
  }}
/>

      )}
    </Card>
  );
};

export default WeeklyStatCard;
