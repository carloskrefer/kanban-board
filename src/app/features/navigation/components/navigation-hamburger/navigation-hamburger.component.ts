import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
    selector: 'app-navigation-hamburger',
    imports: [
        MatIconModule,
        MatButtonModule
    ],
    standalone: true,
    templateUrl: './navigation-hamburger.component.html',
    styleUrl: './navigation-hamburger.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavigationHamburgerComponent {

    toggleDrawer() {
        console.error("Toggle drawer should be implemented!");
    }


}
