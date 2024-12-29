import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginModalComponent } from '../login-modal/login-modal.component';

@Component({
    selector: 'app-login-page',
    imports: [],
    standalone: true,
    templateUrl: './login-page.component.html',
    styleUrl: './login-page.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginPageComponent implements OnInit {
    readonly dialog = inject(MatDialog);

    ngOnInit(): void {
        this.openDialog();
    }

    openDialog() {
        this.dialog.open(
            LoginModalComponent,
            {
                disableClose: true,
                autoFocus: false,
            }
        );
    }
}
