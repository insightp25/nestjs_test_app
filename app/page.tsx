import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "next.js test app build",
  description: "next.js 튜토리얼 테스트앱 개발하기"
};

export default function Home() {

  return 
  <main>
    Home
    <Link href="/dashboard">go to dashboard</Link>
  </main>;
}
