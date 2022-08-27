import { Component, EventEmitter, Input, OnChanges, Output } from "@angular/core";

@Component({
    selector: 'pm-stars',
    templateUrl: './stars.component.html',
    styleUrls: ['./stars.component.css']
})

export class StarsComponent implements OnChanges{
    @Input() rating: number = 0;
    @Output() ratingClick: EventEmitter<string> = new EventEmitter<string>();
    cropWidth: number = 75;

    ngOnChanges(): void {
        this.cropWidth = this.rating * 75/5;
    }

    public onClick(): void{
        this.ratingClick.emit(' - Avaliação ' + this.rating + ' foi clicada');
    }
}