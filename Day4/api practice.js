function fetchData(link, operation) {
    fetch(link)
        .then(res => res.json())
        .then(data => operation(data))
        .catch(e => console.log(e))
}

//api1
/*fetchData("https://catfact.ninja/facts",
    (data) => {
        data.data.forEach(f => {
            console.log(`Cat Fact: ${f.fact}`);
        });
    }
);

fetchData("https://pokeapi.co/api/v2/pokemon", (data) => {
    const pokemons = data.results;

    const result = pokemons.map((p, index) => {
        // Dummy gender logic: even → Mr., odd → Ms.
        const prefix = index % 2 === 0 ? "Mr." : "Ms.";

        return {
            ...p,
            name: `${prefix} ${p.name}`
        };
    });

    console.log(result);
}); 

//API3 - here i fetch the data and log the names by addind the prefixes to that
fetchData("https://randomuser.me/api/?results=10", (data) => {
    const users = data.results;

    const result = users.map(user => {
        // Proper gender-based prefix
        const prefix = user.gender === "male" ? "Mr." : "Ms.";

        return {
            fullName: `${prefix} ${user.name.first} ${user.name.last}`,
            gender: user.gender
        };
    });

    console.log(result);
}); 
 
//API4
fetchData("http://api.open-notify.org/astros.json", (data) => {
    data.people.forEach(p => {
        console.log(`${p.name} is in ${p.craft}`);
    });
}); 

//API5
fetchData("https://zenquotes.io/api/quotes", (data) => {

    // FILTER → quotes with length > 50
    const filtered = data.filter(q => q.q.length > 50);

    // MAP → format quote with author
    const mapped = filtered.map(q => ({
        text: `"${q.q}" - ${q.a}`
    }));

    console.log("Quotes:", mapped);
}); 

//API 6

fetchData("http://universities.hipolabs.com/search?country=India", (data) => {
    const result = data
        .filter(u => u.name.length > 20) //To get only university names which has length greater than 20
        .slice(0, 15) // to get only 15 names
        .map(u => ({
            university: u.name,
            website: u.web_pages[0]
        })); // to get perfect output

    console.log(result);
}); 

//APT 7

fetchData("https://dogapi.dog/api/v2/facts", (data) => {
    data.data.forEach(f => {
        console.log(`Dog Fact: ${f.attributes.body}`);
    });
}); 

//API 7

fetchData("https://randomuser.me/api/?results=10", (data) => {

    const youngest = data.results.reduce((min, u) =>
        u.dob.age < min.dob.age ? u : min
    );

    console.log("Youngest User:", youngest.name.first, youngest.dob.age);
}); 

//API 8

fetchData("https://restcountries.com/v3.1/all?fields=name,population", (data) => {

    const maxCountry = data.reduce((max, c) => 
        c.population > max.population ? c : max
    );

    console.log("Most Populated Country:", maxCountry.name.common);
}); 

//API 9

fetchData("https://fakestoreapi.com/products", (data) => {

    // to get the products with price > 100
    const filtered = data.filter(p => p.price > 100);

    //format our data
    const mapped = filtered.map(p => ({
        title: p.title,
        price: p.price,
        rating: p.rating.rate
    }));

    // total price of filtered products
    const totalPrice = mapped.reduce((sum, p) => sum + p.price, 0);

    console.log("Expensive Products:", mapped);
    console.log("Total Price:", totalPrice);
}); 

//API 10 

fetchData("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd", (data) => {

    const topGainer = data.reduce((max, coin) =>
        coin.price_change_percentage_24h > max.price_change_percentage_24h ? coin : max
    );

    console.log("Top Gainer:", topGainer.name);
}); */
