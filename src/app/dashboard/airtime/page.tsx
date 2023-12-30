import Input from "@/components/Input";
import SavedContacts from "./SavedContacts";
import Button from "@/components/Button";
import AirtimeHistory from "../AirtimeHistory";

export default function AirtimePage() {
    return (
        <main className="pb-10 grid md:grid-cols-[3fr,2fr] gap-14 xl:gap-28">
            <section className="w-full overflow-hidden">
                <p className="font-semibold mb-6">Purchase Airtime</p>

                <SavedContacts />

                <form className="flex flex-col gap-6 mt-6">
                    <Input id="amount" placeholder="0.00" label="Amount" />
                    <Input id="network" placeholder="Glo" label="Network" />
                    <Input id="phone-number" placeholder="+2349054057103" label="Phone Number" />
                    <Input id="charged" placeholder="0.00" label="You will be charged" percent="5" disabled />
                    <Button type="submit" label="Purchase Airtime" block />
                </form>
            </section>

            <section>
                <p className="font-semibold mb-3">Purchase History</p>

                <div className="flex flex-col">
                    <AirtimeHistory />
                    <AirtimeHistory />
                    <AirtimeHistory />
                </div>

                <button className="fill-primary-dark flex gap-3 items-center mx-auto mt-3">
                    <span className="text-xs">See more</span>
                    <svg width={16} height={16} viewBox="0 0 16 16" fill="inherit" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3.20009 5.74009C3.26706 5.66786 3.34761 5.60952 3.43712 5.56842C3.52664 5.52732 3.62338 5.50425 3.72181 5.50053C3.82024 5.49682 3.91844 5.51253 4.0108 5.54677C4.10316 5.58101 4.18787 5.63311 4.26009 5.70009L8.00009 9.22709L11.7401 5.70009C11.8123 5.63312 11.897 5.58103 11.9894 5.54679C12.0817 5.51256 12.1799 5.49685 12.2784 5.50056C12.3768 5.50428 12.4735 5.52734 12.5631 5.56844C12.6526 5.60954 12.7331 5.66787 12.8001 5.74009C12.8671 5.81232 12.9192 5.89703 12.9534 5.98939C12.9876 6.08175 13.0033 6.17995 12.9996 6.27838C12.9959 6.37681 12.9728 6.47354 12.9317 6.56306C12.8906 6.65258 12.8323 6.73312 12.7601 6.80009L8.51009 10.8001C8.37141 10.9287 8.18924 11.0002 8.00009 11.0002C7.81095 11.0002 7.62878 10.9287 7.49009 10.8001L3.24009 6.80009C3.16786 6.73313 3.10952 6.65258 3.06842 6.56307C3.02732 6.47355 3.00425 6.37681 3.00053 6.27838C2.99682 6.17995 3.01253 6.08175 3.04677 5.98939C3.08101 5.89703 3.13311 5.81232 3.20009 5.74009Z" fill="inherit" />
                    </svg>
                </button>
            </section>
        </main>
    )
}