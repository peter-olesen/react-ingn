import { useQuery } from "@tanstack/react-query";
import request from "graphql-request";
import { singleStory } from "../../queries/singleStory";
import { useEffect } from "react";
import Markdown from 'markdown-to-jsx'
import cs from './ContentBox.module.scss'

export const ContentBox = () => {

    const { data } = useQuery({
        queryKey: ['singleNews'],
        queryFn: async () => request(import.meta.env.VITE_ENDPOINT, singleStory),
    });

    useEffect(() => {
        // console.log(data);
    }, [data])

    return (
        <main className={cs.contentBox}>
        <section className={cs.innerContentBox}>
        <img src={data?.story?.storyImage[0].url} alt="" />
            <article className={cs.articleBox}>
                <h2>{data?.story?.storyTitle}</h2>
                <p className={cs.byline}>D. {data?.story?.datePublished} - af {data?.story?.byline}</p>
                <div>
                    <Markdown>{data?.story?.storyContent}</Markdown>
                </div>
            </article>
        </section>
    </main>
  )
}