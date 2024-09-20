import { BaseLayout } from "@/cineplay/lib/containers/BaseLayout/BaseLayout";
import { Movies } from "@/cineplay/lib/containers/Movies/Movies";

export default function Home() {
  return (
    <BaseLayout authenticatedOnly={true} showSearchBar>
      <Movies />
    </BaseLayout>
  );
}
