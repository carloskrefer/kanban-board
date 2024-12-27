import { ChangeDetectionStrategy, Component, computed, inject  } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { NavigationToolbarComponent } from '../navigation-toolbar/navigation-toolbar.component';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { map, shareReplay } from 'rxjs';

@Component({
  selector: 'app-navigation-page',
  templateUrl: './navigation-page.component.html',
  styleUrl: './navigation-page.component.scss',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatProgressSpinnerModule,
    NavigationToolbarComponent
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavigationPageComponent {
  private breakpointObserver = inject(BreakpointObserver);

  isHandset = toSignal(this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    ));


}
