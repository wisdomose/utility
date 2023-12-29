import Image from 'next/image'
import Link from 'next/link'

export default function Login() {
  return (
    <main className="flex flex-col items-center justify-between gap-6 p-6 utility-border rounded-2xl max-w-[600px] mx-auto my-[10vh]">
      <Image src="/img/Logo.svg" width={82} height={200} alt="logo" />
      <div>
        <h1 className='font-bold text-3xl text-center'>Welcome back</h1>
        <p className='text-sm mt-3 text-center'>Please enter your details</p>
      </div>

      <form className='w-full flex flex-col gap-6'>
        <div>
          <label htmlFor="email" className='block mb-2 text-sm font-medium'>Email</label>
          <input type="email" name="email" id="email" placeholder='johndoe@email.com' className='bg-primary-base/5 py-4 px-4 w-full placeholder:text-sm text-sm outline-none focus:bg-primary-base/10 rounded' />
        </div>
        <div>
          <label htmlFor="password" className='block mb-2 text-sm font-medium'>Password</label>
          <input type="password" name="password" id="password" placeholder='........' className='bg-primary-base/5 py-4 px-4 w-full placeholder:text-sm text-sm outline-none focus:bg-primary-base/10 rounded' />
        </div>

        <Link href="/forgot-password" className='text-xs text-right'>Forgot password?</Link>

        <input type="submit" value="Login" className='bg-primary-base w-full p-4 text-white rounded font-semibold' />

        <p className='text-center text-sm'>Don’t have an account? <Link href="/" className='font-semibold hover:underline'>Sign Up</Link></p>
      </form>
    </main>
  )
}
