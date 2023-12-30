import Image from "next/image";

export default function InternetHistory() {
    return (
        <div className="flex justify-between items-center py-3">
            <div className="flex gap-3">
                <div className="w-10 h-10 rounded-full gradient-background relative overflow-hidden">
                    <Image src="/img/9mobile.png" alt="" fill />
                </div>
                <div className="">
                    <p className="font-medium text-sm mb-1">+2349054057103</p>
                    <p className="text-xs">09/09/2023 - 12:12 AM</p>
                </div>
            </div>
            <div className="">
                <p className="text-xs">500MB</p>
                <p className="font-medium text-xs">-720.00</p>
            </div>
        </div>
    )
}