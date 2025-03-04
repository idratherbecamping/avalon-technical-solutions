const Home = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FeatureCard
          title="AI Chat"
          description="Chat with an AI assistant powered by Claude"
          href="/chat"
        />
        {/* Other feature cards removed */}
      </div>
    </div>
  );
}; 