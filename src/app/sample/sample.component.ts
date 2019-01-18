import { Component, ViewEncapsulation } from '@angular/core';

/*
 * 'ViewEncapsulation.None' is used to set page body margins to 0 for this component.
 * If body margins is set to 0 globally (for example, if bootstrap is used), you can
 * remove this parameter.
*/
@Component({
    selector: 'app-sample',
    templateUrl: './sample.component.html',
    styleUrls: ['./sample.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class SampleComponent {

    public onBtnClick(): void {
        alert('SampleComponent.onBtnClick()');
    }

}
