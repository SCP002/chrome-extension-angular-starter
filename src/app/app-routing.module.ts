import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BackgroundComponent } from './background/background.component';
import { OptionsComponent } from './options/options.component';
import { PopupComponent } from './popup/popup.component';
import { SampleComponent } from './sample/sample.component';

const routes: Routes = [
    { path: 'background', component: BackgroundComponent },
    { path: 'options', component: OptionsComponent },
    { path: 'popup', component: PopupComponent },
    { path: 'sample', component: SampleComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: true })],
    exports: [RouterModule]
})
export class AppRoutingModule {

    //

}
