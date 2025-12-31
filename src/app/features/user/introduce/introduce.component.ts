import { Component, OnInit } from '@angular/core';
import { MessageSeverity, ToastService } from 'src/app/shared/services/toast.service';
import { IImage } from './models/interface';

@Component({
  selector: 'app-introduce',
  templateUrl: './introduce.component.html',
  styleUrls: ['./introduce.component.scss']
})
export class IntroduceComponent implements OnInit {

  imageList: IImage[] = [
    { src: 'https://sontadapha.com/wp-content/uploads/2019/07/0.-1400x471.png', visible: false },
    { src: 'https://sontadapha.com/wp-content/uploads/2019/07/1-1400x460.png', visible: false },
    { src: 'https://sontadapha.com/wp-content/uploads/2019/07/2.-1038x800.png', visible: false },
    { src: 'https://sontadapha.com/wp-content/uploads/2019/07/3.-1400x452.png', visible: false },
    { src: 'https://sontadapha.com/wp-content/uploads/2019/07/4.-1210x800.png', visible: false },
    { src: 'https://sontadapha.com/wp-content/uploads/2019/07/5-1400x686.png', visible: false },
    { src: 'https://sontadapha.com/wp-content/uploads/2019/07/6-1358x800.png', visible: false }
  ];

  constructor(
    private toastService: ToastService,
  ) { }

  ngOnInit(): void {
  }

}
