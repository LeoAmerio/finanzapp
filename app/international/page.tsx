"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Line } from "react-chartjs-2"
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js"
import { DiscountWindowInfo } from "@/components/DiscountWindowInfo"

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend)

interface EconomicData {
  date: string
  value: number
}

interface FREDObservation {
  date: string
  value: string
}

interface FREDResponse {
  observations: FREDObservation[]
}

interface NewsItem {
  title: string
  content: string
  date: string
}

export default function Internacional() {
  const [cpiData, setCpiData] = useState<EconomicData[]>([])
  const [pceData, setPceData] = useState<EconomicData[]>([])
  const [fedFundsRate, setFedFundsRate] = useState<EconomicData[]>([])
  const [news, setNews] = useState<NewsItem[]>([])

  useEffect(() => {
    // Fetch CPI data
    fetch(
      "/api/fred?series_id=CPIAUCSL",
    )
      .then((response) => response.json())
      .then((data: FREDResponse) => {
        setCpiData(data.observations.map((obs) => ({ 
          date: obs.date, 
          value: Number.parseFloat(obs.value) 
        })))
      })

    // Fetch PCE data
    fetch("/api/fred?series_id=PCE")
      .then((response) => response.json())
      .then((data: FREDResponse) => {
        setPceData(data.observations.map((obs) => ({ 
          date: obs.date, 
          value: Number.parseFloat(obs.value) 
        })))
      })

    // Fetch Federal Funds Rate data
    fetch(
      "/api/fred?series_id=FEDFUNDS",
    )
      .then((response) => response.json())
      .then((data: FREDResponse) => {
        setFedFundsRate(data.observations.map((obs) => ({ 
          date: obs.date, 
          value: Number.parseFloat(obs.value) 
        })))
      })

    // Simulated news data (replace with actual API call if available)
    setNews([
      {
        title: "Fed Maintains Interest Rates",
        content: "The Federal Reserve decided to maintain current interest rates...",
        date: "2023-06-15",
      },
      {
        title: "Inflation Concerns Rise",
        content: "Recent CPI data shows an unexpected increase in inflation...",
        date: "2023-06-10",
      },
      {
        title: "PCE Index Suggests Moderate Growth",
        content: "The latest Personal Consumption Expenditures (PCE) index indicates...",
        date: "2023-06-05",
      },
    ])
  }, [])

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: "Economic Indicators",
      },
    },
  }

  const chartData = {
    labels: cpiData.map((d) => d.date),
    datasets: [
      {
        label: "CPI",
        data: cpiData.map((d) => d.value),
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
      {
        label: "PCE",
        data: pceData.map((d) => d.value),
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
      {
        label: "Federal Funds Rate",
        data: fedFundsRate.map((d) => d.value),
        borderColor: "rgb(75, 192, 192)",
        backgroundColor: "rgba(75, 192, 192, 0.5)",
      },
    ],
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Sección Internacional</h1>

      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Indicadores Económicos</CardTitle>
        </CardHeader>
        <CardContent>
          <Line options={chartOptions} data={chartData} />
        </CardContent>
      </Card>

      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Últimos Datos</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Indicador</TableHead>
                <TableHead>Último Valor</TableHead>
                <TableHead>Fecha</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>CPI</TableCell>
                <TableCell>{cpiData[cpiData.length - 1]?.value.toFixed(2)}</TableCell>
                <TableCell>{cpiData[cpiData.length - 1]?.date}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>PCE</TableCell>
                <TableCell>{pceData[pceData.length - 1]?.value.toFixed(2)}</TableCell>
                <TableCell>{pceData[pceData.length - 1]?.date}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Federal Funds Rate</TableCell>
                <TableCell>{fedFundsRate[fedFundsRate.length - 1]?.value.toFixed(2)}%</TableCell>
                <TableCell>{fedFundsRate[fedFundsRate.length - 1]?.date}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <DiscountWindowInfo />

      <Card className="mt-6">
        <CardHeader>
          <CardTitle>Noticias Económicas</CardTitle>
        </CardHeader>
        <CardContent>
          {news.map((item, index) => (
            <div key={index} className="mb-4">
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="text-sm text-gray-600">{item.date}</p>
              <p className="mt-2">{item.content}</p>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  )
}

