import Image from 'next/image'
import Link from 'next/link'

export default function ConfirmEmail() {
    return (
        <div className="flex flex-col items-center justify-between gap-6 p-6 utility-border rounded-2xl max-w-[600px] mx-auto mt-[10vh]">
            <Image src="/img/Logo.svg" width={82} height={200} alt="logo" />
            <div>
                <h1 className='font-bold text-3xl text-center mt-4'>Check Email</h1>
                <p className='text-sm mt-3 text-center'>Check your Email inbox and click on the link to confirm your email address. Don’t see any mail? click <button className='font-semibold'>resend confirmation email</button></p>
            </div>

            <Link href="/login" className='bg-primary-base py-4 px-7 text-white rounded font-semibold'>Login here</Link>
        </div>
    )
}