import { Component, OnInit } from '@angular/core';
import { OldtestamentService } from './oldtestament.service';

@Component({
  selector: 'app-oldtestament',
  templateUrl: './oldtestament.component.html',
  styleUrls: ['./oldtestament.component.css'],
  providers: [OldtestamentService]
})
export class OldtestamentComponent implements OnInit {

  constructor(private oldtestamentService: OldtestamentService) { }

  ngOnInit(): void {
  }

}
