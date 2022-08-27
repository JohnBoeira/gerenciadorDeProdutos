import { Component, Input, OnChanges } from "@angular/core";

@Component({
    selector: 'pm-stars',
    templateUrl: './stars.component.html',
    styleUrls: ['./stars.component.css']
})

export class StarsComponent implements OnChanges{
    @Input() rating: number = 0;
    cropWidth: number = 75;

    ngOnChanges(): void {
        this.cropWidth = this.rating * 75/5;
    }
}