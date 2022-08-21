import { Component, OnChanges, SimpleChanges } from "@angular/core";

@Component({
    selector: 'pm-stars',
    templateUrl: './stars.component.html',
    styleUrls: ['./stars.component.css']
})

export class StarsComponent implements OnChanges{
    rating: number = 4;
    cropWidth: number = 75;

    ngOnChanges(): void {
        this.cropWidth = this.rating * 75/5;
    }
}