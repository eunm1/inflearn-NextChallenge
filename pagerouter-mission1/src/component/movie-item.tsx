import { MovieData } from "@/types/movie-types";
import Link from "next/link";
import style from "./movie-item.module.css";

type containterType = {
    type : string;
}

/* 구조분해 할당을 이용하여 타입 설정하는 법 */
export default function MovieItem({
    id,
    title,
    releaseDate,
    company,
    genres,
    subTitle,
    description,
    runtime,
    posterImgUrl,
    type
}:MovieData & containterType){
    return( 
    <Link href={`/movie/${id}`} className={`${style.container}`}>
        <img src={posterImgUrl} alt="" className={style[`img${type}`]} />
        {/* <div>
            <div className={style.title}>{title}</div>
            <div className={style.subTitle}>{subTitle}</div>
            <br/>
            <div className={style.author}>
                {releaseDate} | {company}
            </div>
        </div> */}
    </Link>
    );
}