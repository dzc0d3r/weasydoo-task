import {auth} from "@/auth"

async function Page(): Promise<JSX.Element> {
  const session = await auth()
  
  return (
    <section className='flex flex-col container mx-auto' >
        <h1 className='text-3xl mt-5'>Welcome {session?.user.username}</h1>
        <p className='text-xl'> You&apos;re signed as {session?.user.role}</p>
    </section >
  )
}

export default Page