//Component to display the items as cards
export function CardComponent({ item }) {
    return (<>
        {item.map(results => (
            <div class="flex flex-col w-72 h-96 bg-gray-300 dark:bg-backgroundbright p-3 mb-4 dark:text-slate-200 rounded-md shadow-md break-words border-2 border-backgrounddark lg:w-80" key={results.id}>
                <div class="flex justify-center">
                    <img class="w-40 h-40 rounded-md border-2 border-primary" src={results.image}/>
                </div>
                <div class="mt-2" className="card-body">
                    <h5 class="text-2xl" className="card-title">{results.name}</h5>
                    <p className="card-text">Laden: {results.retailCompany}</p>
                    <p className="card-text">Preis: {results.price}€</p>
                    <p className="card-text">Kategorien: {results.categories + ""}</p>
                </div>
            </div>
        ))}
        </>)
}
