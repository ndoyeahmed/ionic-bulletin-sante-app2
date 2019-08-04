import {ProfileModel} from './profile.model';

export class UtilisateurModel {
    public id: number;
    public nom: string;
    public prenom: string;
    public nomComplet: string;
    public telephone: string;
    public adresse: string;
    public email: string;
    public password: string;
    public connected: boolean;
    public profile: ProfileModel;
}
