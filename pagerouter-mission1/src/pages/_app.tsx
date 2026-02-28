import GlobalLayout from "@/component/global-layout";
import "@/styles/globals.css";
import { NextPage } from "next";
import type { AppProps } from "next/app";
import { ReactNode } from "react";

type NextPageWithLayout = NextPage & { 
  //getLayout이라는 타입이 존재할것임을 추가
  // typeScript 타입 union 같은것..?
  // getLayout이라는 타입이 없을 수도 있으니 ?처리
  getLayout?: (page: ReactNode) => ReactNode;
}

export default function App({ Component, pageProps }: AppProps & { Component: NextPageWithLayout}) {

  const getLayout = Component.getLayout ?? ((page : ReactNode)=>page);

  return <GlobalLayout>
    {
      getLayout( <Component {...pageProps} />)
    }
  </GlobalLayout> 
}
