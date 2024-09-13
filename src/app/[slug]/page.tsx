type Params = {
  params: {
    slug: string;
  };
};

export default function SlugPage({ params }: Params) {
  const { slug } = params;
  return (
    <div>
      <h1>Page for: {slug.replace(/-/g, " ")}</h1>
      {/* Render your content here */}
    </div>
  );
}
