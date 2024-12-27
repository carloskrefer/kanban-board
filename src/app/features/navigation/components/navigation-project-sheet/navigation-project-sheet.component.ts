import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { MatListModule } from '@angular/material/list';

@Component({
    selector: 'app-navigation-project-sheet',
    imports: [MatListModule],
    standalone: true,
    templateUrl: './navigation-project-sheet.component.html',
    styleUrl: './navigation-project-sheet.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavigationProjectSheetComponent {
    private bottomSheetRef =
        inject<MatBottomSheetRef<NavigationProjectSheetComponent>>(MatBottomSheetRef);

}
