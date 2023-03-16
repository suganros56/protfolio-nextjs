import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Navbar from '../components/layouts'
import Footer from '../components/footer'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
        <Navbar/>
    <section className="text-gray-400 bg-gray-900 body-font">
    <div className="container mx-auto flex px-20 py-24 md:flex-row flex-col items-center">
      <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <p className="title-font sm:text-xl text-2xl mb-4 font-medium text-grey">Hi, my name is</p>
        <h1 className="title-font sm:text-6xl text-3xl mb-4 font-medium text-white hover:text-blue-300">Roshan Suganthan.</h1>
        <h1 className="title-font sm:text-3xl text-2xl mb-4 font-medium text-white">I build things for the web.
        </h1>
        <p className="mb-8 sm:text-xl leading-relaxed">I’m a software engineer specializing in building (and occasionally designing) performant products with delightful user experiences. Currently, I’m focused on building disruptive, Fintech related products at <a className='text-blue-300' href='https://www.backspace.tech/'>BackSpace Tech.</a></p>

      </div>
      <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
        <img className="object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600"/>
       
      </div>
    </div>
  </section>
  <Footer/>

    
    </>
  )
}
