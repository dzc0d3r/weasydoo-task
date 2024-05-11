import { Button } from "@fakestore/ui/components/button";

export default function Page(): JSX.Element {
  return (
    <main className="min-h-screen grid place-content-center">
      <div>
        <h2 className="text-3xl m-5">
          web using shared ui packages (via shadcn)
        </h2>
        <Button className="flex mx-auto"> Great</Button>
      </div>
    </main>
  );
}
