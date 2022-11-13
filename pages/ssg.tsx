import { GetStaticProps, NextPage, NextPageContext } from 'next';
import Head from 'next/head';
type SSGProps = {
    message: string;
};

const SSG: NextPage<SSGProps> = (props) => { 
    const { message } = props;
    return (
        <div>
            {/* headコンポーネントで包むとその要素はheadタグにいく*/}
            <Head>
                <title>ssg</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <p>このページは静的サイト生成によってビルド時に生成されたページです。</p>
                <p>{message}</p>
            </main>
        </div>
    );
};
export const getStaticProps: GetStaticProps<SSGProps> = async (context) => {
    const timestamp = new Date().toLocaleString();
    const message = `${timestamp} にgetStaticPropsが実行されました`;
    console.log(message);
    return {
        props: {
         message,
        },
    };
};


export default SSG;
