/* import { useContext } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/auth";
*/

import * as S from "./styles";
import { healthCheck } from "../../services/data";

import { Chart, LineDataProps } from "../../components/Chart";
import { useAuth } from "../../contexts/auth";

export const options = {
  responsive: true,
};

const { cluster } = healthCheck;

const data: LineDataProps[] = [
  {
    labels: healthCheck.cpu.labels as [string],
    datasets: [
      {
        label: `CPU Usage Data`,
        data: healthCheck["cpu"].data as [number],
        borderColor: "rgb(48, 137, 254)",
        backgroundColor: "rgba(48, 137, 254, .5)",
      },
    ],
  },
  {
    labels: healthCheck.memory.labels as [string],
    datasets: [
      {
        label: `Memory Usage Data`,
        data: healthCheck["memory"].data as [number],
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  },
];

export function Home() {
  const { user } = useAuth();

  return (
    <S.Page>
      <h1>
        Olá,{" "}
        {user?.email.split("@")[0] ||
          "Estranho. Vocẽ não deveria estar aqui..."}
      </h1>
      <h3>Gráficos de consumo do ElasticSearch</h3>
      <div>
        Status do cluster:{" "}
        <span style={{ color: cluster.status }}>{cluster.status}</span>
      </div>
      {data.map((d) => (
        <Chart data={d} options={options} />
      ))}
    </S.Page>
  );
}
