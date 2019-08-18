import {LoadingController, ToastController} from '@ionic/angular';
import {Injectable} from '@angular/core';

@Injectable()
export class Utilitaire {
    constructor(
        private loading: LoadingController,
        private toasting: ToastController
    ) {}

    load(msg: string = 'Patientez SVP....') {
        return this.loading.create({
            message: msg,
            spinner: 'circles',
            animated: true
        });
    }

    toastSuccess(msg: string) {
        return this.toasting.create({
            message: msg,
            duration: 3000,
            animated: true,
            position: 'bottom',
            mode: 'ios',
            color: 'success'
        });
    }

    toastError(msg: string) {
        return this.toasting.create({
            message: msg,
            duration: 3000,
            animated: true,
            position: 'bottom',
            mode: 'ios',
            color: 'danger'
        });
    }

    toastWarning(msg: string) {
        return this.toasting.create({
            message: msg,
            duration: 3000,
            animated: true,
            position: 'bottom',
            mode: 'ios',
            color: 'warning'
        });
    }

    toastInfo(msg: string) {
        return this.toasting.create({
            message: msg,
            duration: 3000,
            animated: true,
            position: 'bottom',
            mode: 'ios',
            color: 'info'
        });
    }
}
