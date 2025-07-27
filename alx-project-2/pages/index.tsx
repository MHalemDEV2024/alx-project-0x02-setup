import Header from "@/components/layout/Header";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="p-8 text-center">
        <h1 className="text-4xl font-bold text-blue-600">Welcome to ALX Project 2</h1>
        <p className="mt-4 text-lg">This is a basic Next.js app with TypeScript and Tailwind CSS.</p>
      </main>
    </div>
  );
}
