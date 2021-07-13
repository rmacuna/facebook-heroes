import Head from "next/head";
import Image from "next/image";
import FacebookTextLogo from "../assets/facebook_logo.svg";

export default function Home() {
  return (
    <>
      <Head>
        <title>_Facebook</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="h-screen bg-offWhite">
        <nav className="pt-4 ">
          {/* NavigationBar */}
          <div className="max-w-7xl px-4 mx-auto xl:max-w-7xl">
            <div className="flex justify-between items-center">
              {/* Primary Navigation */}
              <div className="flex items-center ">
                {/* Facebook logo...*/}
                <div className="pr-5">
                  <Image
                    src={FacebookTextLogo}
                    alt="facebook_logo"
                    width="189"
                    height="66"
                  />
                </div>

                {/* Navigation list  */}
                <ul className="flex ">
                  <li className="text-gray-500 hover:text-gray-900 text-sm pr-8 font-medium  cursor-pointer">
                    Messenger
                  </li>
                  <li className="text-gray-500 hover:text-gray-900 text-sm pr-8 font-medium cursor-pointer">
                    Facebook Lite
                  </li>
                  <li className="text-gray-500 hover:text-gray-900 text-sm pr-8 font-medium cursor-pointer">
                    Whatsapp
                  </li>
                  <li className="text-gray-500 hover:text-gray-900 text-sm pr-8 font-medium cursor-pointer">
                    Instagram
                  </li>
                  <li className="text-gray-500 hover:text-gray-900 text-sm pr-8 font-medium cursor-pointer">
                    Careers
                  </li>
                  <li className="text-gray-500 hover:text-gray-900 text-sm pr-8 font-medium cursor-pointer">
                    Others
                  </li>
                </ul>
              </div>

              {/* Language pick up */}
              <div>
                <div className="flex flex-col items-end">
                  <span className="text-xs text-gray-500">Language</span>
                  <span className="flex cursor-pointer items-center text-black">
                    <div className="pr-3">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M2.66663 6L7.99996 11.3333L13.3333 6"
                          stroke="black"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    English
                  </span>
                </div>
              </div>
            </div>
          </div>
        </nav>
        <div className="px-7 pt-20 mx-auto xl:max-w-7xl">
          <div className="flex justify-between ">
            {/* Welcome Header {Component} */}
            <section className="max-w-lg">
              <h1 className="text-4xl leading-x36 font-semibold">
                Facebook te ayuda a{" "}
                <span className="text-blue-500">comunicarte y compartir</span>{" "}
                con las personas que forman parte de tu vida.
              </h1>

              <p className="text-gray-500 pt-3 text-lg">
                ¿No tienes una cuenta todavía?{" "}
                <span className="text-blue-500 font-semibold cursor-pointer">
                  Crea una cuenta aquí
                </span>{" "}
                y comparte los mejores momentos
              </p>
            </section>

            {/* Card of login */}
            <section className="max-w-md w-full h-x443 mx-auto bg-white shadow-md rounded-md px-7 py-10 my-6">
              <h1 className="text-xl font-semibold pb-6">
                Que tal si le envías a alguien un mensaje deseandole un feliz
                día?
              </h1>
              <div></div>
            </section>
          </div>
        </div>
      </main>
      <footer className="flex items-center justify-center w-full h-24 border-t">
        footer
      </footer>
    </>
  );
}
