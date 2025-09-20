export default async function Home() {
  const res = await fetch('http://backend:4000')
  const data = await res.json()

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold">Welcome to the Learning Platform</h1>
      {data ? (
        <p className="mt-4 text-lg">Message from API: {data.message}</p>
      ) : (
        <p className="mt-4 text-lg">Loading...</p>
      )}
    </main>
  )
}
