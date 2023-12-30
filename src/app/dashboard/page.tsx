import AirtimeHistory from "./AirtimeHistory";

export default function Dashboard() {
    return (
        <main className="pb-10 flex gap-5 flex-col">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-white p-10">
                    <p className="font-medium uppercase text-xs mb-3">BALANCE</p>
                    <p className="font-semibold text-2xl">$5000.00</p>
                </div>
                <div className="bg-white p-10">
                    <p className="font-medium uppercase text-xs mb-3">BALANCE</p>
                    <p className="font-semibold text-2xl">$5000.00</p>
                </div>
                <div className="bg-white p-10 md:col-span-2 lg:col-span-1">
                    <p className="font-medium uppercase text-xs mb-3">BALANCE</p>
                    <p className="font-semibold text-2xl">$5000.00</p>
                </div>
            </div>
            <div className="grid lg:grid-cols-2 gap-6">
                <div className="bg-white px-10 py-5">
                    <p className="font-medium text-xl mb-4">Airtime</p>
                    <div className="">
                        <AirtimeHistory/>
                        <AirtimeHistory/>
                        <AirtimeHistory/>
                    </div>
                </div>
                <div className="bg-white px-10 py-5">
                    <p className="font-medium text-xl mb-4">Internet</p>
                    <div className="">
                        <AirtimeHistory/>
                        <AirtimeHistory/>
                        <AirtimeHistory/>
                    </div>
                </div>

            </div>
        </main>
    )
}