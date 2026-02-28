import { useRouter } from "next/router"
import style from './[id].module.css'
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { ReactNode, useEffect, useState } from "react"
import dummyMovie from "../../../dummy/dummy.json"

// ** 방법1 ID를 가지고 서버에서 API 데이터를 미리 불러와야 할 때 (getServerSideProps)
export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.query;
  console.log("서버(터미널)에서 찍히는 ID:", id);
//   console.log(dummyMovie)
  const movie = dummyMovie.find((item) => String(item.id) === String(id))

  if(!movie){ //book이 없는 경우에 notFound 페이지를 보이고 싶은 경우 처리 방법
    return {
        notFound : true,
    }
}

  return {
    props: { movie },
  };
};

export default function Page({ movie }: InferGetServerSidePropsType<typeof getServerSideProps>){
    const {
        id,
        title,
        subTitle,
        company,
        runtime,
        description,
        posterImgUrl,
        releaseDate,
        genres,
    } = movie;

    return (
        <div className={style.container}>
            <div className={style.cover_img_container} style={{ backgroundImage: `url('${posterImgUrl}')` }}>
                 <img src={posterImgUrl} alt="" />
            </div>
            <div className={style.info_container}>
                <h2>{title}</h2>
                <div> {releaseDate} / {genres.join(", ")} / {runtime}분 </div>
                <div>{company}</div>
            </div>
            <div className={style.subTitle}>{subTitle}</div>
            <div className={style.description}>{description}</div>
        </div>
    )
}

// ** 방법 2 단순히 화면 UI를 그리거나 브라우저에서 로직을 짤 때 (useRouter)
// export default function Page(){
//     const router = useRouter();

//     const { id } = router.query; // 파일명이 [id].tsx 이므로 query.id로 접근

//     // router.query가 처음에는 빈 객체일 수 있으므로 useEffect 안에서 찍는 것이 정확합니다.
//     useEffect(() => {
//         if (id) {
//         console.log("현재 페이지의 ID:", id);
//         }
//     }, [id]);
    
//     return (
//         <div>Movie ID: {id}</div>
//     )
// }