
const OFFCANVAS_IMAGES = [
    {
        id: 1,
        imageURL: 'https://images.pexels.com/photos/15517974/pexels-photo-15517974/free-photo-of-a-stork-billed-kingfisher-on-a-branch.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
        alt: 'Card image 1',
    },
    {
        id: 2,
        imageURL: 'https://images.pexels.com/photos/773471/pexels-photo-773471.jpeg?auto=compress&cs=tinysrgb&w=600',
        alt: 'Card image 2',
    },
    {
        id: 3,
        imageURL: 'https://images.pexels.com/photos/922978/pexels-photo-922978.jpeg?auto=compress&cs=tinysrgb&w=600',
        alt: 'Card image  3',
    },
    {
        id: 4,
        imageURL: 'https://images.pexels.com/photos/733148/pexels-photo-733148.jpeg?auto=compress&cs=tinysrgb&w=600',
        alt: 'Card image 4',
    },
]

const MODAL_IMAGES = [
    {
        id: 1,
        imageURL: 'https://images.pexels.com/photos/15517974/pexels-photo-15517974/free-photo-of-a-stork-billed-kingfisher-on-a-branch.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
        alt: 'Modal image 1',
    },
    {
        id: 2,
        imageURL: 'https://images.pexels.com/photos/773471/pexels-photo-773471.jpeg?auto=compress&cs=tinysrgb&w=600',
        alt: 'Modal image 2',
    },
    {
        id: 3,
        imageURL: 'https://images.pexels.com/photos/922978/pexels-photo-922978.jpeg?auto=compress&cs=tinysrgb&w=600',
        alt: 'Modal image  3',
    },
    {
        id: 4,
        imageURL: 'https://images.pexels.com/photos/773471/pexels-photo-773471.jpeg?auto=compress&cs=tinysrgb&w=600',
        alt: 'Modal image 4',
    },
    {
        id: 5,
        imageURL: 'https://images.pexels.com/photos/922978/pexels-photo-922978.jpeg?auto=compress&cs=tinysrgb&w=600',
        alt: 'Modal image 4',
    },
    {
        id: 6,
        imageURL: 'https://images.pexels.com/photos/15517974/pexels-photo-15517974/free-photo-of-a-stork-billed-kingfisher-on-a-branch.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
        alt: 'Modal image 4',
    },
    {
        id: 7,
        imageURL: 'https://images.pexels.com/photos/733148/pexels-photo-733148.jpeg?auto=compress&cs=tinysrgb&w=600',
        alt: 'Modal image 4',
    },
]

const ACCORDION_DATA = [
    {
        id: 1,
        title: 'Mumbai Darshan',
        description: "Mumbai is the capital city of the Indian state of Maharashtra. Mumbai is the de facto financial centre and the most populous city of India with an estimated city proper population of 12.5 million."
    },
    {
        id: 2,
        title: 'Delhi tour',
        description: "Delhi officially the National Capital Territory (NCT) of Delhi, is a city and a union territory of India containing New Delhi, the capital of India. Straddling the Yamuna river, primarily its western or right bank"

    },
    {
        id: 3,
        title: 'London Tour',
        description: "London  is the capital and largest city of England and the United Kingdom, with a population of just under 9 million. It stands on the River Thames in south-east England at the head of a 50-mile (80 km) estuary down to the North Sea and has been a major settlement for two millennia.",
    },
    {
        id: 4,
        title: 'Amazing Bangalore',
        description: "Bangalore is the capital and largest city of the southern Indian state of Karnataka. It has a population of more than 8 million and a metropolitan population of around 11 million, making it India's third most populous city",
    },
    {
        id: 5,
        title: 'Dazzling Dubai',
        description: "Dubai the most populous city in the United Arab Emirates (UAE) and the capital of the Emirate of Dubai, the most populated of the country's seven emirates",

    },
]


const offcanvasDiv = document.getElementById('offcanvas-div');
const modalDiv = document.getElementById('modal-div');
const accordionExample = document.getElementById('accordionExample');

let tempOffCanvas = ``;
OFFCANVAS_IMAGES.forEach(item => {
    tempOffCanvas += `<img src="${item.imageURL}"
                class="canvas-img" alt="${item.alt}">`
})

offcanvasDiv.innerHTML = tempOffCanvas;

let tempModalImgs = ``;
MODAL_IMAGES.forEach(item => {
    tempModalImgs += `<img src="${item.imageURL}"
                            class="canvas-img" alt="${item.alt}">`
})

modalDiv.innerHTML = tempModalImgs;





let tempAccordion = ``;
ACCORDION_DATA.forEach(item => {
    tempAccordion += `
    <div class="accordion-item">
                            <h2 class="accordion-header" id="heading${item.id}">
                                <button class="accordion-button ${item.id === 1 ? '' : 'collapsed'}" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#collapse${item.id}" aria-expanded="true" aria-controls="collapse${item.id}">
                                    ${item.title}
                                </button>
                            </h2>
                            <div id="collapse${item.id}" class="accordion-collapse collapse ${item.id === 1 ? 'show' : ''}" aria-labelledby="heading${item.id}"
                                data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <code>${item.description}</code>
                                </div>
                            </div>
                        </div>

    `
})

accordionExample.innerHTML = tempAccordion;