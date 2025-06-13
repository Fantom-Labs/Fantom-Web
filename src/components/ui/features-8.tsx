import { Card, CardContent } from '@/components/ui/card'
import { Globe, Layout, Cpu, MessageSquareCode, UtensilsCrossed } from 'lucide-react'

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
                                    <ul className="space-y-2 mt-4">
                                        <li className="flex items-center text-sm text-gray-400">
                                            <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                                            Otimização para SEO
                                        </li>
                                        <li className="flex items-center text-sm text-gray-400">
                                            <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                                            Alta performance
                                        </li>
                                        <li className="flex items-center text-sm text-gray-400">
                                            <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                                            Design responsivo
                                        </li>
                                    </ul>
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
                                    <ul className="space-y-2 mt-4">
                                        <li className="flex items-center text-sm text-gray-400">
                                            <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                                            Design Systems
                                        </li>
                                        <li className="flex items-center text-sm text-gray-400">
                                            <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                                            Prototipagem
                                        </li>
                                        <li className="flex items-center text-sm text-gray-400">
                                            <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                                            Testes de usabilidade
                                        </li>
                                    </ul>
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
                                    <ul className="space-y-2 mt-4">
                                        <li className="flex items-center text-sm text-gray-400">
                                            <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                                            Relatórios em tempo real
                                        </li>
                                        <li className="flex items-center text-sm text-gray-400">
                                            <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                                            Integração com IA
                                        </li>
                                        <li className="flex items-center text-sm text-gray-400">
                                            <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                                            APIs robustas
                                        </li>
                                    </ul>
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="relative overflow-hidden bg-white/5 border-white/10 group hover:border-blue-500/50 transition-all">
                            <CardContent className="pt-6">
                                <div className="relative mx-auto flex aspect-square size-16 rounded-full border border-white/10 before:absolute before:-inset-2 before:rounded-full before:border before:border-white/5 group-hover:border-blue-500/50">
                                    <MessageSquareCode className="m-auto size-8 text-blue-400" strokeWidth={1.5} />
                                </div>
                                <div className="relative z-10 mt-6 space-y-2">
                                    <h2 className="text-lg font-medium text-white text-center">Agentes de IA</h2>
                                    <p className="text-gray-400 text-center">Chatbots e sistemas de suporte inteligentes para automatizar atendimentos.</p>
                                    <ul className="space-y-2 mt-4">
                                        <li className="flex items-center text-sm text-gray-400">
                                            <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                                            Integração WhatsApp
                                        </li>
                                        <li className="flex items-center text-sm text-gray-400">
                                            <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                                            Atendimento 24/7
                                        </li>
                                        <li className="flex items-center text-sm text-gray-400">
                                            <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                                            Análise de sentimento
                                        </li>
                                    </ul>
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="relative overflow-hidden bg-white/5 border-white/10 group hover:border-blue-500/50 transition-all md:col-span-2 lg:col-span-1">
                            <CardContent className="pt-6">
                                <div className="relative mx-auto flex aspect-square size-16 rounded-full border border-white/10 before:absolute before:-inset-2 before:rounded-full before:border before:border-white/5 group-hover:border-blue-500/50">
                                    <UtensilsCrossed className="m-auto size-8 text-blue-400" strokeWidth={1.5} />
                                </div>
                                <div className="relative z-10 mt-6 space-y-2">
                                    <h2 className="text-lg font-medium text-white text-center">Garçom Online</h2>
                                    <p className="text-gray-400 text-center">Solução digital para harmonização e recomendação em restaurantes de alta gastronomia.</p>
                                    <ul className="space-y-2 mt-4">
                                        <li className="flex items-center text-sm text-gray-400">
                                            <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                                            Recomendações personalizadas
                                        </li>
                                        <li className="flex items-center text-sm text-gray-400">
                                            <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                                            Harmonização de vinhos
                                        </li>
                                        <li className="flex items-center text-sm text-gray-400">
                                            <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                                            Interface elegante
                                        </li>
                                    </ul>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </section>
    )
}
