import Link from 'next/link';

const Navigation = () => {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">
          AI Tools
        </Link>
        <div className="space-x-4">
          <Link href="/chat" className="hover:text-gray-300">
            AI Chat
          </Link>
          <Link href="/privacy" className="hover:text-gray-300">
            Privacy
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navigation; 