import { WhatsappLogo } from "@phosphor-icons/react/dist/ssr";
import dogImg from "../../../public/img/hero-dog.webp";
import catImg from "../../../public/img/cat-hero.png";
import Image from "next/image";

export default function Hero() {
    return (
        <section className="bg-[#E84C3D] text-white relative overflow-hidden">
            <div>
                <Image
                    src={dogImg}
                    alt="Dog"
                    fill
                    sizes="100vw"
                    priority
                    className="object-cover opacity-50 lg:hidden"
                />
                <div className="absolute inset-0 bg-black opacity-40 md:hidden"></div>
            </div>
            <div className="container mx-auto pt-16 pb-16 md:pb-0 px-4 relative">
                <article className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div className="space-y-6">

                        <h1
                            data-aos="fade-down"
                            className="text-3xl md:text-4xl lg:text-5xl font-bold leading-10">
                            Seu pet merece cuidado de qualidade, carinho e atenção especial.
                        </h1>

                        <p className="lg:text-lg" data-aos="fade-right">
                            Oferecemos os melhores serviços de banho e tosa para garantir o bem-estar do seu pet e a felicidade do seu amigo de quatro patas.
                        </p>

                        <a data-aos="fade-up"
                            href={`https://wa.me/556599990000?text=Olá vim pelo site e gostaria de mais informações`}
                            className="bg-green-500 px-5 py-2 rounded-md font-semibold flex 
                        items-center justify-center w-fit gap-2">
                            <WhatsappLogo className="w-5 h-5" />
                            Contato via WhatsApp
                        </a>

                        <div className="mt-8">
                            <p>
                                <b className="bg-black text-white px-2 py-1 rounded-md">5%</b> de desconto no primeiro atendimento
                            </p>

                            <div className="flex mt-4">
                                <div className="w-32 hidden lg:block">
                                    <Image
                                        src={catImg}
                                        alt="Cat"
                                        className="object-fill"

                                    />
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="hidden md:block h-full relative">
                        <Image src={dogImg} alt="Dog" className="object-contain" fill sizes="(max-width: 768px) 0vw, 50vw" />
                    </div>
                </article>
            </div>
        </section>
    )
}