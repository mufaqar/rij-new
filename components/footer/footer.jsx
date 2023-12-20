import React from 'react'
import Container from '../UI/container'
import Link from 'next/link'
import Image from 'next/image'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter, FaYoutube } from "react-icons/fa";
import { FaArrowRightLong, FaEnvelope, FaLocationDot, FaPhone } from 'react-icons/fa6';

const Footer = () => {
  return (
    <footer>
      <div className='py-16 bg-[url("/images/footer-bg.png")] bg-bottom bg-cover bg-no-repeat mix-blend-multiply bg-black/90'>
        <Container className="grid md:grid-cols-4 grid-cols-1 gap-7">
          <div>
            <Link href="#" className="inline-block">
              <Image
                src={"/images/logo-main.png"}
                width={80}
                height={80}
                alt="logo"
                className="w-12 sm:w-16 md:w-20"
              />
            </Link>
            <p className='text-base font-normal text-white/80 my-5'>
            Wij Zijn Een Team Van Gebrevetteerde Instructeurs. Wij Doen Ons Werk Integer, Vriendelijk, Geduldig Met Enthousiasme En Veel Plezier.
            </p>
            <ul className='flex flex-wrap gap-1'>
              <li>
                <Link href="#" className='flex w-[46px] h-[46px] justify-center items-center bg-gray-800 hover:bg-primary text-white  rounded-[5px]'>
                  <FaFacebookF />
                </Link>
              </li>
              <li>
                <Link href="#" className='flex w-[46px] h-[46px] justify-center items-center bg-gray-800 hover:bg-primary text-white  rounded-[5px]'>
                  <FaTwitter />
                </Link>
              </li>
              <li>
                <Link href="#" className='flex w-[46px] h-[46px] justify-center items-center bg-gray-800 hover:bg-primary text-white  rounded-[5px]'>
                  <FaLinkedinIn />
                </Link>
              </li>
              <li>
                <Link href="#" className='flex w-[46px] h-[46px] justify-center items-center bg-gray-800 hover:bg-primary text-white  rounded-[5px]'>
                  <FaInstagram />
                </Link>
              </li>
              <li>
                <Link href="#" className='flex w-[46px] h-[46px] justify-center items-center bg-gray-800 hover:bg-primary text-white  rounded-[5px]'>
                  <FaYoutube />
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h6 className='text-2xl font-semibold text-white title_underline'>
              Our Courses
            </h6>
            <ul className='flex flex-col gap-4 mt-5'>
              <li>
                <Link href="#" className='flex gap-2 text-base text-white/80 hover:text-primary items-center'>
                  <FaArrowRightLong /> Defensive Driving
                </Link>
              </li>
              <li>
                <Link href="#" className='flex gap-2 text-base text-white/80 hover:text-primary items-center'>
                  <FaArrowRightLong /> Professional Driving
                </Link>
              </li>
              <li>
                <Link href="#" className='flex gap-2 text-base text-white/80 hover:text-primary items-center'>
                  <FaArrowRightLong /> Truck Driving
                </Link>
              </li>
              <li>
                <Link href="#" className='flex gap-2 text-base text-white/80 hover:text-primary items-center'>
                  <FaArrowRightLong /> Initial Driving Lesson
                </Link>
              </li>
              <li>
                <Link href="#" className='flex gap-2 text-base text-white/80 hover:text-primary items-center'>
                  <FaArrowRightLong /> Traffic Science
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h6 className='text-2xl font-semibold text-white title_underline'>
              Contact Us
            </h6>
            <ul className='flex flex-col gap-4 mt-5'>
              <li className='flex gap-2 text-base text-white/80 items-center'>
                <span className='flex min-w-[30px] min-h-[30px] justify-center items-center bg-gray-800 text-primary  rounded-[5px]'>
                  <FaLocationDot />
                </span>Warandestraat 33 2300 Turnhout (Kempen)
              </li>
              <li className='flex gap-2 text-base text-white/80 items-center'>
                <span className='flex min-w-[30px] min-h-[30px] justify-center items-center bg-gray-800 text-primary  rounded-[5px]'>
                  <FaPhone />
                </span>
                <span><Link href="#"> + 014 74 92 63</Link> <br />
                  <Link href="#">+ 0468 204 401</Link>
                </span>
              </li>
              <li className='flex gap-2 text-base text-white/80 items-center'>
                <span className='flex min-w-[30px] min-h-[30px] justify-center items-center bg-gray-800 text-primary  rounded-[5px]'>
                  <FaEnvelope />
                </span> <Link href="#"> turnhout@rijschoolmenig.be</Link>
              </li>
            </ul>
          </div>
          <div>
            <h6 className='text-2xl font-semibold text-white title_underline'>
              Newsletter
            </h6>
            <p className='text-base font-normal text-white/80 my-5'>
              Sign up to get update news about us
            </p>
            <form>
              <div className="w-full">
                <label htmlFor='name' className="text-sm font-medium leading-none hidden">Name</label>
                <input
                  className="text-base font-normal shadow-[0px_0px_30px_rgba(191,191,191,0.3)] bg-white px-5 py-4 border border-transparent focus:border focus:border-black/10 outline-none rounded-[5px] w-full"
                  type="text"
                  id='name'
                  placeholder="Geef uw naam en voornaam in ..." />
              </div>
              <button type='submit' className="text-base font-semibold text-white bg-primary hover:bg-white hover:text-primary px-4 py-4 rounded-[5px] w-full mt-4">
                SUBMIT
              </button>
            </form>
          </div>
        </Container>
      </div>
      <div className='py-7 bg-gray-800'>
        <Container>
          <div>
            <p className='text-base font-normal text-white/80 text-center'>
              © 2022 Rijschool Menig | * Voorwaarden
              powered by www.DIGIREBEL.be
            </p>
          </div>
        </Container>
      </div>
    </footer>
  )
}

export default Footer