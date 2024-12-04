import { TeamMember } from "@/types/index"

type SearchResultProps = {
    user: TeamMember
}

function SearchResult({user}: SearchResultProps) {

  return (
    <>
        <p className="mt-10 text-center font-bold">Resultado:</p>
        <div className="flex justify-between items-center">
            <p className="font-bold text-xl">Nombre: {user.name}</p>
            <p className="font-bold text-xl">Email: {user.email}</p>
            <button
                className="text-purple-600 hover:bg-purple-100 px-10 py-3 font-bold cursor-pointer"
            >
                Agregar al proyecto
            </button>
        </div>   
    </>
  )
}

export default SearchResult