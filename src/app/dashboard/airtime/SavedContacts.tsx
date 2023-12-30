"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

export default function SavedContacts() {
    return (
        <section className="w-full">
            <p className="mb-6 text-sm font-medium">Saved contacts</p>

            <div className="flex items-center gap-5">
                <Swiper
                    spaceBetween={20}
                    slidesPerView={"auto"}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                >
                    {[1, 2, 3, 4, 5].map(a => (
                        <SwiperSlide className="!flex-shrink">
                            <button className="flex flex-col gap-1 items-center bg-white px-5 py-5">
                                <div className="relative overflow-hidden w-10 h-10 rounded-full">
                                    <Image src="/img/mtn.png" alt="" fill />
                                </div>
                                <p className="text-xs font-medium text-center">Wisdom Ose</p>
                                <p className="text-xs text-center">+2349054057103</p>
                            </button>
                        </SwiperSlide>
                    ))}
                </Swiper>
                <button className="flex flex-col gap-1 items-center justify-center h-4/5 bg-[#F6F7FF] fill-primary-dark px-2 py-3">
                    <svg width={24} height={24} viewBox="0 0 24 24" fill="inherit" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18 12.998H13V17.998C13 18.2633 12.8946 18.5176 12.7071 18.7052C12.5196 18.8927 12.2652 18.998 12 18.998C11.7348 18.998 11.4804 18.8927 11.2929 18.7052C11.1054 18.5176 11 18.2633 11 17.998V12.998H6C5.73478 12.998 5.48043 12.8927 5.29289 12.7052C5.10536 12.5176 5 12.2633 5 11.998C5 11.7328 5.10536 11.4785 5.29289 11.2909C5.48043 11.1034 5.73478 10.998 6 10.998H11V5.99805C11 5.73283 11.1054 5.47848 11.2929 5.29094C11.4804 5.1034 11.7348 4.99805 12 4.99805C12.2652 4.99805 12.5196 5.1034 12.7071 5.29094C12.8946 5.47848 13 5.73283 13 5.99805V10.998H18C18.2652 10.998 18.5196 11.1034 18.7071 11.2909C18.8946 11.4785 19 11.7328 19 11.998C19 12.2633 18.8946 12.5176 18.7071 12.7052C18.5196 12.8927 18.2652 12.998 18 12.998Z" fill="inherit" />
                    </svg>
                    <span className="text-xs">Add Contact</span>
                </button>
            </div>
        </section>
    )
}