import { CardAluno } from "./components/CardAluno";

export default function pageNotas (){
  return(
    <div className="bg-black h-screen w-screen">
      <div className="container mx-auto">
        <div className="bg-gray-800 flex justify-between flex-1 text-white font-bold py-6 px-6 rounded">
            <div><h1>Name</h1></div>
            <div className="flex gap-40">
                <h2>Status</h2>
                <h2>Grade 1</h2>
                <h2>Grade 2</h2>
                <h2>Final Grade</h2>
            </div>
        </div>

      </div>
      <ul>
        <CardAluno/>
      </ul>
    </div>
  );
}