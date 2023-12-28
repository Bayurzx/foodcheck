import Sidebar from '@/components/sidebar'

export default function Home() {
  return (
    <main className="flex h-screen">
      <Sidebar />      
      <div className="flex-grow bg-black p-8 overflow-y-auto">
        Hello Guys
      </div>

      </main>
  )
}
