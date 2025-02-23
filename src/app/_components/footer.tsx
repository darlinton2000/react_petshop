import Image from 'next/image'
import { FacebookLogo, InstagramLogo, YoutubeLogo } from '@phosphor-icons/react/dist/ssr'
import golden from '../../../public/images/golden.png'
import royal from '../../../public/images/royal.png'
import primier from '../../../public/images/primier.png'
import whiskas from '../../../public/images/whiskas.png'
import natural from '../../../public/images/natural.png'

const brands = [
    { name: "Royal Canin", logo: royal },
    { name: "Golden", logo: golden },
    { name: "Primier", logo: primier },
    { name: "Formula Natural", logo: natural },
    { name: "Whiskas", logo: whiskas },
    { name: "Golden", logo: golden }
]

/**********************************************************************************************************************/

export function Footer() {
    return (
        <section className="bg-[#E84C3D] py-16 text-white">
            <div className="container mx-auto px-4">
                <div className="border-b border-white/20 pb-8">
                    <h4 className="text-3xl font-semibold mb-8 text-center">Marcas que trabalhamos</h4>
                    <div className="grid grid-cols-2 lg:grid-cols-6 gap-8">
                        {brands.map((item, index) => (
                            <div key={index} className="bg-white p-4 rounded-lg flex items-center justify-center">
                                <Image
                                    src={item.logo}
                                    alt={item.name}
                                    width={100}
                                    height={50}
                                    quality={100}
                                    style={{
                                        width: "auto",
                                        height: "auto",
                                    }}
                                    className="object-contain"
                                />
                            </div>
                        ))}
                    </div>
                </div>
                <footer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12 mt-5">
                    <div>
                        <h3 className="text-2xl font-semibold mb-2">Pet Shop Dev</h3>
                        <p className="mb-4">Cuidando do seu melhor amigo com amor e dedicação.</p>
                        <a href="#" className="bg-green-500 px-4 py-2 rounded-md">
                            Contato via WhatsApp
                        </a>
                    </div>
                    <div>
                        <h3 className="text-2xl font-semibold mb-2">Contatos</h3>
                        <p>E-mail: teste@teste.com</p>
                        <p>Telefone: (XX) 1231831238</p>
                        <p>Rua X, centro, Campo Grande | MS</p>
                    </div>
                    <div>
                        <h3 className="text-2xl font-semibold mb-2">Redes Sociais</h3>
                        <div className="flex gap-4">
                            <a href="#" target="_blank"><FacebookLogo className="w-8 h-8" /></a>
                            <a href="#" target="_blank"><InstagramLogo className="w-8 h-8" /></a>
                            <a href="#" target="_blank"><YoutubeLogo className="w-8 h-8" /></a>
                        </div>
                    </div>
                </footer>
            </div>
        </section>
    )
}