import { Card, CardContent } from '@/components/ui/card'
import { Globe, Layout, Cpu } from 'lucide-react'

export function Features() {
    return (
        <section className="bg-[#030410] py-16 md:py-24" id="servicos">
            <div className="mx-auto max-w-3xl lg:max-w-5xl px-6">
                <div className="container mx-auto px-4 text-center mb-12">
                    <h2 className="text-4xl font-bold text-white mb-6 md:text-3xl">Nossos Serviços</h2>
                    <p className="text-lg text-gray-400 max-w-2xl mx-auto">Soluções digitais completas e sob medida para seu negócio</p>
                </div>
                <div className="relative">
                    <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <Card className="relative overflow-hidden bg-white/5 border-white/10 group hover:border-blue-500/50 transition-all">
                            <CardContent className="pt-6">
                                <div className="relative mx-auto flex aspect-square size-16 rounded-full border border-white/10 before:absolute before:-inset-2 before:rounded-full before:border before:border-white/5 group-hover:border-blue-500/50">
                                    <Globe className="m-auto size-8 text-blue-400" strokeWidth={1.5} />
                                </div>
                                <div className="relative z-10 mt-6 space-y-2">
                                    <h2 className="text-lg font-medium text-white text-center">Landing Pages e Sites</h2>
                                    <p className="text-gray-400 text-center">Sites institucionais e landing pages focados em conversão, com design moderno e responsivo.</p>
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="relative overflow-hidden bg-white/5 border-white/10 group hover:border-blue-500/50 transition-all">
                            <CardContent className="pt-6">
                                <div className="relative mx-auto flex aspect-square size-16 rounded-full border border-white/10 before:absolute before:-inset-2 before:rounded-full before:border before:border-white/5 group-hover:border-blue-500/50">
                                    <Layout className="m-auto size-8 text-blue-400" strokeWidth={1.5} />
                                </div>
                                <div className="relative z-10 mt-6 space-y-2">
                                    <h2 className="text-lg font-medium text-white text-center">UI/UX Design</h2>
                                    <p className="text-gray-400 text-center">Design de interfaces e experiências que encantam usuários e geram resultados.</p>
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="relative overflow-hidden bg-white/5 border-white/10 group hover:border-blue-500/50 transition-all">
                            <CardContent className="pt-6">
                                <div className="relative mx-auto flex aspect-square size-16 rounded-full border border-white/10 before:absolute before:-inset-2 before:rounded-full before:border before:border-white/5 group-hover:border-blue-500/50">
                                    <Cpu className="m-auto size-8 text-blue-400" strokeWidth={1.5} />
                                </div>
                                <div className="relative z-10 mt-6 space-y-2">
                                    <h2 className="text-lg font-medium text-white text-center">Plataformas SaaS</h2>
                                    <p className="text-gray-400 text-center">Dashboards operacionais e plataformas SaaS com integração de IA.</p>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </section>
    )
}
