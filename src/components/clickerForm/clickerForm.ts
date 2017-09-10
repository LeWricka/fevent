'use strict';

import {Component} from '@angular/core';
import {ClickersService} from '../../services';
import {Alert, AlertController, NavController} from 'ionic-angular';
import {EventPage} from '../../pages/eventPage/eventPage';

@Component({
    selector: 'clicker-form',
    templateUrl: './clickerForm.html',
})

export class ClickerForm {

    private nav: NavController;
    private clickerService: ClickersService;
    private alertController: AlertController;

    constructor(nav: NavController, clickerService: ClickersService, alertController: AlertController) {
        this.clickerService = clickerService;
        this.nav = nav;
        this.alertController = alertController;
    }

    private checkCode(formValue: Object): void {
        if (formValue['codeInput'] !== '2brodas') {
            this.presentConfirm();
        }
        else {
            this.nav.push(EventPage);
        }
    }

    public goToConcert(formValue: Object): void {
        this.checkCode(formValue);
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
