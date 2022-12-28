import Head from "next/head";

export default function Home() {
  return (
    <div className=''>
      <Head>
        <title>Create Next App</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <header>
        <h1 className='text-3xl font-bold'>HEADER</h1>
      </header>

      <main>
        <h1 className='text-2xl font-bold'>MAIN</h1>
      </main>

      <footer>
        <h1 className='text-1xl font-bold'>FOOTER</h1>
      </footer>
    </div>
  );
}
