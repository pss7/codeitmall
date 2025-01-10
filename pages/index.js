import Head from 'next/head';
import ProductList from '@/components/ProductList';
import SearchForm from '@/components/SearchForm';
import axios from '@/lib/axios';
import styles from '@/styles/Home.module.css';

export async function getStaticProps() {

  const res = await axios.get('/products');
  const products = res.data.results;

  return {
    props: {
      products,
    }
  }

}

export default function Home({ products }) {

  return (
    <>
      <Head>
        <title>Codeitmall</title>
      </Head>
      <SearchForm />
      <ProductList className={styles.products} products={products} />
    </>
  )
}
