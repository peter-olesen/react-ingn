import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import request from "graphql-request";
import Markdown from 'markdown-to-jsx';
import { format } from 'date-fns';
import { singleStory } from "../queries/singleStory";
import cs from '../components/ContentBox/ContentBox.module.scss';

export const Article = () => {
  const { slug } = useParams();

  const { data, isLoading, error } = useQuery({
    queryKey: ['singleNews', slug],
    queryFn: async () => request(import.meta.env.VITE_ENDPOINT, singleStory, { storySlug: slug }),
    enabled: !!slug,
  });

  useEffect(() => {
    if (data?.story?.storyTitle) {
      document.title = data?.story.storyTitle;
    }
  }, [data]);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading story: {error.message}</p>;

  return (
    <main className={cs.contentBox}>
      <section className={cs.innerContentBox}>
        <img src={data?.story?.storyImage[0]?.url} alt={data?.story.storyTitle} />
        <article className={cs.articleBox}>
          <h2>{data?.story?.storyTitle}</h2>
          <p className={cs.byline}>D. {format(new Date(data?.story?.datePublished), 'dd/MM-yy')} - af {data?.story?.byline}</p>
          <div>
            <Markdown>{data?.story?.storyContent}</Markdown>
          </div>
        </article>
      </section>
    </main>
  );
};
