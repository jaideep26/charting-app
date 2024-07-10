'use client';

import { Container, Grid } from "@mui/material";
import ParentSize from "@visx/responsive/lib/components/ParentSize";
import Chart from "../Chart/Chart";
import { useState, useEffect } from "react";

// interface Data {
//   id: string;
//   city: string;
//   population: number;
// }

const data = [
  {
      "id": "528c40e5-d9b0-4bd9-ade5-f66a6b20c3dd",
      "city": "Itabuna",
      "population": 92
  },
  {
      "id": "7080eba8-96e2-46fd-ad95-8eb8d2db74f6",
      "city": "Árgos",
      "population": 93
  },
  {
      "id": "b376e059-ff9a-4774-9cdb-f9dec3677a96",
      "city": "Roma",
      "population": 15
  },
  {
      "id": "02f7522e-bf0c-452e-9c00-f1a6cc105750",
      "city": "Jianxin",
      "population": 11
  },
  {
      "id": "f58339a2-01f6-41fb-9b24-d7a33d0e735c",
      "city": "Bamenda",
      "population": 41
  },
  {
      "id": "a6e37e3b-f48d-4812-890a-61dbcfbf2f27",
      "city": "Strumica",
      "population": 79
  },
  {
      "id": "fe1fa37d-0289-496c-b171-053ec04e2bb2",
      "city": "San Antonio",
      "population": 6
  },
  {
      "id": "d76dd714-2889-49b1-9176-6e71cd296be7",
      "city": "Carandaí",
      "population": 6
  },
  {
      "id": "c54310ea-9f7a-4099-888a-8398ef530ad3",
      "city": "Binglincha",
      "population": 58
  },
  {
      "id": "539874fa-65be-4b05-949f-eed1fa6613d4",
      "city": "El Progreso",
      "population": 97
  }
];

export default function Body() {
  // const [data, setData] = useState<Data[]>([]);
  // const [loading, setLoading] = useState<boolean>(true);
  // const [error, setError] = useState<string | null>(null);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch('/api/population');
  //       if (!response.ok) {
  //         throw new Error('Network response was not ok');
  //       }
  //       const result: Data[] = await response.json();
  //       setData(result);
  //       setLoading(false);
  //     } catch (e) {
  //       if (e instanceof Error) {
  //         setError(e.message);
  //       } else {
  //         setError('An unknown error occurred');
  //       }
  //       setLoading(false);
  //     }
  //   };

  //   fetchData();
  // }, []);

  return (
    <Grid container spacing={2}>
      <Grid item xs={6}>
        <Container sx={{ height: '85vh' }}>
          <ParentSize>
            {({ width, height }) => <Chart data={data} width={width} height={height} />
            }
          </ParentSize>
        </Container>
      </Grid>
      <Grid item xs={6}>
        <Container>
          Description of Graph.
        </Container>
      </Grid>
    </Grid>
  );
}