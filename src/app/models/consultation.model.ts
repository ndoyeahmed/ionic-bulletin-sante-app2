import {RendezVousModel} from './rendez-vous.model';
import {UtilisateurModel} from './utilisateur.model';

export class ConsultationModel {
    public id: number;
    public diagnostic: string;
    public prescription: string;
    public dateConsultation: any;
    public rendezVous: RendezVousModel;
    public utilisateur: UtilisateurModel;
}
