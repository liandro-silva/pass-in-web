import { Search, MoreHorizontal, ChevronsLeft, ChevronLeft, ChevronRight, ChevronsRight } from "lucide-react"

export const AttendeeList = () => {
    return (
        <section>
            <aside className="flex gap-3 items-center pt-5">
                <h1 className="text-2xl font-bold">Participantes</h1>
                <form>
                    <label htmlFor="attendeeSearchInput" className="px-3 w-72 py-1.5 border border-white/10 rounded-lg flex items-center gap-3">
                        <Search className="size-4 text-emerald-300" />
                        <input className="bg-transparent flex-1 outline-none h-auto border-0 p-0 text-sm" id="attendeeSearchInput" type="text" placeholder="Buscar participantes..." />
                    </label>
                </form>
            </aside>
            <div className="border border-white/10 rounded-lg mt-4">
                <table className="w-full">
                    <thead>
                        <tr className="border-b border-white/10">
                            <th className="py-3 px-4 text-sm font-semibold text-left w-[64px]">
                                <input type="checkbox" className="size-4 bg-black/20 rounded-md border border-white/20" name="" id="" />
                            </th>
                            <th className="py-3 px-4 text-sm font-semibold text-left">Código</th>
                            <th className="py-3 px-4 text-sm font-semibold text-left">Participante</th>
                            <th className="py-3 px-4 text-sm font-semibold text-left">Data da Inscrição</th>
                            <th className="py-3 px-4 text-sm font-semibold text-left">Data do check-in</th>
                            <th className="py-3 px-4 text-sm font-semibold text-left w-[64px]"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {Array.from({ length: 10 }).map(() => (
                            <tr className="border-b border-white/10">
                                <td className="py-3 px-4 text-sm text-zinc-300">
                                    <input type="checkbox" className="size-4 bg-black/20 rounded-md border border-white/20" name="" id="" />
                                </td>
                                <td className="py-3 px-4 text-sm text-zinc-300">52716</td>
                                <td className="py-3 px-4 text-sm text-zinc-300">
                                    <div className="flex flex-col gap-1">
                                        <span className="font-semibold text-white" aria-label="Name">Diego Schell Fernandes</span>
                                        <span aria-label="Email">diego.schell.f@gmail.com</span>
                                    </div>
                                </td>
                                <td className="py-3 px-4 text-sm text-zinc-300">7 dias atrás</td>
                                <td className="py-3 px-4 text-sm text-zinc-300">3 dias atrás</td>
                                <td className="py-3 px-4 text-sm text-zinc-300">
                                    <button className="bg-black/20 border border-white/10 rounded-md p-1.5">
                                        <MoreHorizontal className="size-4" />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                    <tfoot>
                        <tr>
                            <td className="py-3 px-4 text-sm text-zinc-300 text-left" colSpan={3}>
                                Mostrando 10 de 28 itens
                            </td>
                            <td className="py-3 px-4 text-sm text-zinc-300 text-right" colSpan={3}>
                                <div className="flex items-center justify-end gap-8 ">
                                    <span>Página 1 de 23</span>
                                    <nav className="flex gap-1.5">
                                        <button className="bg-white/10 border border-white/10 rounded-md p-1.5">
                                            <ChevronsLeft className="size-4" />
                                        </button>
                                        <button className="bg-white/10 border border-white/10 rounded-md p-1.5">
                                            <ChevronLeft className="size-4" />
                                        </button>
                                        <button className="bg-white/10 border border-white/10 rounded-md p-1.5">
                                            <ChevronRight className="size-4" />
                                        </button>
                                        <button className="bg-white/10 border border-white/10 rounded-md p-1.5">
                                            <ChevronsRight className="size-4" />
                                        </button>
                                    </nav>
                                </div>
                            </td>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </section>
    )
}