
import HeadMeta from '@components/headMeta/HeadMeta'; 
import Header from '@components/header/Header';
import Product from '@components/product/Product';

export default function Home() {
  return (
    <div className="container">
      <HeadMeta pageTitle="home page"/>
      <Header />
      <Product/>
    </div>
  )
}
