"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

interface DiscountWindowData {
  date: string
  amount: number
}

interface FREDObservation {
  date: string
  value: string
}

interface FREDResponse {
  observations: FREDObservation[]
}

export function DiscountWindowInfo() {
  const [discountWindowData, setDiscountWindowData] = useState<DiscountWindowData[]>([])

  useEffect(() => {
    // Fetch Discount Window data
    fetch(
      "/api/fred?series_id=DPCREDIT",
    )
      .then((response) => response.json())
      .then((data: FREDResponse) => {
        setDiscountWindowData(
          data.observations.map((obs) => ({ 
            date: obs.date, 
            amount: Number.parseFloat(obs.value) 
          })),
        )
      })
  }, [])

  return (
    <Card>
      <CardHeader>
        <CardTitle>Ventanilla de Descuentos de la FED</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="mb-4">
          La ventanilla de descuentos es un mecanismo utilizado por la Reserva Federal para proporcionar liquidez a
          corto plazo a los bancos y otras instituciones de depósito.
        </p>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Fecha</TableHead>
              <TableHead>Monto (Millones de USD)</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {discountWindowData.slice(-5).map((item, index) => (
              <TableRow key={index}>
                <TableCell>{item.date}</TableCell>
                <TableCell>{item.amount.toFixed(2)}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}

