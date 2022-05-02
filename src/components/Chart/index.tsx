import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export type LineOptionsProps = {};
export type LineDataSetsProps = {
  label: string;
  data: [number];
  borderColor: string;
  backgroundColor: string;
}[];

export interface LineDataProps {
  labels: [string];
  datasets: LineDataSetsProps;
}
export type LineProps = {
  options: object;
  data: LineDataProps;
};

export function Chart({ data, options }: LineProps) {
  return <Line options={options} data={data} />;
}
