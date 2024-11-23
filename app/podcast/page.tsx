import Card from '@/components/Card';
import {Episode} from '@/interfaces/Episode';
 interface PodcastListPageProps {
    episodes: Episode[];
 }
const PodcastListPage: React.FC<PodcastListPageProps> = ({episodes}) => {
    return (
        <div className="w-full flex justify-center items-center">
      <ul className="flex flex-wrap w-full gap-4 justify-center">
        {episodes.map(({ description, title, id }) => (
          <li
            key={id}
            className="flex-grow sm:flex-grow-0 sm:basis-1/2 md:basis-1/3 lg:basis-1/4"
          >
            <Card description={description} title={title} id={id} />
          </li>
        ))}
      </ul>
    </div>
    )
}
export default PodcastListPage;

export async function getStaticProps() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode/posts");
        const data = await response.json();

        const episodes:Episode[] = data.map((item: {id:number, body:string, title:string}) => ({
            id: item.id,
            title: item.title,
            description:item.body
        }))

        return {
            props:{
                episodes
            }
        }
    } catch (error) {
        console.log(error);

        return{
            props:{
                episodes:[],
            }
        }
    }
}