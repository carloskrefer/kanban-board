import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { NavigationProjectSheetComponent } from '../navigation-project-sheet/navigation-project-sheet.component';

@Component({
    selector: 'app-navigation-project-button',
    imports: [MatButtonModule, MatIconModule],
    standalone: true,
    templateUrl: './navigation-project-button.component.html',
    styleUrl: './navigation-project-button.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavigationProjectButtonComponent {
    bottomSheet = inject(MatBottomSheet);

    openBottomSheet() {
        this.bottomSheet.open(NavigationProjectSheetComponent);
    }
}
