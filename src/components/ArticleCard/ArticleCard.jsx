import { useEffect } from 'react'
import { useQuery } from '@tanstack/react-query'
import request from 'graphql-request'
import { format } from 'date-fns'
import { NavLink } from 'react-router-dom'
import { allArticles } from '../../queries/allArticles'

import acs from './ArticleCard.module.scss'

export const ArticleCard = () => {

    const { data } = useQuery({
        queryKey: ['allArticles'],
        queryFn: async () => request(import.meta.env.VITE_ENDPOINT, allArticles)
    })

    const sortedByDate = data?.stories?.sort((a, b) => new Date(b.datePublished) - new Date(a.datePublished));

    useEffect(() => {
        // console.log(data);
    }, [data])

    return (
        <>
            {sortedByDate?.map((item, index) => (
                <NavLink key={index} to={`article/${item.storySlug}`}>
                    <div className={acs.Card}>
                        <div>
                            <h3>{item.storyTitle}</h3>
                            <p className={acs.byline}>D. {format(new Date(item.datePublished), 'dd/MM-yy')} af {item.byline}</p>
                            <p>Læs mere</p>
                        </div>
                        <img src={item.storyImage[0].url} alt="" />
                    </div>
                </NavLink>
            ))}
        </>
    )
}