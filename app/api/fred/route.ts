export async function GET(request: Request) {
    const { searchParams } = new URL(request.url)
    const series_id = searchParams.get('series_id')
    
    const response = await fetch(
      `https://api.stlouisfed.org/fred/series/observations?series_id=${series_id}&api_key=${process.env.NEXT_PUBLIC_FRED_API_KEY}&file_type=json`
    )
    
    const data = await response.json()
    return Response.json(data)
  }