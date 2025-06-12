import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className='w-full border-t py-6 md:py-8'>
      <div className='container px-4 md:px-6'>
        <div className='grid gap-8 md:grid-cols-2 lg:grid-cols-4'>
          <div className='space-y-4'>
            <Image
              src={"/images/biroblack.svg"}
              alt=''
              width={150}
              height={50}
              className={cn("", "block dark:hidden")}
              style={{ zIndex: 2 }}
            />
            {/* White logo */}
            <Image
              src={"/images/birowhite.svg"}
              alt=''
              width={150}
              height={50}
              className={cn("", "hidden dark:block")}
              style={{ zIndex: 2 }}
            />
            <p className='text-sm text-muted-foreground'>
              Empowering the next generation of tech professionals with
              cutting-edge education and practical skills.
            </p>
          </div>
          <div className='space-y-4'>
            <h3 className='text-lg font-medium'>Quick Links</h3>
            <ul className='space-y-2 text-sm'>
              <li>
                <Link
                  href='/'
                  className='text-muted-foreground hover:text-foreground transition-colors'
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href='/courses'
                  className='text-muted-foreground hover:text-foreground transition-colors'
                >
                  Courses
                </Link>
              </li>
              <li>
                <Link
                  href='/about'
                  className='text-muted-foreground hover:text-foreground transition-colors'
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href='https://api.whatsapp.com/send/?phone=2349081893000&text&type=phone_number&app_absent=0'
                  className='text-muted-foreground hover:text-foreground transition-colors'
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className='space-y-4'>
            <h3 className='text-lg font-medium'>Resources</h3>
            <ul className='space-y-2 text-sm'>
              <li>
                <Link
                  href='/apply'
                  className='text-muted-foreground hover:text-foreground transition-colors'
                >
                  Apply
                </Link>
              </li>
              <li>
                <Link
                  href='#'
                  className='text-muted-foreground hover:text-foreground transition-colors'
                >
                  Student Resources
                </Link>
              </li>
              <li>
                <Link
                  href='#'
                  className='text-muted-foreground hover:text-foreground transition-colors'
                >
                  Career Services
                </Link>
              </li>
              <li>
                <Link
                  href='#'
                  className='text-muted-foreground hover:text-foreground transition-colors'
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
          <div className='space-y-4'>
            <h3 className='text-lg font-medium'>Contact</h3>
            <ul className='space-y-2 text-sm'>
              <li className='text-muted-foreground'>
                HFP Shopping Complex
                <br />
                Ajah, Lagos, Nigeria.
              </li>
              <li className='text-muted-foreground'>
                birotojobintegrated@gmail.com
              </li>
              <li className='text-muted-foreground'>+234 908 189 3000</li>
            </ul>
          </div>
        </div>
        <div className='mt-8 border-t pt-8 flex flex-col md:flex-row justify-between items-center gap-4'>
          <p className='text-xs text-muted-foreground'>
            © {new Date().getFullYear()} BirotoJob Academy. All rights reserved.
          </p>
          <div className='flex gap-4'>
            <Link
              href='#'
              className='text-xs text-muted-foreground hover:text-foreground transition-colors'
            >
              Privacy Policy
            </Link>
            <Link
              href='#'
              className='text-xs text-muted-foreground hover:text-foreground transition-colors'
            >
              Terms of Service
            </Link>
            <Link
              href='#'
              className='text-xs text-muted-foreground hover:text-foreground transition-colors'
            >
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
