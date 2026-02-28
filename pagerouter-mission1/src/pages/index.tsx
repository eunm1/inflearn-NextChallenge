import Head from "next/head";
import style from "./index.module.css";
import { ReactNode, useEffect } from "react";
import dummyMovie from "../../dummy/dummy.json"
import MovieItem from "@/component/movie-item"
import SearchableLayout from "@/component/searchable-layout";

export default function Home() {
  return (
    <>
      <Head>
        <title>한 입 시네마</title>
        <meta property="og:image" content="/thumbnail.png" />
        <meta property="og:title" content="한입시네마" />
        <meta
          property="og:description"
          content="한입 시네마를 확인해보세"
        />
      </Head>
      <div className={style.container}>
        <section>
          <h3>지금 가장 추천하는 영화</h3>
          {dummyMovie.slice(0,3).map((movie)=><MovieItem key={movie.id} {...movie} type="1"></MovieItem>)}
        </section>
        <section>
          <h3>등록된 모든 영화</h3>
          {dummyMovie.map((movie)=><MovieItem key={movie.id} {...movie} type="2"></MovieItem>)}
        </section>
      </div>
    </>
  );
}

Home.getLayout = (page : ReactNode) =>{
  return <SearchableLayout>{page}</SearchableLayout>
}