interface PodcastPpstPageProps {
  params: {
    slug: string[];
  };
}

const PodcastPpstPage: React.FC<PodcastPpstPageProps> = ({ params }) => {
  const { slug } = params;

  return <h1>{slug.join("/")}</h1>;
};

export default PodcastPpstPage;
