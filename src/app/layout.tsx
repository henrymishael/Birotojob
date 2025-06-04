import type { Metadata } from "next";
import { Inter, Quicksand } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { ThemeProvider } from "@/components/theme-provider";
import { NavigationProvider } from "@/hooks/services";
import { Toaster } from "sonner";

const inter = Inter({ subsets: ["latin"] });
const quicksand = Quicksand({ subsets: ["latin", "latin-ext", "vietnamese"] });

export const metadata: Metadata = {
  title:
    "Birotojob Academy - Premier Tech Education & Programming Bootcamp | Learn Coding Online",
  description:
    "Transform your career with Birotojob Academy's comprehensive tech courses. Master Full-Stack Development, Data Science, Cloud Computing, AI/ML, and more. Industry-recognized certifications, expert instructors, and 95% job placement rate. Enroll now!",
  keywords: [
    "tech courses online",
    "programming bootcamp",
    "coding academy",
    "web development course",
    "data science training",
    "full stack developer course",
    "learn programming online",
    "tech certification",
    "career change to tech",
    "coding bootcamp",
    "software development training",
    "python programming course",
    "react js course",
    "machine learning course",
    "cybersecurity training",
    "cloud computing course",
    "devops training",
    "tech education",
    "online coding school",
    "programming classes",
  ],
  metadataBase: new URL("https://academy.birotojob.com"),

  authors: [{ name: "Birotojob Academy" }],
  creator: "Birotojob Academy",
  publisher: "Birotojob Academy",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://academy.birotojob.com",
    siteName: "Birotojob Academy",
    title: "Birotojob Academy - Premier Tech Education & Programming Bootcamp",
    description:
      "Transform your career with comprehensive tech courses. Master Full-Stack Development, Data Science, AI/ML, and more. 95% job placement rate. Enroll now!",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Birotojob Academy - Tech Education Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Birotojob Academy - Premier Tech Education & Programming Bootcamp",
    description:
      "Transform your career with comprehensive tech courses. Master Full-Stack Development, Data Science, AI/ML, and more. 95% job placement rate.",
    images: ["/og-image.jpg"],
    creator: "@birotojobacademy",
  },
  alternates: {
    canonical: "https://academy.birotojob.com",
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "EducationalOrganization",
      "@id": "https://academy.birotojob.com/#organization",
      name: "Birotojob Academy",
      alternateName: "Birotojob Tech Academy",
      url: "https://academy.birotojob.com",
      logo: {
        "@type": "ImageObject",
        url: "https://academy.birotojob.com/logo.png",
        width: 200,
        height: 200,
      },
      description:
        "Premier tech education platform offering comprehensive programming bootcamps, coding courses, and professional development programs with industry-recognized certifications.",
      address: {
        "@type": "PostalAddress",
        addressCountry: "US",
      },
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "Admissions",
        email: "birotojobintegrated@gmail.com",
      },
      sameAs: [
        "https://facebook.com/birotojob",
        "https://twitter.com/birotojob",
        "https://linkedin.com/company/birotojob",
        "https://instagram.com/birotojob",
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://academy.birotojob.com/#website",
      url: "https://academy.birotojob.com",
      name: "Birotojob Academy",
      description:
        "Premier tech education platform offering comprehensive programming bootcamps and coding courses",
      publisher: {
        "@id": "https://academy.birotojob.com/#organization",
      },
      potentialAction: [
        {
          "@type": "SearchAction",
          target: {
            "@type": "EntryPoint",
            urlTemplate:
              "https://academy.birotojob.com/search?q={search_term_string}",
          },
          "query-input": "required name=search_term_string",
        },
      ],
    },
    {
      "@type": "Course",
      name: "Full-Stack Web Development Bootcamp",
      description:
        "Comprehensive full-stack development course covering React, Node.js, databases, and modern web technologies",
      provider: {
        "@id": "https://academy.birotojob.com/#organization",
      },
      courseMode: "online",
      educationalLevel: "Beginner to Advanced",
      programmingLanguage: ["JavaScript", "Python", "HTML", "CSS"],
      teaches: ["React", "Node.js", "MongoDB", "Express.js", "Git", "AWS"],
      timeRequired: "P12W",
      offers: {
        "@type": "Offer",
        category: "Educational",
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What tech courses does Birotojob Academy offer?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "We offer comprehensive courses in Full-Stack Web Development, Data Science & Machine Learning, Cloud Computing (AWS/Azure), Mobile App Development, DevOps Engineering, Artificial Intelligence, Cybersecurity, Blockchain Development, UI/UX Design, and Python Programming.",
          },
        },
        {
          "@type": "Question",
          name: "What is the job placement rate for graduates?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Birotojob Academy maintains a 95% job placement rate for our graduates, with over 500+ students successfully placed in tech roles at leading companies.",
          },
        },
        {
          "@type": "Question",
          name: "Do I need prior programming experience to enroll?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No prior experience is required. Our courses are designed for complete beginners to advanced learners, with personalized learning paths based on your current skill level.",
          },
        },
        {
          "@type": "Question",
          name: "Are the courses online or in-person?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "We offer live virtual classes that you can join from anywhere in the world. Our interactive online platform provides the same quality education as in-person classes with the flexibility of remote learning.",
          },
        },
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className={quicksand.className}>
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange
        >
          <NavigationProvider>
            <div className='flex min-h-screen flex-col'>
              <Header />
              <main className='flex-1'>{children}</main>
              <Footer />
            </div>
          </NavigationProvider>
        </ThemeProvider>
        <Toaster position='top-right' richColors theme='light' />
      </body>
    </html>
  );
}
