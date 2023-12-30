import Button from "@/components/Button";
import Image from "next/image";

export default function Contact() {
    return (
        <div className="flex justify-between items-center py-3">
            <div className="flex gap-3">
                <div className="w-10 h-10 rounded-full gradient-background relative overflow-hidden">
                </div>
                <div className="">
                    <p className="font-medium text-sm mb-1">Wisdom Ose</p>
                    <p className="text-xs">+2349054057103</p>
                </div>
            </div>
        </div>
    )
}