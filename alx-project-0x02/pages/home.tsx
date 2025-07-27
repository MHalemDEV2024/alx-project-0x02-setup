import { useState } from "react";
import PostModal from "@/components/common/PostModal";
import Card from "@/components/common/Card";
import Header from "@/components/layout/Header";

export default function HomePage() {
  const [cards, setCards] = useState([
    { title: "Welcome", content: "This is the first reusable card." },
    { title: "Feature", content: "This card describes a key feature of the app." },
  ]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const addCard = (title: string, content: string) => {
    setCards([...cards, { title, content }]);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="p-8 max-w-3xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">Home Page</h1>
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-blue-600 text-white px-4 py-2 rounded"
          >
            Add Post
          </button>
        </div>

        {cards.map((card, index) => (
          <Card key={index} title={card.title} content={card.content} />
        ))}

        {isModalOpen && (
          <PostModal onSubmit={addCard} onClose={() => setIsModalOpen(false)} />
        )}
      </main>
    </div>
  );
}
