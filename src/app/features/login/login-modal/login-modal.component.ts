import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { CoreModalComponent } from '../../../core/components/core-modal/core-modal.component';

@Component({
    selector: 'app-login-modal',
    imports: [
        CoreModalComponent
    ],
    standalone: true,
    templateUrl: './login-modal.component.html',
    styleUrl: './login-modal.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginModalComponent {
    readonly dialogRef = inject(MatDialogRef<LoginModalComponent>);

    close() {
        this.dialogRef.close();
    }
}
