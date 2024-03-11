import "../globals.css";
import Footer from "../ui/dasboard/footer/footer";
import Navbar from "../ui/dasboard/navbar/navbar";
import Sidebar from "../ui/dasboard/slider/slider";

export const metadata = {
  title: "Admin dasboard",
  description: "created by mandip tamang",
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className='bg-slate-900 w-full'>
        <div className='text-white flex w-full items-start '>
          <div className='w-full mx-auto max-w-[16rem] '>
            <Sidebar />
          </div>
          <div className='mx-4 container'>
            <Navbar />
            {children}
            <Footer />
          </div>
        </div>{' '}
      </body>
    </html>
  )
}
