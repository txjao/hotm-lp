"use client";
import dynamic from 'next/dynamic'
 
const NoSSR = dynamic(() => import('./app'), { ssr: false })


export default function Home() {
  return (
    <>
      <NoSSR />
    </>
  );
}
