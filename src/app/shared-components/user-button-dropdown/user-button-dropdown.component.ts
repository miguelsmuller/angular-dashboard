import { Component, Input, ViewChild, HostListener } from '@angular/core';
import { TemplatePortalDirective } from '@angular/cdk/portal';

import { Overlay, OverlayConfig, OverlayRef, CloseScrollStrategy } from '@angular/cdk/overlay';

@Component({
  selector: 'app-user-button-dropdown',
  template: `
      <ng-template portal>
        <ng-content></ng-content>
      </ng-template>`
})
export class UserButtonDropdownComponent {

  constructor(protected overlay: Overlay) { }

  // Property that is set in element tag [reference]="userButtonReference"
  @Input()
  public reference: HTMLElement;

  // Query first element of type TemplatePortalDirective in template = in this case {portal}
  @ViewChild(TemplatePortalDirective, { static: false })
  public contentTemplate: TemplatePortalDirective;

  // Coming from the method overlay.create() | This instance is a handle for managing that specific overlay.
  protected overlayRef: OverlayRef;

  // Property that shows whether the dropdown is being displayed or not
  public showing = false;

  protected getOverlayConfig(): OverlayConfig {
    const customPositionStrategy = this.overlay.position()
      .flexibleConnectedTo(this.reference)
      // .withPush(false)
      .withDefaultOffsetX(-5)
      .withDefaultOffsetY(5)
      .withPositions([{
        originX: 'start',
        originY: 'bottom',
        overlayX: 'start',
        overlayY: 'top'
      }, {
        originX: 'start',
        originY: 'top',
        overlayX: 'start',
        overlayY: 'bottom'
      }]);

    const customOverlayConfig = new OverlayConfig({
      positionStrategy: customPositionStrategy,
      hasBackdrop: true,
      backdropClass: 'app-overlay-backdrop-transparent'
    });

    return customOverlayConfig;
  }

  public show() {
    this.overlayRef = this.overlay.create(this.getOverlayConfig());
    this.overlayRef.attach(this.contentTemplate);
    this.overlayRef.backdropClick().subscribe(() => this.hide());
  }

  public hide() {
    this.overlayRef.detach();
    this.showing = false;
  }
}
