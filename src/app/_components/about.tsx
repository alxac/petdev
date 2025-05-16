import Image from "next/image";
import about1Img from "../../../public/img/about-1.png";
import about2Img from "../../../public/img/about-2.png";
import { Check, MapPin } from "lucide-react";
import { WhatsappLogo } from "@phosphor-icons/react/dist/ssr";

export default function About() {
    return (
        <section className="bg-[#FDF6EC] py-16">
            <div className="container mt-4 mx-auto px-2">

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    <div className="relative">
                        <div className="relative w-full h-[400px] rounded-3xl overflow-hidden">
                            <Image
                                src={about1Img}
                                alt="About Image 1"
                                fill
                                quality={100}
                                priority
                                className="object-cover hover:scale-110 duration-600"
                            />
                        </div>
                        <div className="absolute w-40 h-40 right-4 -bottom-8 border-8 overflow-hidden rounded-lg border-white">
                            <Image
                                src={about2Img}
                                alt="About Image 2"
                                fill
                                quality={100}
                                priority
                            />
                        </div>
                    </div>

                    <div className="space-y-6 mt-10">
                        <h2 className="text-4xl font-bold">About Us</h2>
                        <p className="text-gray-600">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam venenatis elit eros, eget vehicula metus fermentum ut. Pellentesque imperdiet purus eget nunc egestas sagittis. Etiam posuere ligula quis aliquet consectetur. Nunc placerat placerat odio, et viverra magna placerat in. Phasellus convallis, odio quis tempor aliquet, turpis tellus gravida enim, et.
                        </p>

                        <ul className="space-y-4">
                            <li className="flex items-center gap-2">
                                <Check className="text-red-500" />Aberto desde 2006
                            </li>
                            <li className="flex items-center gap-2">
                                <Check className="text-red-500" />Mais de 1000 clientes atendidos
                            </li>
                            <li className="flex items-center gap-2">
                                <Check className="text-red-500" />Equipe especializada em cuidados com pets
                            </li>
                            <li className="flex items-center gap-2">
                                <Check className="text-red-500" />Atendimento personalizado
                            </li>
                        </ul>

                        <div className="flex gap-2">
                            <a href="#"
                                className="bg-[#E84C3D] text-white flex items-center justify-center w-fit
                         gap-2 px-4 py-2 rounded-md">
                                <WhatsappLogo />
                                Contato via Whatsapp
                            </a>
                            <a href="#"
                                className="text-black flex items-center justify-center w-fit
                         gap-2 px-4 py-2 rounded-md">
                                <MapPin />
                                Endereço da Loja
                            </a>
                        </div>

                    </div>

                </div>
            </div>
        </section>
    )
}
