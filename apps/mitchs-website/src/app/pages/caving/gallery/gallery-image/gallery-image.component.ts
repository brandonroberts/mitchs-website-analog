import { Component, Input } from "@angular/core";
import { galleryImage } from "../gallery.service";

@Component({
  selector: "mitchs-gallery-image",
  standalone: true,
  template: `
    <div style="background-image: url('{{this.image.url}}');">
      <h2>{{this.image.title}}</h2>
    </div>
  `,
  styles: [`
  div {
    min-width: 400px;
    height: 400px;
    background-size: cover;
  }
  h2 {
    display: none;
  }
  `]
})
export default class GalleryImageComponent {
  @Input() image: galleryImage = {} as galleryImage;
}