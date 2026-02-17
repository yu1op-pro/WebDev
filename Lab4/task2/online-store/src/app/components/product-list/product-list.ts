import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product.model';
import { ProductCard } from '../product-card/product-card';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductCard],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})
export class ProductList {
  products: Product[] = [
    {
      id: 1,
      name: 'Apple MacBook Air 13 2020 13.3',
      description: 'Ноутбук Apple MacBook Air 13 2020 13.3" / 8 Гб / SSD 256 Гб / macOS / MGN63RU/A',
      price: 419900,
      rating: 4.7,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h06/h08/64213171568670.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h06/h08/64213171568670.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h2d/h82/83648592183326.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h3a/h0d/64213216755742.jpg?format=gallery-medium',
      ],
      link: 'https://kaspi.kz/',
    },
    {
      id: 2,
      name: 'Ноутбук Lenovo IdeaPad 3 15.6',
      description: 'Ноутбук Lenovo IdeaPad 3 15.6" / 8 Гб / SSD 256 Гб / DOS / 15IGL05 / 81WQ00ERRK',
      price: 166990,
      rating: 4.5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h6f/hba/64231854538782.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h6f/hba/64231854538782.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h2f/h20/64231858077726.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h7c/h38/64231934689310.jpg?format=gallery-medium',
      ],
      link: 'https://kaspi.kz/',
    },
    {
      id: 3,
      name: 'Ноутбук Acer Aspire 3 15.6',
      description: 'Ноутбук Acer Aspire 3 15.6" / 8 Гб / SSD 256 Гб / Win 11 Pro / A325-45 / ZN.N01SI.03K.',
      price: 245990,
      rating: 4.2,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p24/pae/30100209.jpeg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p24/pae/30100209.jpeg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p62/p4f/30100210.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p24/pae/30100209.jpeg?format=gallery-medium',
      ],
      link: 'https://kaspi.kz/',
    },
    {
      id: 4,
      name: 'Ноутбук Castom E157D 15.6',
      description: 'Ноутбук Castom E157D 15.6" / 16 Гб / SSD 1000 Гб / Win 11 / 101725124',
      price: 249990,
      rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p32/pf7/64711809.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p32/pf7/64711809.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pe8/p7c/63008954.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pcc/p7c/63008955.jpg?format=gallery-medium',
      ],
      link: 'https://kaspi.kz/',
    },
    {
      id: 5,
      name: 'Ноутбук Apple MacBook Air 13',
      description: 'Ноутбук Apple MacBook Air 13 2025 / 16 Гб / SSD 256 Гб / macOS / MW123',
      price: 524990,
      rating: 4.9,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/pab/pc3/35723922.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/pab/pc3/35723922.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p72/pc3/35723924.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p3a/pc3/35723926.jpg?format=gallery-medium',
      ],
      link: 'https://kaspi.kz/',
    },
    {
      id: 6,
      name: 'Ноутбук Huawei MateBook D16 16',
      description: 'Ноутбук Huawei MateBook D16 16" / 8 Гб / SSD 512 Гб / Win 11 Home / MitchellF-W5851',
      price: 339490,
      rating: 4.6,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h83/h09/84934294700062.png?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h83/h09/84934294700062.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h9e/heb/84934294765598.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h67/ha1/84934295027742.png?format=gallery-medium',
      ],
      link: 'https://kaspi.kz/',
    },
    {
      id: 7,
      name: 'Ноутбук Lenovo LOQ 15ARP9 (83JC005ERK) 15.6',
      description: 'Ноутбук Lenovo LOQ 15ARP9 (83JC005ERK) 15.6" / 24 Гб / SSD 512 Гб / Без ОС / 83JC005ERK',
      price: 687990,
      rating: 4.9,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p47/p3f/39330797.JPG?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p47/p3f/39330797.JPG?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p65/p3f/39330798.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p81/p3f/39330799.png?format=gallery-medium',
      ],
      link: 'https://kaspi.kz/',
    },
    {
      id: 8,
      name: 'Ноутбук HP 15-fc0083ci 15.6',
      description: 'Ноутбук HP 15-fc0083ci 15.6" / 8 Гб / SSD 512 Гб / Win 11 / B4LL8EA  / MX2Y3RU/A" / 48 Гб / SSD 512 Гб / macOS / MX2Y3RU/A',
      price: 257900,
      rating: 4.4,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p25/p02/12811787.png?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p25/p02/12811787.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p5e/p02/12811789.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p1e/p05/12811793.png?format=gallery-medium',
      ],
      link: 'https://kaspi.kz/',
    },
    {
      id: 9,
      name: 'Ноутбук Apple MacBook Pro 16 2024 16.2',
      description: 'Ноутбук Apple MacBook Pro 16 2024 16.2" / 48 Гб / SSD 512 Гб / macOS / MX2Y3RU/A" / 48 Гб / SSD 512 Гб / macOS / MX2Y3RU/A',
      price: 1880260,
      rating: 5.0,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p2c/pb7/15675993.png?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p2c/pb7/15675993.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p48/pb7/15675994.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p65/pb7/15675995.png?format=gallery-medium',
      ],
      link: 'https://kaspi.kz/',
    },
    {
      id: 10,
      name: 'Ноутбук HYDRA Home H13 14',
      description: 'Ноутбук HYDRA Home H13 14" / 8 Гб / SSD 256 Гб / Win 10 / H13 ',
      price: 99990,
      rating: 3.1,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p77/pfd/45122459.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/pd9/p4e/35886719.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p6d/p4c/35886720.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p50/p4c/35886721.jpg?format=gallery-medium',
      ],
      link: 'https://kaspi.kz/',
    },
  ];
}
