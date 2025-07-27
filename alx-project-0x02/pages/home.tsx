import Header from "@/components/layout/Header";
import Card from "@/components/common/Card";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="p-8 max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Home Page</h1>
        <Card title="Welcome" content="This is the first reusable card." />
        <Card title="Feature" content="This card describes a key feature of the app." />
        <Card title="Note" content="Reusable components save time and reduce bugs." />
      </main>
    </div>
  );
}
