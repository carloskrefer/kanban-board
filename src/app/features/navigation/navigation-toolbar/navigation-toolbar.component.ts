import { ChangeDetectionStrategy, Component, inject, Input } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NavigationAccountButtonComponent } from '../navigation-account-button/navigation-account-button.component';
import { NavigationProjectButtonComponent } from '../navigation-project-button/navigation-project-button.component';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { map, Observable, shareReplay } from 'rxjs';
import { MatIconModule } from '@angular/material/icon';
import { MatDrawer } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { NavigationHamburgerComponent } from '../navigation-hamburger/navigation-hamburger.component';

@Component({
  selector: 'app-navigation-toolbar',
  imports: [
    MatToolbarModule,
    NavigationProjectButtonComponent,
    NavigationAccountButtonComponent,
    MatIconModule,
    MatButtonModule,
    NavigationHamburgerComponent
  ],
  standalone: true,
  templateUrl: './navigation-toolbar.component.html',
  styleUrl: './navigation-toolbar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavigationToolbarComponent {
  @Input({ required: true }) drawer!: MatDrawer;


}
