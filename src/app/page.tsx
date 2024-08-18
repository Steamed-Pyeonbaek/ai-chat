import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      Landing Page
      <div>
        <Link href="/dashboard">
          메인으로 이동
        </Link>
      </div>
    </div>
  );
}
