import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { AsyncPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDrawer } from '@angular/material/sidenav';
import { map, Observable, shareReplay } from 'rxjs';

@Component({
  selector: 'app-navigation-hamburger',
  imports: [
    AsyncPipe,
    MatIconModule,
    MatButtonModule
  ],
  standalone: true,
  templateUrl: './navigation-hamburger.component.html',
  styleUrl: './navigation-hamburger.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavigationHamburgerComponent {
  @Input({ required: true }) drawer!: MatDrawer;

  private breakpointObserver = inject(BreakpointObserver);

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );
}
