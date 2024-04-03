import { Search } from "lucide-react"

export const AttendeeList = () => {
    return (
        <section>
            <aside className="flex gap-3 items-center pt-5">
                <h1 className="text-2xl font-bold">Participantes</h1>
                <form>
                    <label htmlFor="attendeeSearchInput" className="px-3 w-72 py-1.5 border border-white/10 rounded-lg text-sm flex items-center gap-3">
                        <Search className="size-4 text-emerald-300" />
                        <input className="bg-transparent flex-1 outline-none" id="attendeeSearchInput" type="text" placeholder="Buscar participantes..." />
                    </label>
                </form>
            </aside>
            <table className="pt-4">
                <thead>
                    <tr>
                        <th>
                            <input type="checkbox" name="" id="" />
                        </th>
                        <th>Código</th>
                        <th>Participante</th>
                        <th>Data da Inscrição</th>
                        <th>Data do check-in</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <input type="checkbox" name="" id="" />
                        </td>
                        <td>52716</td>
                        <td>
                            <div>
                                <span></span>
                            </div>
                        </td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                </tbody>
            </table>
        </section>
    )
}