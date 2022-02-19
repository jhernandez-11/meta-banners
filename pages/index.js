import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
import Script from 'next/script'
import LayoutOne from '../src/layout/Layout'
import PageOne from '../src/layout/pageOne/index'
import PageTwo from '../src/layout/pageTwo/index'
import PageThree from '../src/layout/pageThree/index'
import PageFour from '../src/layout/pageFour/index'
import PageFive from '../src/layout/pageFive/index'
import PageSix from '../src/layout/pageSix/index'

export default function Home() {
  return (
    <React.Fragment>
      <LayoutOne>
        <PageOne />
        <PageTwo />
        <PageThree />
        <PageFour />
        <PageFive />
        <PageSix />
      </LayoutOne>
      <Script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js" integrity="sha512-894YE6QWD5I59HgZOGReFYm4dnWc1Qt5NtvYSaNcOP+u1T9qYdvdihz0PPSiiqn/+/3e7Jo4EaG7TubfWGUrMQ==" crossorigin="anonymous" referrerpolicy="no-referrer" strategy="beforeInteractive"></Script>
      <Script src="https://cdnjs.cloudflare.com/ajax/libs/velocity/2.0.6/velocity.min.js" integrity="sha512-+VS2+Nl1Qit71a/lbncmVsWOZ0BmPDkopw5sXAS2W+OfeceCEd9OGTQWjgVgP5QaMV4ddqOIW9XLW7UVFzkMAw==" crossorigin="anonymous" referrerpolicy="no-referrer" strategy="beforeInteractive"></Script>
      <Script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js" strategy="beforeInteractive" />
      <Script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js" strategy="beforeInteractive" />
    </React.Fragment>
    
  )
}
