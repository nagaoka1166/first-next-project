import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import { Router, useRouter } from 'next/router' // useRouterというフックを取り込む
import { ParsedUrlQuery } from 'querystring'

type PostProps = {
    id: string
}

const Post: NextPage<PostProps> = (props) => {
    const { id } = props
    const router = useRouter()
    if (router.isFallback) {
        return <div>Loading...</div>
    }
    return (
<div>
    <Head>
        <title>Create Next App</title>
        <link rel= "icon" href="/favicon.ico" />
    </Head>
    <main>
        <p>このページはISRによってビルド時に生成されたページです。</p>
    </main>
</div>
    )
}

export const getStaticPaths: GetStaticProps = async () => {
    const paths = [
        {
            params: {
                id: '1',
            },
        },
        {
            params: {
                id: '2',
            },
        },
        {
            params: {
                id: '3',
            },
            params: {
                id: '4',
            },
        },
    ]
    return { paths, fallback: false}
}
interface PostParams extends ParsedUrlQuery {
    id: string
}
export const getStaticProps: GetstaticProps<PostProps, PostParams> = async (context) => {
    return {
        props: {
            id: context.params!['id'],
        },
    }
 }

export default Post