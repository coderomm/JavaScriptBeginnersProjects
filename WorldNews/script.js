document.querySelector("button").addEventListener("click", async () => {
    const res = await fetch(`https://newsapi.org/v2/top-headlines?category=sports&country=in&language=en&pageSize=1`,
        {
            headers: {
                Authorization: `Bearer 4366420042f844258a61db19017dd9c8`,
            },
        },
    );
    const jsonRes = await res.json();
    console.log("res: ", jsonRes)
})