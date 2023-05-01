import Head from "next/head"
import { PageLayoutWrapper, PageLayoutHeader, PageLayoutContent } from "@/components/Layouts"

export default function Home() {
  return (
    <>
      <Head>
        <title>The Tab Progress</title>
        <meta name="description" content="Track your progress" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PageLayoutWrapper>
        <PageLayoutHeader title={"Header"} />
        <PageLayoutContent child={<div>Content</div>} />
      </PageLayoutWrapper>
    </>
  )
}
