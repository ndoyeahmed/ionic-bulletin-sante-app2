import {Directive, Input, TemplateRef, ViewContainerRef} from '@angular/core';
import {AuthService} from './auth.service';

@Directive({
    selector: '[appHasAuthority]'
})
export class HasAuthorityDirective {
    private authority: string;

    constructor(
        private auth: AuthService,
        private templateRef: TemplateRef<any>, private viewContainerRef: ViewContainerRef
    ) {}

    @Input()
    set appHasAnyAuthority(value: string) {
        this.authority = typeof value === 'string' ?  value as string : value as string;
        this.updateView();
    }

    private updateView(): void {
        this.viewContainerRef.clear();
        if (this.auth.hasAuthority(this.authority, this.auth.identity())) {
            this.viewContainerRef.createEmbeddedView(this.templateRef);
        }
    }
}
