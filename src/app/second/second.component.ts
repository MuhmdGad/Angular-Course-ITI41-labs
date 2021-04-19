import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css'],
  // styleUrls: ['../first/firs.component.css'],
})
export class SecondComponent implements OnInit {
  currentImage = 0;
  interval: any = 0;
  images = [
    {
      imageName: 'Nature',
      imageId: 1,
      imageUrl:
        'https://i.pinimg.com/564x/01/d4/d7/01d4d71022b4872125932fe69322f31b.jpg',
    },
    {
      imageName: 'Nature',
      imageId: 2,
      imageUrl:
        'https://i.pinimg.com/564x/35/c0/56/35c0566a0f89ee3d16169eafb6bbe29f.jpg',
    },

    {
      imageName: 'Nature',
      imageId: 3,
      imageUrl:
        'https://i.pinimg.com/564x/1b/e5/51/1be5510b7aa8c6d345493d0028b37a6d.jpg',
    },

    {
      imageName: 'Nature',
      imageId: 4,
      imageUrl:
        'https://i.pinimg.com/564x/95/46/98/95469833e5fa329cb921cb4f65ec52d0.jpg',
    },

    {
      imageName: 'Nature',
      imageId: 5,
      imageUrl:
        'https://i.pinimg.com/564x/ec/38/dc/ec38dc98a555dd13fbfec3a9c8501d5c.jpg',
    },

    {
      imageName: 'Nature',
      imageId: 6,
      imageUrl:
        'https://i.pinimg.com/564x/e0/76/13/e076133606f1544e1ffeea2d0c87c78e.jpg',
    },

    {
      imageName: 'Nature',
      imageId: 7,
      imageUrl:
        'https://i.pinimg.com/564x/20/5f/e9/205fe9fa91fc1c2311bfe30a870067a1.jpg',
    },

    {
      imageName: 'Nature',
      imageId: 8,
      imageUrl:
        'https://i.pinimg.com/564x/00/bc/8b/00bc8b1b592c0af469d569ff35730ce3.jpg',
    },
  ];

  bindableImage = this.images[this.currentImage].imageUrl;

  constructor() {}

  startSlideShow() {
    this.interval = setInterval(() => {
      if (this.currentImage !== this.images.length) {
        ++this.currentImage;
      } else {
        this.currentImage = 0;
      }
      this.bindableImage = this.images[this.currentImage].imageUrl;
    }, 800);
  }


  stopSlideShow() {
    clearInterval(this.interval);
  }


  previousImage() {
    if (this.currentImage !== 0) --this.currentImage;
    this.bindableImage = this.images[this.currentImage].imageUrl;
  }


  nextImage() {
    if (this.currentImage !== this.images.length) ++this.currentImage;
    this.bindableImage = this.images[this.currentImage].imageUrl;
  }

  ngOnInit(): void {}

}
