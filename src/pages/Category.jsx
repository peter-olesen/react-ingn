import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import request from "graphql-request";
import { format } from 'date-fns';
import { singleCategory } from '../queries/singleCategory'

import acs from '../components/ArticleCard/ArticleCard.module.scss'

export const Category = () => {

const { category } = useParams();

const { data } = useQuery({
  queryKey: ['singleCategory', category],
  queryFn: async () => request(import.meta.env.VITE_ENDPOINT, singleCategory, { category: category })
})

const sortedByDate = data?.stories?.sort((a, b) => new Date(b.datePublished) - new Date(a.datePublished));

useEffect(() => {
    // console.log(data);
}, [data])
    
    return (
        <main className="frontMain">
            <section>
              {sortedByDate?.map((item, index) => (
                  <NavLink key={index} to={`/article/${item.storySlug}`}>
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
            </section>
        </main>
    )
}