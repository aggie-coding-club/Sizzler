// app/generate+api.ts
// import { Request } from "expo-router/server"

export async function POST(req: Request): Promise<Response> {
  const { prompt } = await req.json();

  const json = await fetch(
    'https://fdbqtdftqqslqatesqlu.supabase.co',
    {
      headers: {
        'Content-Type': 'application/json',
        // `OPENAI_API_KEY` is pulled from the .env file when running in Expo CLI.
        Authorization: `Bearer ${process.env.SUPABASE_KEY ?? ''}`,
      },
      method: 'POST',
      body: JSON.stringify({
        prompt,
        max_tokens: 100,
      }),
    }
  ).then(res => res.json());

  // Return as JSON
  return Response.json(json);
}