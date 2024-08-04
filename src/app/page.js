import Image from "next/image";
import Link from 'next/link';
import arabteclogo from "./img/Group 6356172.svg"

export default function Home() {
  return (
      <div className="main-dash d-flex  contain">

        <div className="background mt-3  me-3 d-flex justify-content-center align-items-center ">
          <div className="text d-flex  ">
            <Image src={arabteclogo.src} alt="Arabtec Logo" width={91.504} height={56.964} />
            <p className="text-white  ms-2 mt-3">arabtec</p>
          </div>
        </div>
        <div className="login mt-3  me-1">
          <div className="text-login  d-flex flex-column container">
            <p className="x mb-0">Login</p>
            <p className="y">welcome to arabtec panel</p>

            <div className="email mb-2">
              <p className="em-text mb-1">Email</p>
              <input type="email" className="em-input mb-3  " placeholder="Enter your email" />
            </div>
            <div className="password ">
              <p className="ps-text mb-1">Password</p>
              <input type="password" className="ps-input  " placeholder="Enter your password" />
            </div>
            <div className="d-flex justify-content-end ">

              <Link href="/dashboard" className="d-flex flex-row justify-content-center align-items-center gap-4 button ">login <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M3.56249 13.4062H17.7469L14.3648 9.11719C14.2687 8.99531 14.3555 8.8125 14.5125 8.8125H16.0312C16.2609 8.8125 16.4789 8.91797 16.6195 9.09844L20.4633 13.9734C20.85 14.4656 20.5008 15.1875 19.875 15.1875H3.56249C3.45936 15.1875 3.37499 15.1031 3.37499 15V13.5938C3.37499 13.4906 3.45936 13.4062 3.56249 13.4062Z" fill="white" />
              </svg>
              </Link>

            </div>
          </div>
        </div>
      </div>
  )
}
