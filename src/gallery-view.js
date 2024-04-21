import { LitElement, html, css } from 'lit';

export class MyGallery extends LitElement {

    static get tag() {
        return 'gallery-view';
    }

    constructor() {
        super();
        this.images = [
            "https://upload.wikimedia.org/wikipedia/en/8/8e/IST_Building_PSU.jpg",
            "https://bpb-us-e1.wpmucdn.com/sites.psu.edu/dist/5/117956/files/2020/05/Westgate-Bldg-5-052520.jpg",
            "https://i0.wp.com/images.onwardstate.com/uploads/2019/03/IMG_4096.jpeg?fit=4032%2C3024&ssl=1",
            "https://pbs.twimg.com/media/EkI_7v8XYAYqBO3.jpg",
            "https://vinoly.com/wp-content/uploads/2016/05/PSIST_1-1778x1000.jpg",
            "https://ericacfleming.com/wp-content/uploads/2021/11/Westgate-Sunny-scaled-e1636471162824-1024x581.jpg"
        ];
        this.caption = [
            "Westgate 1",
            "Westgate 2",
            "Westgate 3",
            "Westgate 4",
            "Westgate 5",
            "Westgate 6"
        ];
        this.slide = 0;
    }

    static get styles() {
        return css`
            :host {
                display: block;
                background-color: black;
            }
            h1 {
                color: white;
            }
            .image-list {
                display: flex;
                justify-content: space-between;
                flex-wrap: wrap;
                margin-top: 20px;
            }
            .image-list img {
                width: calc(33% - 40px);
                margin-bottom: 20px;
                transition: transform 0.5s;
                border: white solid 2px;
                border-radius: 20px;
                filter: grayscale(1);
                cursor: pointer;
            }
            .image-list img:hover {
                transform: scale(1.1);
                filter: grayscale(0);
            }
            .image-gallery {
                position: relative;
                display: all;
            }
            .image {
                display: all;
                width: 100%;
            }
            .back,
            .next {
                cursor: pointer;
                position: absolute;
                top: 40%;
                width: auto;
                padding: 16px;
                margin-top: -50px;
                color: white;
                font-weight: bold;
                font-size: 20px;
                border-radius: 0 10px 10px 0;
                user-select: none;
                -webkit-user-select: none;
            }
            .next {
                right: 0;
                border-radius: 10px 0 0 10px;
            }
            .back:hover,
            .next:hover {
                background-color: black;
            }
            .image-number {
                color: white;
                font-size: 12px;
                padding: 8px 12px;
                position: absolute;
                top: 0;
            }
            .caption-container {
                text-align: center;
                background-color: grey;
                padding: 2px 16px;
                color: white;
            }
            .row:after {
                content: "";
                display: table;
                clear: both;
            }
            .column {
                float: left;
                width: 16.66%;
                display: inline-flex;
            }
            .thumbnail {
                opacity: 0.6;
                width: 100%;
                filter: grayscale(1);
            }
            .thumbnail:hover {
                cursor: pointer;
                filter: grayscale(0);
            }
            .active,
            .thumbnail:hover {
                opacity: 1;
            }
        `;
    }

    render() {
        return html` 
        <h1>image gallery</h1>
        <div class="image-list">
            ${this.images.map((image, index) => html`
                <img src="${image}" @click="${() => this.showSlides(index)}">
            `)}
        </div>
        <div class="image-gallery">
            <div class="image-wrapper">
                ${this.images.map((image, index) => html`
                    <div class="image-number">${index} / ${this.images.length}</div>
                    <img class="image" src="${image}">
                `)}
            </div>

            <a class="back" @click="${this.backSlide}"> < </a>
            <a class="next" @click="${this.nextSlide}"> > </a>

            <div class="caption-container">
                <p id="caption">
                    ${this.caption.map((caption, index) => html`
                        ${caption}
                    `)}
                </p>
            </div>

            <div class="row">
                <div class="column">
                    ${this.images.map((image, index) => html`
                        <img class="thumbnail" src="${image}" @click="${() => this.showSlides(index)}">
                    `)}
                </div>
            </div>
        </div>
        `;
    }

    static get properties() {
        return {
            images: { type: Array },
            caption: { type: Array },
            slide: { type : Number }
        };
    }
}



// //STILL A MESS BUT I HAVE AN IDEA OF WHAT IM DOING ! (i think)

// // register globally so we can make sure there is only one
// window.SimpleModal = window.SimpleModal || {};
// // request if this exists. This helps invoke the element existing in the dom
// // as well as that there is only one of them. That way we can ensure everything
// // is rendered through the same modal
// window.SimpleModal.requestAvailability = () => {
//     if (!window.SimpleModal.instance) {
//         window.SimpleModal.instance = document.createElement("simple-modal");
//         document.body.appendChild(window.SimpleModal.instance);
//     }
//     return window.SimpleModal.instance;
// };

// export const SimpleModalStore = window.SimpleModal.requestAvailability();

// showSlides(n) 
// {   
//     this.slide = n;
    
//     thumbnail = document.getElementsByClassName("thumbnail");
//     captionText = document.getElementById("caption");

//     for (i = 0; i < this.images.length; i++) {
//         if(i !== n) {
//             this.slide = n;
//             images[i].style.display = "none";
//         }
//     }
//     for (i = 0; i < thumbnail.length; i++) {
//         if(i === n) {
//             thumbnail[i].className.replace("active", "");
//         }
//     }

//     this.images[this.slide - 1].style.display = "block";
//     thumbnail[this.slide - 1].className += "active";
//     captionText.innerHTML = this.caption[this.slide - 1];
    
// }


// backSlide() 
// {
//   showSlides(this.slide - 1);
// }

// nextSlide() 
// {
//   showSlides(this.slide + 1);
// }


globalThis.customElements.define(MyGallery.tag, MyGallery);
