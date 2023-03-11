import Head from 'next/head';
import { NavBar } from '@/components/NavBar';
import { Landing } from '@/components/Landing';

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <nav>
          {/* <NavBar /> */}
        </nav>
      </header>
      <main>
        <Landing />
      </main>
      <footer>
        <nav>
          {/* <NavBar /> */}
        </nav>
      </footer>
    </>
  );
}