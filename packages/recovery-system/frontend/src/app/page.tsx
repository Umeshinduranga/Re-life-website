export default function Home(): JSX.Element {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4">
          <h1 className="text-3xl font-bold text-gray-900">
            Re-Life Recovery System
          </h1>
        </div>
      </header>
      <main className="max-w-7xl mx-auto py-6 px-4">
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-2xl font-semibold mb-4">
            RAG-Based Addiction Recovery Assistant
          </h2>
          <p className="text-gray-600">
            Your AI-powered recovery companion is being set up...
          </p>
        </div>
      </main>
    </div>
  )
}
