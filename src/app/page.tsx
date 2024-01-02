import MainPage from '@/components/main-page';
import Sidebar from '@/components/sidebar'

export default function Home() {

  return (
    <main className="flex h-screen">
      <Sidebar />
      <MainPage />
    </main>
  )
}
