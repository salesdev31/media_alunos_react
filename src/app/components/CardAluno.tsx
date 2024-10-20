import { students } from "@/app/dadosAlunos/students";

export const CardAluno = () => {
   return (
        <div>

            {students.map(function(dadosAlunos){
                return   <div key={dadosAlunos.id} className="container mx-auto">
                    <div className="bg-gray-400 flex justify-between text-white font-bold py-6 px-6 border border-gray-500">
                            <div className="flex">
                                <img className="rounded-full w-12" src={dadosAlunos.avatar} alt={dadosAlunos.name} />
                                <div className="ml-2 text-gray-700">
                                    <h2 className="text-gray-950 font-bold">{dadosAlunos.name}</h2>
                                    <p>{dadosAlunos.email}</p>
                                </div>
                            </div>
                        
                        <div className="grid grid-cols-4 gap-36  text-gray-700 ">
                            <h2>{dadosAlunos.active && <div className="text-sm border border-black px-4 py-1 bg-green-500 w-20 text-center rounded-lg">Ativo</div>}
                                {!dadosAlunos.active && <div className="text-sm border border-black px-4 py-1 bg-red-500 rounded-lg w-20">Inativo</div>}
                            </h2>
                            <h2 className="">{dadosAlunos.grade1}</h2>
                            <h2>{dadosAlunos.grade2}</h2>
                            <h2>{dadosAlunos.active && ((dadosAlunos.grade1 + dadosAlunos.grade2)/2).toFixed(1)}
                                {!dadosAlunos.active && "--"}
                            </h2>
                        </div>
                    </div>
                </div>
            })}

          
        </div>
   );
}