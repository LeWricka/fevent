import {Component} from '@angular/core';
import {Alert, AlertController, NavController} from 'ionic-angular';
import {ClickersService} from '../../services';
import {EventPage} from '../eventPage/eventPage';

@Component({
    templateUrl: './clickerList.html',
})

export class ClickerList {

    public clickerService: ClickersService;
    public title: string;
    private nav: NavController;
    private alertController: AlertController;
    public codeInput: string;

    constructor(nav: NavController, clickerService: ClickersService, alertController: AlertController) {
        this.nav = nav;
        this.clickerService = clickerService;
        this.alertController = alertController;
    }

    private checkCode(): void {
        if (this.codeInput !== '2brodas') {
            this.presentConfirm();
        }
        else {
            this.nav.push(EventPage);
        }
    }

    public goToConcert(): void {
        this.checkCode();
    }

    private presentConfirm(): void {
        let alert: Alert = this.alertController.create({
            title: 'Incorrect code',
            subTitle: 'Please try again',
            buttons: ['Dismiss'],
        });
        alert.present();
    }
}
