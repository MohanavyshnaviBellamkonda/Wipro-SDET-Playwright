async function fetchData(link) {
    try {
        let res = await fetch(link);

        if (!res.ok) {
            throw new Error("Failed to fetch data");
        }

        return await res.json();   // return data
    } catch (e) {
        console.log(e);
    }
}

async function getProducts() {
    const data = await fetchData("https://fakestoreapi.com/products");

    const filtered = data.filter(p => p.price > 100);

    const total = filtered.reduce((sum, p) => sum + p.price, 0);

    console.log("Products:", filtered);
    console.log("Total Price:", total);
}
/*

//API 1
async function main() {
    let data = await fetchData("https://catfact.ninja/facts");

    data.data.forEach(f => {
        console.log(`Cat Fact: ${f.fact}`);
    });
}

main();

//API 2

async function getPokemons() {
    const data = await fetchData("https://pokeapi.co/api/v2/pokemon");

    const result = data.results
        .filter(p => p.name.startsWith("b")) 
        .map(p => ({
            name: p.name.toUpperCase(),    
            url: p.url
        }));

    console.log(result);
}

//API 3

async function getUsersWithPrefix() {
    const data = await fetchData("https://randomuser.me/api/?results=10");

    const result = data.results.map(u => ({
        fullName: `${u.gender === "male" ? "Mr." : "Ms."} ${u.name.first} ${u.name.last}`,
        gender: u.gender
    }));

    console.log(result);
}

//API 4

async function getAstronauts() {
    const data = await fetchData("http://api.open-notify.org/astros.json");

    data.people.forEach(p => {
        console.log(`${p.name} is in ${p.craft}`);
    });
}

//API 5

async function getQuotes() {
    const data = await fetchData("https://zenquotes.io/api/quotes");

    const result = data
        .filter(q => q.q.length > 50)
        .map(q => `"${q.q}" - ${q.a}`);

    console.log(result);
}

//API 6

async function getUniversities() {
    const data = await fetchData("http://universities.hipolabs.com/search?country=India");

    const result = data
        .filter(u => u.name.length > 20)
        .slice(0, 15)
        .map(u => ({
            university: u.name,
            website: u.web_pages[0]
        }));

    console.log(result);
}

//API 7 

async function getDogFacts() {
    const data = await fetchData("https://dogapi.dog/api/v2/facts");

    data.data.forEach(f => {
        console.log(`Dog Fact: ${f.attributes.body}`);
    });
}

//API 8 

async function getYoungestUser() {
    const data = await fetchData("https://randomuser.me/api/?results=10");

    const youngest = data.results.reduce((min, u) =>
        u.dob.age < min.dob.age ? u : min
    );

    console.log("Youngest:", youngest.name.first, youngest.dob.age);
} */

//API 9 




/*
// API 10

async function getTopGainer() {
    const data = await fetchData("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd");

    const top = data.reduce((max, coin) =>
        coin.price_change_percentage_24h > max.price_change_percentage_24h ? coin : max
    );

    console.log("Top Gainer:", top.name);
}

