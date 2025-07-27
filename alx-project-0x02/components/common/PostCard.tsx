import { type PostProps } from "@/interfaces";

const PostCard = ({ title, body, userId }: PostProps) => {
  return (
    <div className="border rounded p-4 shadow mb-4 bg-white">
      <h3 className="text-lg font-semibold mb-1">{title}</h3>
      <p className="text-gray-700 mb-2">{body}</p>
      <p className="text-sm text-gray-500">User ID: {userId}</p>
    </div>
  );
};

export default PostCard;
