export function sum(a, b) {
    return a + b;
}


export function filterOutNull(arrayOfValues) {
    return arrayOfValues.filter((item) => {
        return item !== null
    })
}

export async function catchAPoke(cb) {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon/ditto');
    const json = await response.json();

    return json;
}