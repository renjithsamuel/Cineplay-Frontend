import { BaseLayout } from "@/cineplay/lib/containers/BaseLayout/BaseLayout";

export default function Home() {
  return <BaseLayout authenticatedOnly={true} showSearchBar></BaseLayout>;
}
