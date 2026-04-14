import Banner from "@/components/Banner";
import FriendState from "@/components/FriendState";

export const metadata = {
  title: "Home -kinKeeper",
};

export default function Home() {
  return (
    <div>
      <Banner />
      <FriendState />
    </div>
  );
}
