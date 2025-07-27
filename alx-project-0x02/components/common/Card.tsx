import { type CardProps } from "@/interfaces";

const Card = ({ title, content }: CardProps) => {
  return (
    <div className="bg-white shadow-md rounded-md p-6 mb-4 border border-gray-200">
      <h2 className="text-xl font-bold text-gray-800 mb-2">{title}</h2>
      <p className="text-gray-600">{content}</p>
    </div>
  );
};

export default Card;
