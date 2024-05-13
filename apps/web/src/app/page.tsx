
import { Button } from "@fakestore/ui/components/button";
import {auth} from "@/auth"




export default async function Page(): Promise<JSX.Element> {
  const session = await auth()


  return (
    <main className="container mx-auto relative min-h-screen">
      <div>
        <p>{JSON.stringify(session)}</p>
        <p>{session?.sessionToken?.name}</p>
        <h2 className="text-3xl m-5">
          web using shared ui packages (via shadcn)
        </h2>
        <Button className="flex mx-auto"> Great</Button>
      </div>
      
      
    </main>

  );
}
