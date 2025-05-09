// app/page.tsx
import Weather from "../../components/weather"


export default function Home() {
  return (
    <main className="min-h-screen p-4 bg-base-100">
      <Weather />
    </main>
  )
}
