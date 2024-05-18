import Header from "@/components/Header";
import Providers from "@/app/providers";
import Posts from "@/components/dummy/Posts";

export default function Home() {
  return (
    <Providers>
        <main>
            <Header />
            <Posts />
        </main>
    </Providers>
  );
}
