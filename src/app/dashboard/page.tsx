import AirtimeHistory from "./AirtimeHistory";

export default function Dashboard() {
    return (
        <main className="p-5 flex gap-5 flex-col">
            <div className=" grid grid-cols-3 gap-6">
                <div className="bg-white p-10">
                    <p className="font-medium uppercase text-xs mb-3">BALANCE</p>
                    <p className="font-semibold text-2xl">$5000.00</p>
                </div>
                <div className="bg-white p-10">
                    <p className="font-medium uppercase text-xs mb-3">BALANCE</p>
                    <p className="font-semibold text-2xl">$5000.00</p>
                </div>
                <div className="bg-white p-10">
                    <p className="font-medium uppercase text-xs mb-3">BALANCE</p>
                    <p className="font-semibold text-2xl">$5000.00</p>
                </div>
            </div>
            <div className=" grid grid-cols-2 gap-6">
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