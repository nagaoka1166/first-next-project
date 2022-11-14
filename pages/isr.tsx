// return (
//     <div>
//         <Head>
//             <title>Create Next App</title>
//             <link rel= "icon" href="/favicon.ico" />
//         </Head>
//         <main>
//             <p>このページはISRによってビルド時に生成されたページです。</p>
//         </main>
//     </div>
//         )
//     }
    
//     export const getStaticProps: GetStaticProps<ISRProps> = async (context) => {
//         const timestamp = new Date().toLocaleString()
//         const message = `${timestamp}にこのページのgetstaticpropsが実行されました`
//         return {
//             props: {
//                 message,
//             },
//             revalidate: 60,
//         }
//     }
    
//     export default ISR