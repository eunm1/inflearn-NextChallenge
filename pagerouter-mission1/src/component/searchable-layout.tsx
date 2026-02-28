import { useRouter } from "next/router";
import { ReactNode, useEffect, useState } from "react";
import style from "./searchable-layout.module.css"

export default function SearchableLayout({
    children
}:{
    children : ReactNode
}){

    const router = useRouter();
    const [ search, setSearch ] = useState("");
    
    //구조분해할당으로는 타입 지정 불가..? => 구조분해할당은 추론으로..하는건가
    const q = router.query.q as string;

    useEffect(()=>{
        setSearch(q || "");
    },[q]) //query 스트링 q 값이 변할 경우 실행

    const onChangeSearch = (e : React.ChangeEvent<HTMLInputElement>) => {
        //React.ChangeEvent<HTMLInputElement> : input element에서 발생한 change event임을 명시하는 것
        setSearch(e.target.value);
    }

    const onSubmit = () =>{
        if(!search || q === search) return;
        router.push(`/search?q=${search}`);
    }

    const onKeyDown = (e : React.KeyboardEvent<HTMLInputElement>) =>{
        if(e.key === "Enter"){
            onSubmit();
        }
    }

    return (
        <div>
            <div className={style.searchbar_container}>
                <input 
                    value={search} 
                    onChange={onChangeSearch} 
                    onKeyDown={onKeyDown} 
                    placeholder="검색어를 입력하세요 ..." 
                />
                <button onClick={onSubmit}>검색</button>
            </div>
            {children}
        </div>
    );
}