import { LitElement, html, css } from 'lit';

export class MyGallery extends LitElement {

    static get tag() {
        return 'gallery-view';
    }

    constructor() {
        super();
        this.title = "image gallery";
    }

    static get styles() {
        return css`
            :host {
                display: block;
            }
            .image-gallery {
                position: relative;
            }
            .image {
                display: none;
            }
            .thumbnail:hover {
                cursor: pointer;
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
            }
            .thumbnail {
                opacity: 0.6;
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
        <div class="image-gallery">
            <div class="image">
                <div class="image-number">1 / 4</div>
                <img src="https://upload.wikimedia.org/wikipedia/en/8/8e/IST_Building_PSU.jpg" style="width: 100%;">
            </div>
            <div class="image">
                <div class="image-number">2 / 4</div>
                <img src="https://bpb-us-e1.wpmucdn.com/sites.psu.edu/dist/5/117956/files/2020/05/Westgate-Bldg-5-052520.jpg" style="width: 100%;">
            </div>
            <div class="image">
                <div class="image-number">3 / 4</div>
                <img src="https://i0.wp.com/images.onwardstate.com/uploads/2019/03/IMG_4096.jpeg?fit=4032%2C3024&ssl=1" style="width: 100%;">
            </div>
            <div class="image">
                <div class="image-number">4 / 4</div>
                <img src="https://pbs.twimg.com/media/EkI_7v8XYAYqBO3.jpg" style="width: 100%;">
            </div>

            <a class="back"> < </a>
            <a class="next"> > </a>

            <div class="caption-container">
                <p id="caption"></p>
            </div>

            <div class="row">
                <div class="column">
                    <img class="thumbnail" src="https://upload.wikimedia.org/wikipedia/en/8/8e/IST_Building_PSU.jpg" style="width:100%" alt="West Building 1">
                </div>
                <div class="column">
                    <img class="thumbnail" src="https://bpb-us-e1.wpmucdn.com/sites.psu.edu/dist/5/117956/files/2020/05/Westgate-Bldg-5-052520.jpg" style="width:100%" alt="West Building 2">
                </div>
                <div class="column">
                    <img class="thumbnail" src="https://i0.wp.com/images.onwardstate.com/uploads/2019/03/IMG_4096.jpeg?fit=4032%2C3024&ssl=1" style="width:100%" alt="West Building 3">
                </div>
                <div class="column">
                    <img class="thumbnail" src="https://pbs.twimg.com/media/EkI_7v8XYAYqBO3.jpg" style="width:100%" alt="West Building 4">
                </div>
            </div>
        </div>
        `;
    }

    static get properties() {
        return {
            title: { type: String }
        };
    }
}


/*
THIS IS A MESS AND I HAVE NO IDEA WHAT IM DOING :DDDDDDD

// register globally so we can make sure there is only one
window.SimpleModal = window.SimpleModal || {};
// request if this exists. This helps invoke the element existing in the dom
// as well as that there is only one of them. That way we can ensure everything
// is rendered through the same modal
window.SimpleModal.requestAvailability = () => {
    if (!window.SimpleModal.instance) {
        window.SimpleModal.instance = document.createElement("simple-modal");
        document.body.appendChild(window.SimpleModal.instance);
    }
    return window.SimpleModal.instance;
};

showSlides(n) 
{
    let i;
    let slides = document.getElementsByClassName("image");
    let dots = document.getElementsByClassName("thumbnail");
    let captionText = document.getElementById("caption");

    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace("active", "");
    }

    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += "active";
    captionText.innerHTML = dots[slideIndex-1].alt;
}

let slideIndex = 1;
showSlides(slideIndex);

plusSlides(n) 
{
  showSlides(slideIndex += n);
}

currentSlide(n) 
{
  showSlides(slideIndex = n);
}

export const SimpleModalStore = window.SimpleModal.requestAvailability();
*/


globalThis.customElements.define(MyGallery.tag, MyGallery);
