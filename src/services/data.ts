import { Data, LineDataPropsArray } from "../pages/Home";
import api from "./api";

function loadData() {
  let data = {} as Data;
  api.get("helth-check").then((response) => {
    data = response.data;

    const data_temp = [
      {
        labels: data.cpu.labels as string[],
        datasets: [
          {
            label: `CPU Usage Data`,
            data: data.cpu.data as number[],
            borderColor: "rgb(48, 137, 254)",
            backgroundColor: "rgba(48, 137, 254, .5)",
          },
        ],
      },
      {
        labels: data.memory.labels as string[],
        datasets: [
          {
            label: `Memory Usage Data`,
            data: data.memory.data as number[],
            borderColor: "rgb(255, 99, 132)",
            backgroundColor: "rgba(255, 99, 132, 0.5)",
          },
        ],
      },
    ] as LineDataPropsArray;

    return data_temp;
  });
}

const healthCheck = {
  cpu: {
    labels: [
      "13:24",
      "13:29",
      "13:34",
      "13:39",
      "13:44",
      "13:49",
      "13:54",
      "13:59",
      "14:04",
      "14:09",
      "14:14",
      "14:19",
    ],
    data: [30, 60, 30, 30, 50, 80, 60, 50, 30, 30, 50, 30],
  },
  memory: {
    labels: [
      "13:24",
      "13:29",
      "13:34",
      "13:39",
      "13:44",
      "13:49",
      "13:54",
      "13:59",
      "14:04",
      "14:09",
      "14:14",
      "14:19",
    ],
    data: [
      59.5, 59.6, 59.7, 59.900000000000006, 60.2, 60.400000000000006, 60.5,
      60.7, 60.800000000000004, 60.900000000000006, 61, 61.2,
    ],
  },
  cluster: {
    status: "green",
  },
};

export { healthCheck, loadData };
