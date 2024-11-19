'use client';
interface PodcastPageProps {
    params:{
        id: number;
    }
}

const PodcastPage: React.FC<PodcastPageProps> = ({ params }) => {
    const { id} = params;
  return <h1>Pocast {id}</h1>;
};
export default PodcastPage;
