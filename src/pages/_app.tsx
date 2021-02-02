import Head from 'next/head'
import type { AppProps /*, AppContext */ } from 'next/app'
// react-toastify
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
// react-loader-spinner
// import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
// apollo config
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'
// files
import '../styles/index.css'
// import 'tailwindcss/tailwind.css'

const client = new ApolloClient({
  uri: 'https://api.graphqlplaceholder.com',
  cache: new InMemoryCache(),
})

export default function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <Head>
        <title>Website | Template</title>
        <meta property="og:title" content="My page title" key="title" />
        <link rel="icon" href="favicon.ico" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="favicon.ico" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
        <meta name="twitter:title" content="Roompy | Find your soul roommate" />
        <meta name="twitter:card" content="summary" />
        <meta name="description" content="Deskripsi website." />
        <meta name="twitter:image" content="favicon.ico" />
      </Head>

      <ApolloProvider client={client}>
        <Component {...pageProps} />
        <ToastContainer />
      </ApolloProvider>
    </>
  )
}
