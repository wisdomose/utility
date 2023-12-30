import Button from "@/components/Button";
import Contact from "./Contact";

export default function COntactsPage() {
    return (
        <main>
            <div className="flex max-w-[760px] gap-14 mb-5">
                <div className="w-full bg-primary-dark/5 rounded relative overflow-hidden min-h-14">
                    <input type="text" placeholder="Search for contact" className="bg-transparent absolute inset-0 rounded py-4 pl-4 pr-14" />
                    <svg className="absolute right-4 top-1/2 -translate-y-1/2" width={24} height={25} viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M21.0002 21.5002L16.6572 17.1572M16.6572 17.1572C17.4001 16.4143 17.9894 15.5324 18.3914 14.5618C18.7935 13.5911 19.0004 12.5508 19.0004 11.5002C19.0004 10.4496 18.7935 9.40929 18.3914 8.43866C17.9894 7.46803 17.4001 6.58609 16.6572 5.84321C15.9143 5.10032 15.0324 4.51103 14.0618 4.10898C13.0911 3.70693 12.0508 3.5 11.0002 3.5C9.9496 3.5 8.90929 3.70693 7.93866 4.10898C6.96803 4.51103 6.08609 5.10032 5.34321 5.84321C3.84288 7.34354 3 9.37842 3 11.5002C3 13.622 3.84288 15.6569 5.34321 17.1572C6.84354 18.6575 8.87842 19.5004 11.0002 19.5004C13.122 19.5004 15.1569 18.6575 16.6572 17.1572Z" stroke="#060A31" strokeOpacity="0.6" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </div>
                <div className="flex-shrink-0 hidden md:block">
                    <Button label="Add Contact" />
                </div>
            </div>
            <div className="flex flex-col">
                <Contact />
                <Contact />
                <Contact />
            </div>
        </main>
    )
}