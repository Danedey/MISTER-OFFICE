export default function DashboardLayout({ children }) {
  return (
    <div className="min-h-screen bg-gray-100">

      <main className="container mx-auto py-6">
        {children}
      </main>
    </div>
  )
}