import { useEffect } from 'react'
import { useQuery } from '@tanstack/react-query'
import request from 'graphql-request'
import { allStories } from '../../queries/allStories'

import scs from './StoryCard.module.scss'

export const StoryCard = () => {

    const { data } = useQuery({
        queryKey: ['allStories'],
        queryFn: async () => request(import.meta.env.VITE_ENDPOINT, allStories)
    })

    useEffect(() => {
        console.log(data);
    }, [data])

    return (
        <>
            {data?.stories?.map((item, index) => (
                    <div key={index} className={scs.Card}>
                        <div>
                            <h3>{item.storyTitle}</h3>
                            <p className={scs.byline}>D. {item.datePublished} af {item.byline}</p>
                            <a href="">Læs mere</a>
                        </div>
                        <img src={item.storyImage[0].url} alt="" />
                    </div>
            ))}
        </>
    )
}