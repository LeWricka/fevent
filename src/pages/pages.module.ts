import {NgModule} from '@angular/core';
import {IonicModule} from 'ionic-angular';
import {ComponentsModule} from '../components';
import {ClickerList} from './clickerList/clickerList';
import {Page2} from './page2/page2';
import {EventPage} from  './eventPage/eventPage';

@NgModule({
    declarations: [
        ClickerList,
        Page2,
        EventPage,
    ],
    imports: [IonicModule, ComponentsModule],
    exports: [
        ClickerList,
        EventPage,
        // Page2,
    ],
    entryComponents: [],
    providers: [],
})

export class PagesModule {
}
