/* import { useContext } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/auth";
*/

import * as S from "./styles";

import { Chart, LineDataProps } from "../../components/Chart";
import { useAuth } from "../../contexts/auth";
import { useEffect, useState } from "react";
import api from "../../services/api";
import { Loading } from "../../components/Loading";

export type LineDataPropsArray = LineDataProps[];

export const options = {
  responsive: true,
};

export type Data = {
  cpu: {
    labels: string[];
    data: number[];
  };
  memory: {
    labels: string[];
    data: number[];
  };
  cluster: {
    status: string;
  };
};

export function Home() {
  const { user } = useAuth();
  const [show, setShow] = useState<boolean>(false);
  const [data, setData] = useState<Data>({} as Data);
  const [dataCheck, setDataCheck] = useState<LineDataPropsArray>(
    {} as LineDataPropsArray
  );

  async function loadData() {
    setShow(false);
    api.get("health-check").then((response) => {
      setData({ ...response.data });
      console.log("a", data);
      if (!response.data.cpu.labels.length) return;

      const data_temp = [
        {
          labels: response.data.cpu.labels as string[],
          datasets: [
            {
              label: `CPU Usage Data`,
              data: response.data.cpu.data as number[],
              borderColor: "rgb(48, 137, 254)",
              backgroundColor: "rgba(48, 137, 254, .5)",
            },
          ],
        },
        {
          labels: response.data.memory.labels as string[],
          datasets: [
            {
              label: `Memory Usage Data`,
              data: response.data.memory.data as number[],
              borderColor: "rgb(255, 99, 132)",
              backgroundColor: "rgba(255, 99, 132, 0.5)",
            },
          ],
        },
      ];
      setDataCheck(data_temp as LineDataPropsArray);
      setShow(true);
    });
  }

  useEffect(() => {
    (async () => {
      const date_temp = await loadData();
      console.log(date_temp);
    })();
  }, []);

  return (
    <S.Page>
      <S.Header>
        <S.Title>
          Olá,{" "}
          {user?.email.split("@")[0] ||
            "Estranho. Vocẽ não deveria estar aqui..."}
        </S.Title>
      </S.Header>
      <S.SubTitle>Gráficos de consumo do ElasticSearch</S.SubTitle>
      <br />
      {show ? (
        <>
          <S.Text>Status do cluster: </S.Text>
          <S.TextHighlight style={{ color: data.cluster.status as string }}>
            {data.cluster.status as string}
          </S.TextHighlight>
          {dataCheck.map((d, index) => (
            <Chart data={d} options={options} key={index} />
          ))}
        </>
      ) : (
        <Loading />
      )}
    </S.Page>
  );
}
