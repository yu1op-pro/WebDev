import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-card.html',
  styleUrl: './product-card.css',
})
export class ProductCard {
  @Input() product!: Product;

  activeIndex = 0;

  get activeImage(): string {
    if (!this.product?.images?.length) return this.product.image;
    if (this.activeIndex < 0) return this.product.images[0];
    if (this.activeIndex >= this.product.images.length) return this.product.images[0];
    return this.product.images[this.activeIndex];
  }

  setActive(i: number): void {
    this.activeIndex = i;
  }

  prevImage(): void {
    if (!this.product?.images?.length) return;
    this.activeIndex = (this.activeIndex - 1 + this.product.images.length) % this.product.images.length;
  }

  nextImage(): void {
    if (!this.product?.images?.length) return;
    this.activeIndex = (this.activeIndex + 1) % this.product.images.length;
  }

  get fullStars(): number[] {
    const full = Math.floor(this.product.rating);
    return Array.from({ length: full }, (_, i) => i);
  }

  get emptyStars(): number[] {
    const full = Math.floor(this.product.rating);
    return Array.from({ length: 5 - full }, (_, i) => i);
  }

  shareWhatsApp(): void {
    const text = `Check out this product: ${this.product.link}`;
    const shareUrl = `https://wa.me/?text=${encodeURIComponent(text)}`;
    window.open(shareUrl, '_blank');
  }

  shareTelegram(): void {
    const shareUrl =
      `https://t.me/share/url?url=${encodeURIComponent(this.product.link)}` +
      `&text=${encodeURIComponent(this.product.name)}`;
    window.open(shareUrl, '_blank');
  }
}
