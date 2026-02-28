import SearchableLayout from "@/component/searchable-layout"
import { useRouter } from "next/router"
import { ReactNode, useEffect, useState } from "react"
import { MovieData } from "@/types/movie-types";
import MovieItem from "@/component/movie-item"
import Head from "next/head"
import dummyMovie from "../../../dummy/dummy.json"

export default function Page(){

    const router = useRouter();
    const { q } = router.query;
    console.log('search' + q)
    /**
     * console.log이 두번찍히는 것에 대한 ai 답변
     * React는 개발 환경(development)에서 부작용(Side Effects)을 찾아내기 위해 컴포넌트를 의도적으로 두 번 렌더링합니다.
     */

    const filteredMovies = typeof q === "string" 
    ? dummyMovie.filter((movie) => 
        movie.title.toLowerCase().includes(q.toLowerCase())
      )
    : []
    
    return (
        <div>
            {filteredMovies.map((item)=><MovieItem key={item.id} {...item} type="1" />)}
            {filteredMovies.length === 0 && "검색 결과가 없습니다"}
        </div>
    )
}

Page.getLayout = (page : ReactNode) =>{
  return <SearchableLayout>{page}</SearchableLayout>
}