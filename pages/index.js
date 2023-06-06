
import HeadMeta from '@components/headMeta/HeadMeta'; 
import Header from '@components/header/Header'
import Footer from '@components/footer/Footer'
import Contact from '@components/contact/Contact'
import About from '@components/about/About'
import Cart from '@components/cart/Cart'

export default function Home() {
  return (
    <div className="container">
      <HeadMeta pageTitle="home page"/>

      <main>
        <Header title="Welcome to my app!" />
        <Cart/>
        <p className="description">
          Get started by editing <code>pages/index.js</code>
        </p>
        <About/>
        <Contact/>
      </main>

      <Footer />
    </div>
  )
}
