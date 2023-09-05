import Image from 'next/image'
import Link from 'next/link';
import * as React from 'react'
import { UseSelector, useSelector } from 'react-redux';


export default function Home() {
  const {token} = useSelector(state => state.user)
  return (
      <main className='dark:bg-gray-900'>
        {/* Navigation Bar */}
        {/* {token} */}
        <nav>
          <div className='max-w-auto px-50 mx-auto dark:bg-gray-900 flex justify-between'>
            <div className='flex justify-center space-x-6'>
              {/* Logo */}
              <div className='mx-8 p-2'>
                <Image src={'/resumora_logo.png'} width={'200'} height={'200'} alt='' />
                <Link href={"/"}></Link>
              </div>

              {/* Primary Nav Bar */}
              <div className='text-white flex items-center space-x-5 ml-10'>
                <a href='#' className='hover:bg-[#2f4454] py-1 px-4 rounded-md transition ease-in-out delay-50 hover:-translate-x-1 hover:scale-10'>Home</a>
                <a href='#' className='hover:bg-[#2f4454] py-1 px-4 rounded-md transition ease-in-out delay-50 hover:-translate-x-1 hover:scale-10'>Templetes</a>
                <a href='#' className='hover:bg-[#2f4454] py-1 px-4 rounded-md transition ease-in-out delay-50 hover:-translate-x-1 hover:scale-10'>Offers</a>
              </div>

              {/* Secondary Nav Bar */}
            </div>
            <div className='text-white flex items-center space-x-5 mx-10'>
              <Link href="/login" className='hover:bg-[#2f4454] py-2 px-7 rounded-2xl transition ease-in-out delay-100 hover:-translate-x-1 hover:scale-10'>Login</Link>

              <Link href="/register" className="text-center pt-1 relative w-28 h-9 hover:bg-[#2f4454] hover:text-white focus:outline-none border-2 border-white-700 rounded-2xl transition duration-300">
                <span className="absolute -right-2  h-3 w-3">
                  <span className="animate-ping absolute  -bottom-2 -left-1  inline-flex h-5 w-5 rounded-full bg-purple-400 opacity-100"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
                </span>
                <span className="text-white-90">Sign Up</span>
              </Link>
            </div>
          </div>
        </nav>
        {/* End of Navigation Bar */}

        <div className='text-white pt-28 pb-16'>
          <div className='flex justify-center text-7xl font-bold'>
            <h1>FREE &nbsp;</h1>
            <h1 className='bg-red'>RESUME</h1>
            <h1>&nbsp;BUILDER.</h1>
          </div>
          <p className='text-center my-7'>Showcase your achievements and unique experiences with a stunning resume made using RESUMORA. No experience required.</p>
        </div>

        {/* Make a resume button */}
        <div>
          <div className='flex justify-center'>
            <Link href={'/resume'} className='text-white bg-red-900 hover:bg-red-800 px-7 py-3 rounded-3xl animate-bounce'>Make a Resume Now</Link>
          </div>
          <div className='mt-7'>
            <h1 className='text-center text-2xl font-bold text-[#123C69]'>Get noticed with the RESUMORA free online resume maker.</h1>
            <p className='text-center text-gray-200 mt-1'>Cut down the time it takes to make an impressive resume and land your dream job with the free online resume builder.</p>
            <p className='text-center text-gray-200'>With tons of professionally designed resume templates ready for you to customize,you’ll be able</p>
            <p className='text-center text-gray-200'>to showcase your experience, skills, and knowledge front and center.</p>
          </div>
          <div className='text-white flex justify-center mt-8 mb-10 '>
            <a href=''>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class=" animate-bounce w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5" />
              </svg>
            </a>
          </div>
        </div>

        {/* Jumborton */}
        <section className="bg-gray-50 dark:bg-gray-800">
          <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 grid lg:grid-cols-2 gap-8 lg:gap-16">
            <div className="flex flex-col justify-center">
              <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Personalize your job applications with us.</h1>
              <p className="mb-6 text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">Confidently send off an eye-catching resume made by us. Browse from a wide collection of free, contemporary resume templates in the editor until you’ve landed on one that represents you and your professional experiences the best.</p>
              <a href="#" className="text-blue-600 dark:text-red-500 hover:underline font-medium text-lg inline-flex items-center">Wants to know more about us?
                <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                </svg>
              </a>
            </div>
            <div>
              <div className="w-full lg:max-w-xl p-6 space-y-8 sm:p-8 bg-white rounded-lg shadow-2xl dark:bg-gray-800">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Sign in to Resumora
                </h2>
                <form className="mt-8 space-y-6" action="#">
                  <div>
                    <label for="email" className="block mb-2 text-semibold font-small text-gray-900 dark:text-white">Email address</label>
                    <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-900 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-800 dark:border-gray-700 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue" placeholder="" required="" />
                  </div>
                  <div>
                    <label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                    <input type="password" name="password" id="password" placeholder="" className="bg-gray-50 border border-gray-900 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-800 dark:border-gray-700 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                  </div>
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input id="remember" aria-describedby="remember" name="remember" type="checkbox" className="w-4 h-4 border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600" required />
                    </div>
                    <div className="ml-3 text-sm">
                      <label for="remember" className="text-gray-400 dark:text-gray-300">Remember me</label>
                    </div>
                    <a href="#" className="ml-auto text-sm font-medium text-white hover:underline">Forgot password?</a>
                  </div>
                  <button type="submit" className="w-full text-white bg-gray-700 hover:bg-[#2f4454] focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Sign in</button>
                  <p className="text-sm font-light text-gray-300 dark:text-gray-200">
                    Not a member? <Link href="/register" className="font-medium text-primary-600 hover:underline dark:text-red-500"> &nbsp;Sign up</Link>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </section>
        {/* End of Jumborton */}

        {/* Cards */}
        <div className='flex justify-center mt-20'>
          <a className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-68xl h-60 dark:border-gray-700 dark:bg-gray-800 ">
            <Image className='rounded-lg mx-10' width={300} height={200} src="/2.png" alt="" />
            <div className="flex flex-col justify-between p-4 leading-normal">
              <h1 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Take your designs to the next level.</h1>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Resumes are the perfect opportunity to tell recruiters who you are before you chat with them.</p>
            </div>
          </a>
        </div>
        {/* End of Cards  */}

        {/* Timeline */}
        <div className="mx-32 mt-20 mb-20">
          <h1 className="flex justify-left text-3xl dark:text-white font-bold" >What to include on a professional resume?</h1>
          <ol className="relative border-l border-gray-200 dark:border-gray-700 mt-7">
            <li className="mb-10 ml-4">
              <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">What is a resume?</h3>
              <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">A resume is a document that provides a summary of a person’s work experience, skills, education, and accomplishments. Resumes are typically used when applying for a job to showcase an individual’s qualifications for a specific role.</p>
            </li>
            <li className="mb-10 ml-4">
              <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Your contact information.</h3>
              <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">Contact information might includes your Email, Phone Number, Postal Code and Address.</p>
            </li>
            <li className="mb-10 ml-4">
              <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">A professional summary that shows them who you are.</h3>
              <p className="text-base font-normal text-gray-500 dark:text-gray-400">Write briefly about who you are and give your short introduction which might include your passion towards the works.</p>
            </li>
            <li className="mb-10 ml-4">
              <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">All of your professional experiences, aligned to the job you’re applying for.</h3>
              <p className="text-base font-normal text-gray-500 dark:text-gray-400">Get started with dozens of web components and interactive elements built on top of Tailwind CSS.</p>
            </li>
            <li className="mb-10 ml-4">
              <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Skills, education, and notable projects..</h3>
              <p className="text-base font-normal text-gray-500 dark:text-gray-400">Write briefly about who you are and give your short introduction which might include your passion towards the works.</p>
            </li>
            <li className="mb-10 ml-4">
              <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Any certifications or qualifications.</h3>
              <p className="text-base font-normal text-gray-500 dark:text-gray-400">Write briefly about who you are and give your short introduction which might include your passion towards the works.</p>
            </li>
            <li className="mb-10 ml-4">
              <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">How far back should a resume go?</h3>
              <p className="text-base font-normal text-gray-500 dark:text-gray-400">In general, it is best practice to include experience from the past 10 to 15 years in your resume.</p>
            </li>
            <li className="mb-10 ml-4">
              <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">How long should a resume be?</h3>
              <p className="text-base font-normal text-gray-500 dark:text-gray-400">The ideal length for a resume is generally one to two pages.</p>
            </li>
          </ol>
        </div>
        {/* End of Timeline */}

        {/* Testiminals  */}
        <figure className="max-w-screen-md mx-auto text-center mt-10 mb-10">
          <svg class="w-10 h-10 mx-auto mb-3 text-gray-400 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 14">
            <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
          </svg>
          <blockquote>
            <p class="text-2xl italic font-medium text-gray-900 dark:text-white">"Resumora is just awesome. The sky is the limit when it comes to creating the perfect resume with it. Perfect choice for applying your next job application."</p>
          </blockquote>
          <figcaption class="flex items-center justify-center mt-6 space-x-3">
            <Image class="rounded-full" width={50} height={50} src="/small_logo.png" alt="profile picture" />
            <div class="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
              <cite class="pr-3 font-medium text-gray-900 dark:text-white">Kaylin Khanal</cite>
              <cite class="pl-3 text-sm text-gray-500 dark:text-gray-400">CEO at Broadway Infosis</cite>
            </div>
          </figcaption>
        </figure>
        {/* End of Testiminals  */}

        {/* Footer  */}
        <footer className="bg-white rounded-lg shadow dark:bg-gray-900 m-4">
          <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
            <div className="sm:flex sm:items-center sm:justify-between">
              {/* Logo */}
              <div className='mx-8 p-2'>
                <Link href={"/s"}>
                  <Image src={'/resumora_logo.png'} width={'180'} height={'180'} alt='' />
                </Link>
              </div>
              <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                <li>
                  <a href="#" className="mr-4 hover:underline md:mr-6 ">About</a>
                </li>
                <li>
                  <a href="#" className="mr-4 hover:underline md:mr-6">Privacy Policy</a>
                </li>
                <li>
                  <a href="#" className="hover:underline">Contact</a>
                </li>
              </ul>
            </div>
            <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
            <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="" className="hover:underline">Resumora™</a>. All Rights Reserved.</span>
          </div>
        </footer>
        {/* End of Footer  */}

      </main>
  )
}