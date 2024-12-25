import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-navigation-account-button',
  imports: [MatButtonModule, MatIconModule],
  standalone: true,
  templateUrl: './navigation-account-button.component.html',
  styleUrl: './navigation-account-button.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavigationAccountButtonComponent {

}
