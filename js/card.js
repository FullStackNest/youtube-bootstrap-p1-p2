

const CARD_DATA = [
    {
        id: 1,
        imageURL: 'https://images.pexels.com/photos/2506923/pexels-photo-2506923.jpeg?auto=compress&cs=tinysrgb&w=600',
        cardTitle: 'Tokyo',
        cardDescription: "Tokyo is the capital and the most populous prefecture of Japan. Tokyo's metropolitan area (including neighboring prefectures as well as Tochigi, Gunma and Ibaraki; 13,452 square kilometers or 5,194 square miles) is the most populous in the world, with an estimated 37.468 million residents as of 2018",
        buttonText: '1,00,000',
        buttonClass: 'btn-warning',
    },
    {
        id: 2,
        imageURL: 'https://images.pexels.com/photos/6037250/pexels-photo-6037250.jpeg?auto=compress&cs=tinysrgb&w=600',
        cardTitle: 'Mumbai',
        cardDescription: "Mumbai is the capital city of the Indian state of Maharashtra. Mumbai is the de facto financial centre and the most populous city of India with an estimated city proper population of 12.5 million.",
        buttonText: '60,000',
        buttonClass: 'btn-primary',
    },
    {
        id: 3,
        imageURL: 'https://images.pexels.com/photos/733148/pexels-photo-733148.jpeg?auto=compress&cs=tinysrgb&w=600',
        cardTitle: 'Switzerland',
        cardDescription: "Switzerland, officially the Swiss Confederation, is a landlocked country located at the confluence of Western, Central and Southern Europe. It is bordered by Italy to the south, France to the west, Germany to the north and Austria and Liechtenstein to the east.",
        buttonText: '3,00,000',
        buttonClass: 'btn-success',
    },
    {
        id: 4,
        imageURL: 'https://images.pexels.com/photos/325193/pexels-photo-325193.jpeg?auto=compress&cs=tinysrgb&w=600',
        cardTitle: 'Dubai',
        cardDescription: "Dubai the most populous city in the United Arab Emirates (UAE) and the capital of the Emirate of Dubai, the most populated of the country's seven emirates",
        buttonText: '1,50,000',
        buttonClass: 'btn-primary',
    },
    {
        id: 5,
        imageURL: 'https://images.pexels.com/photos/220887/pexels-photo-220887.jpeg?auto=compress&cs=tinysrgb&w=600',
        cardTitle: 'London',
        cardDescription: "London  is the capital and largest city of England and the United Kingdom, with a population of just under 9 million. It stands on the River Thames in south-east England at the head of a 50-mile (80 km) estuary down to the North Sea and has been a major settlement for two millennia.",
        buttonText: '6,00,000',
        buttonClass: 'btn-danger',
    },
    {
        id: 6,
        imageURL: 'https://images.pexels.com/photos/789750/pexels-photo-789750.jpeg?auto=compress&cs=tinysrgb&w=600',
        cardTitle: 'Delhi',
        cardDescription: "Delhi officially the National Capital Territory (NCT) of Delhi, is a city and a union territory of India containing New Delhi, the capital of India. Straddling the Yamuna river, primarily its western or right bank",
        buttonText: '50,000',
        buttonClass: 'btn-primary',
    },
    {
        id: 7,
        imageURL: 'https://images.pexels.com/photos/15021282/pexels-photo-15021282/free-photo-of-bangalore-palace-in-bangalore-india.jpeg?auto=compress&cs=tinysrgb&w=600',
        cardTitle: 'Bangalore',
        cardDescription: "Bangalore is the capital and largest city of the southern Indian state of Karnataka. It has a population of more than 8 million and a metropolitan population of around 11 million, making it India's third most populous city",
        buttonText: '30,000',
        buttonClass: 'btn-danger',
    },
    {
        id: 8,
        imageURL: 'https://images.pexels.com/photos/3586902/pexels-photo-3586902.jpeg?auto=compress&cs=tinysrgb&w=600',
        cardTitle: 'New York',
        cardDescription: "New York, often called New York City[a] or NYC, is the most populous city in the United States. With a 2020 population of 8,804,190 distributed over 300.46 square miles (778.2 km2), the city is the most densely populated major city in the United States.",
        buttonText: '5,00,000',
        buttonClass: 'btn-info',
    },
]


const cardsSection = document.getElementById('cards-section');
let temp = ``;
for (let i = 0; i < CARD_DATA.length; i++) {
    let item = CARD_DATA[i];
    temp += `
    <div class="card card-container">
                        <img src="${item.imageURL}"
                            class="card-img-top" alt="Card 1 image">
                        <div class="card-body">
                            <h5 class="card-title">${item.cardTitle}</h5>
                            <p class="card-text">${item.cardDescription}</p>
                            <a href="#" class="btn ${item.buttonClass}">Rs. ${item.buttonText}</a>
                        </div>
                    </div>
                    <!-- card end -->
    `
}

cardsSection.innerHTML = temp;